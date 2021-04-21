var mouse_event = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= width_of_line;
        console.log("last positon of x and y coordinates are ");
        console.log("x= " + last_position_of_x + "y= " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current positon of x and y coordinates are ");
        console.log("x= " + current_position_of_x + "y= " + current_position_of_y);
        ctx.arc(current_position_of_x,current_position_of_y, 30 , 0 , 2*Math.PI);
        ctx.stroke();
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e) {
    mouse_event = "mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}