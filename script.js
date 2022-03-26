const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var slider = document.getElementById("penSlider");
var output = document.getElementById("span");

var clearBtn = document.getElementById("delete");
var color = document.getElementById("chooseColour");
var penSize = document.getElementById("chooseColour");

let mouse_pressed = false;
let colour = 'black';
let x, y = undefined;

output.innerHTML = slider.value;

    // Outputs slider's value on webpage
    slider.oninput = function() {
    output.innerHTML = this.value;
    }
    
// Allows to create a circle on canvas
// x, y coordinates refer to the position on canvas
function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, slider.value, 0, Math.PI * 2);
    
    context.fillStyle = colour;
    context.fill();
}

canvas.addEventListener("mousedown", () => {
    mouse_pressed = true;
    // If a mouse click was detected, the mouse_pressed boolean will be set to true
    x = e.offsetX;
    y = e.offsetY;
});

// Checks for mouse click event on application
// {e} is the position of the mouse
canvas.addEventListener("mouseup", () => {
    mouse_pressed = false;
    // If NO mouse click was detected, the mouse_pressed boolean will be set to false
    x, y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    // checks if mouse was pressed and will note the position of the mouse
    if(mouse_pressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        // Creates a circle at the position of the mouse at that instant
        drawCircle(x2,y2);
        drawLine(x, y, x2, y2);
        x = x2, y = y2;
    }
});

color.addEventListener('change', (e) => {
    colour = e.target.value;
});

clearBtn.addEventListener('mousedown', (e) => {
    context.clearRect(0,0,canvas.width, canvas.height);
});

function drawLine(x, y, x2, y2){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2,y2);
    context.strokeStyle = colour;
    context.lineWidth = slider.value * 2;
    context.stroke();
}
