canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x;
var last_position_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
mouseEvent="Down";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="Up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="Leave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
console.log(e);
currentpositionmousex=e.clientX-canvas.offsetLeft;
currentpositionmousey=e.clientY-canvas.offsetTop;
if(mouseEvent=="Down"){ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(currentpositionmousex, currentpositionmousey);
    ctx.stroke();

}
last_position_x=currentpositionmousex;
last_position_y=currentpositionmousey;
}
var last_position_of_touch_x,last_position_of_touch_y;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992) {
    document.getElementById("my_Canvas").width=new_width;
    document.getElementById("my_Canvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
console.log(e);
currentpositiontouchx=e.touches[0].clientX-canvas.offsetLeft;
currentpositiontouchy=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(currentpositiontouchx, currentpositiontouchy);
    ctx.stroke();


last_position_x=currentpositiontouchx;
last_position_y=currentpositiontouchy;
}
