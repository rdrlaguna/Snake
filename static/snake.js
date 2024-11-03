
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
    drawSnake(snake, context);

    
    // Listen for Right key
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'ArrowRight') {
            // Clear canvas
            clearCanvas(context, canvas);
            // Move right
            advance(snake);
            drawSnake(snake, context);
            // console.log(snake);
        }
    }) 
    

})



/**
 * Draw a complete snake on canvas.
 * 
 * This function iterates through a list of coordinate objects and,
 * for each one, uses the given coordinates (x, y) and draws a square on
 * the provided canvas context. It does not return any value.
 *
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordianates.
 * @param {CanvasRenderingContext2D} ctx - The canvas to draw on.
 * @returns {void}
 */
function drawSnake(snake, ctx) {

    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokestyle = 'darkgreen';
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);
    }
}


/**
 * Delete previously drawn content on canvas.
 * 
 * This function calls the 'clearRect' method on the context object to 
 * eliminate all forms and shapes on the canvas. It does not return any value.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas to clear.
 * @param {canvas} canvas - The html canvas element.
 * @returns {void}
 */
function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// Enable snake move horizontally
function advance(snake) {
    // Create new head
    const head ={x: snake[0].x + 10, y: snake[0].y}
    // Insert new head
    snake.unshift(head);
    // Remove tail
    snake.pop();
}

