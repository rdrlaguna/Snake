import Snake from "./snake.js";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {






    /*
    // Find canvas element
    const canvas = document.getElementById('canvas1');

    // Create a context object
    const context = canvas.getContext('2d');

    // Set canvas size to html element size
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    // Prevent re-scaling
    window.addEventListener('resize', function(snake) {
    // Adjust canvas size when window is resized
        canvas.width = GAME.width;
        canvas.height = GAME.height;

        // Set initial coordinates
        const initialX = canvas.width / 2;
        const initialY = canvas.height / 2;
    
        // Represent snake using coordinates
        snake = [
            {x: initialX + 10, y: initialY},
            {x: initialX, y: initialY},
            {x: initialX - 10, y: initialY},
        ];
        Snake.drawSnake(snake, context, CELL_SIZE);
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
    Snake.drawSnake(snake, context, CELL_SIZE);

    // Initialize game variables
    let speed = {x: 10, y: 0};
    let food = Snake.createFood(canvas, snake);
    let score = {s: 0};

    const motion = setInterval( function() {
        Snake.clearCanvas(context, canvas);
        Snake.drawFood(food, context, CELL_SIZE);  
        Snake.advance(snake, canvas, speed, food, score);    
        Snake.drawSnake(snake, context, CELL_SIZE);
    }, 100);

    
    // Listen for a pressed key
    document.addEventListener('keydown', function(event) {
        
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
    */

})






