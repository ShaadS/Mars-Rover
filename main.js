var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
backGroundImage="mars.jpg";
roverImage="rover.png";
roverX=10;
roverY=10;
function add(){
background_imgtag=new Image();
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
function my_keyDown(e){
    keypressed=e.keyCode;
    if(keypressed=='37'){
        Left();
    }
    if(keypressed=='38'){
        Up();
    }
    if(keypressed=='39'){
        Right();
    }
    if(keypressed=='40'){
        Down();
    }
}
function Up(){
if(roverY>=0){
    roverY=roverY-30;
    uploadbackground();
    uploadrover();
}
}
function Down(){
    if(roverY<=500){
        roverY=roverY+30;
        uploadbackground();
        uploadrover();
    }
    }
    function Left(){
        if(roverX>=0){
            roverX=roverX-30;
            uploadbackground();
            uploadrover();
        }
        }
        function Right(){
            if(roverX<=700){
                roverX=roverX+30;
                uploadbackground();
                uploadrover();
            }
            }
