// Library functions for the Snake project

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

    for (let i = 0; i < snake.length; i++) {
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


/**
 * Allow snake move to the right.
 * 
 * This function inserts a new coordinate object to the array, incrementing the
 * x value by 10 pixels, respecting the first object in the array. It then eliminates
 * the last coordinate object. It does not return any value.
 *
 * @param {{x: number, y: number}} snake - An array of objects, each with 'x' and 'y' coordianates.
 * @returns {void}
 */
function advance(snake) {

    const head ={x: snake[0].x + 10, y: snake[0].y}
    snake.unshift(head);
    snake.pop();
}


const Snake = {
    drawSnake,
    clearCanvas,
    advance
};

export default Snake;