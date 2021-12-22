canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="purple";

ctx.beginPath();
ctx.StrokeStyle=color;
ctx.lineWidth=8;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
mouse_x=e.clientX-canvas.offsetleft;
mouse_y=e.clientY-canvas.offsettop

circle(mouse_x, mouse_y)


}
function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.StrokeStyle=color;
    ctx.lineWidth=8;
    ctx.arc(200, 200, 40, 0, 2*Math.PI);
}