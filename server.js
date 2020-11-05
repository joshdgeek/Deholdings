
var PORT = process.env.PORT || 3000
const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const path = require("path")
app.use(require("body-parser")())


app.use(express.static("public"))

app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname,"public","contact.html"))
})

app.post("/formsubmit",function(req,res){
    console.log("email : " + req.body.email);
    console.log("password: "+ req.body.password)
    console.log("text : "+ req.body.text)

 let transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let mailOption = {
        from:process.env.EMAIL,
        to:process.env.RECIEVING_EMAIL,
        subject:"REQUEST OF DEHOLDINGS SERVICES",
        text: req.body.text
    }

    transport.sendMail(mailOption,function(err,data){
        if(err){
            console.log("email not sent"+ err)
        }else{
            console.log(" woo hoo email sent")
        }
    })
   
    res.redirect(303,"/contact")
})




app.listen(PORT,function(){
    console.log("server started")
    console.log(process.env.RECIEVING_EMAIL)
})