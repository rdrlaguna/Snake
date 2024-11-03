
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

    drawSnake(snake, context);

    /*
    // Listen for Right key
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'ArrowRight') {
            // Clear canvas
            clearCanvas(ctx);
            // Move right
            advance(snake);
            drawSnake(snake);
            // console.log(snake);
        }
    }) 
    */

})





// Draws snake parts
function drawSnakePart(snakePart, ctx) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Prints snake parts on canvas
function drawSnake(snake, ctx,) {

    for (i = 0; i < snake.length; i++) {
        drawSnakePart(snake[i], ctx);
    }
    
    //snake.forEach(drawSnakePart());
}

/*
// Enable snake move horizontally
function advance(snake) {
    // Create new head
    const head ={x: snake[0].x + 10, y: snake[0].y}
    // Insert new head
    snake.unshift(head);
    // Remove tail
    snake.pop();
}

// Clear canvas
function clearCanvas(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

*/

