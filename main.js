var mouseEvent = "empty";
var touchEvent = "empty";
var last_position_x, last_position_y;

canvas=document.getElementById("paintcanvas");
ctx=canvas.getContext("2d");
color="blue";

widthofline = 2;
radius=20;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
   color=document.getElementById("color").value;
   width_of_line=document.getElementById("widthofline").value;
   radius=document.getElementById("radius").value;
   mouseEvent="mouseDown";

}


canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentpositionx=e.clientX-canvas.offsetLeft;
    currentpositiony=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown") {
        console.log("Current position of x and y = ");
        console.log("x = "+ currentpositionx +"y = "+ currentpositiony)
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthofline;
        ctx.arc(currentpositionx , currentpositiony , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }

    lastpositionofx=currentpositionx;
    lastpositionofy=currentpositiony;

}