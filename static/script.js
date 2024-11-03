import snakeLibrary from "./snake.js";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Find canvas element
    const canvas = document.getElementById('canvas1');

    // Create a context object
    const context = canvas.getContext('2d');

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
        {x: 470, y: 470},
        {x: 460, y: 470},
        {x: 450, y: 470},
    ];

    // Draw snake on canvas
    snakeLibrary.drawSnake(snake, context);

    
    // Listen for Right key
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'ArrowRight') {
            // Clear canvas
            snakeLibrary.clearCanvas(context, canvas);
            // Move right
            snakeLibrary.advance(snake);
            snakeLibrary.drawSnake(snake, context);
            // console.log(snake);
        }
    }) 
    
})