import Snake from "./snake.js";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Find canvas element
    const canvas = document.getElementById('canvas1');

    // Create a context object
    const context = canvas.getContext('2d');

    // Set canvas size to html element size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Prevent re-scaling
    window.addEventListener('resize', function(snake) {
    // Adjust canvas size when window is resized
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Set initial coordinates
        const initialX = canvas.width / 2;
        const initialY = canvas.height / 2;
    
        // Represent snake using coordinates
        snake = [
            {x: initialX + 10, y: initialY},
            {x: initialX, y: initialY},
            {x: initialX - 10, y: initialY},
        ];
        Snake.drawSnake(snake, context);
    })

    // Set initial coordinates
    const initialX = canvas.width / 2;
    const initialY = canvas.height / 2;
    
    // Represent snake using coordinates
    let snake = [
        {x: initialX + 10, y: initialY},
        {x: initialX, y: initialY},
        {x: initialX - 10, y: initialY},
    ];

    // Draw snake on canvas
    Snake.drawSnake(snake, context);

    // Initialize speed variable
    let speed = {x: 10, y: 0};

    const motion = setInterval( function() {
        Snake.clearCanvas(context, canvas);   
        Snake.advance(snake, canvas, speed);    
        Snake.drawSnake(snake, context); 
    }, 200);


    // Listen for a pressed key
    document.addEventListener('keydown', function(event) {

        console.log(event)
        
        switch(event.key) {
            case 'ArrowUp':
                speed.x = 0;
                speed.y = -10;
                break;

            case 'ArrowRight':
                speed.x = 10;
                speed.y = 0;
                break;

            case 'ArrowDown':
                speed.x = 0;
                speed.y = 10;
                break;

            case 'ArrowLeft':
                speed.x = -10;
                speed.y = 0;
                break;

            case ' ':
                clearInterval(motion);
                break;

            default:
                speed.x = 10;
                speed.y = 0;
                break;
        }
    })

})


// Generate random set of coordinates for food
    // If food is where snake is
        // Generate new set of coordinates
// Print food

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function createFood(canvas, snake) {

    let food = {
        x: getRandomInt(canvas.width - 10),
        y : getRandomInt(canvas.height - 10)
    }

    for (let i = 0; i < snake.length; i++) {
        if ((snake[i].x == food.x) && (snake[i].y === food.y)) {
            food(canvas, snake);
        }
    }

    ctx.fillStyle = 'red'; 
    ctx.strokestyle = 'darkred'; 
    ctx.fillRect(food.x, food.y, 10, 10); 
    ctx.strokeRect(food.x, food.y, 10, 10);
}
