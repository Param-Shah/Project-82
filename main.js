canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")

mouseEVENT = ""




color = ""
radius = ""
width = ""

addEventListener("mousedown" , my_mousedown)
function my_mousedown() {
    color = document.getElementById("color_circle")
    radius = document.getElementById("radius_circle")
    width = document.getElementById("width_line_circle")

    mouseEvent = "mousedown"
}

addEventListener("mouseup" , my_mouseup)
function my_mouseup() {
    mouseEvent = "mouseup"
}

addEventListener("mouseleave" , my_mouseleave)
function my_mouseleave() {
    mouseEvent = "mouseleave"
}

addEventListener("mousemove" , my_move)
function my_move() {
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.arc(currentX , currentY , radius , 0 , 2 * Math.PI)
        ctx.stroke()
    }
}