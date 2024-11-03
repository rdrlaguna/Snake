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

    
    // Listen for Right key
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'ArrowRight') {
            // Clear canvas
            Snake.clearCanvas(context, canvas);
            // Move right
            Snake.advance(snake);
            Snake.drawSnake(snake, context);
            // console.log(snake);
        }
    }) 
    
})

/*
function didGameEnd() {  
    for (let i = 4; i < snake.length; i++) {    
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (didCollide) return true  
    }

    const hitLeftWall = snake[0].x < 0; 
    const hitRightWall = snake[0].x > gameCanvas.width - 10;  
    const hitToptWall = snake[0].y &lt; 0;  
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}
*/