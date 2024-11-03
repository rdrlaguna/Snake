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
    let speed = {x: 0, y: 0};
    
    // Listen for Right key
    document.addEventListener('keydown', function(event) {
        
        console.log(speed);

        if (event.key ==='ArrowUp') {
            // Set speed variable
            speed = {x: 0, y: -10};
            Snake.clearCanvas(context, canvas);
            // Move right
            Snake.advance(snake, canvas, speed);
            Snake.drawSnake(snake, context);
        }
        else if (event.key === 'ArrowRight') {
            // Set speed variable
            speed = {x: 10, y: 0};
            // Clear canvas
            Snake.clearCanvas(context, canvas);
            // Move right
            Snake.advance(snake, canvas, speed);
            Snake.drawSnake(snake, context);
        }
    }) 
})
