// Find canvas element
const canvas = document.getElementById('canvas1');

// Create a context object
const ctx = canvas.getContext('2d');

// Set canvas to window size,. Prevents re-scaling
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

window.addEventListener('resize', function() {
    // Adjust canvas size when window is resized
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
})


// Represent snake using coordinates
let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
];

// Draws snake parts
function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Prints snake parts on canvas
function drawSnake() {
    snake.forEach(drawSnakePart);
}

drawSnake();