//image slider
var images = ["aluminium door.jpg", "aluminium1.jpg","aluminium3.jpg","aluminium2.jpg","aluminium4.jpg","unnamed.jpg","door.jpg",
  "door1.jpg"]
var num  = 0;
function next(){
    var slider = document.querySelector("#slider");
    num++;
   if(num ===images.length){
       num=0;
   }
    slider.src = images[num]
}

function prev(){
    var slider = document.querySelector("#slider");
    num--;
    if(num < 0){
        num=images.length-1
    }
    slider.src = images[num]
}