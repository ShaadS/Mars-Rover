var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
backGroundImage="mars.jpg";
roverImage="rover.png";
roverX=10;
roverY=10;
function add(){
var background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=backGroundImage;

rover_Imgtag=new Image();
rover_Imgtag.onload=uploadrover;
rover_Imgtag.src=roverImage;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_Imgtag,roverX,roverY,roverWidth,roverHeight);
}
window.addEventListener("keydown",my_keyDown);
