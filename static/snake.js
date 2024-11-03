// Library functions for the Snake project

/**
 * Draw a complete snake on canvas.
 * 
 * This function iterates through a list of coordinate objects and,
 * for each one, uses the given coordinates (x, y) and draws a square on
 * the provided canvas context. It does not return any value.
 *
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
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
 * @param {HTMLCanvasElement} canvas - An html canvas element.
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
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
 * @param {HTMLCanvasElement} canvas - An html canvas element.
 * @returns {void}
 */
function advance(snake, canvas) {

    const head ={x: snake[0].x + 10, y: snake[0].y}

    // Check if hits wall
    const topWall = 0;
    const rightWall = canvas.width - 10;
    const bottomWall = canvas.height -10;
    const leftWall =  0;
    
    if (didHitWall(head, canvas, snake)) {
        return         
    }

    snake.unshift(head);
    snake.pop();
}


/**
 * Check if the head of the snake hits a wall.
 * 
 * This function takes snakes's head position and the canvas as parameters,
 * and evaluates if the head hits any wall when the snake advances.
 * If hits a wall, returns 'true' placing the snake in the middle of the canvas,
 * otherwise returns 'false'.
 *
 * @param {{x: number, y: number}} head - An object with 'x' and 'y' coordinates.
 * @param {HTMLCanvasElement} canvas - An html canvas element.
 * @param {{x: number, y: number}[]} - An array of objects, each with 'x' and 'y' coordinates.
 * @returns {boolean} - Returns 'true' when the head hits a wall, 'false' if it does not.
 */
function didHitWall(head, canvas, snake) {
    const topWall = 0;
    const rightWall = canvas.width - 10;
    const bottomWall = canvas.height -10;
    const leftWall =  0;
    
    if (head.x > rightWall ||
        head.x < topWall ||
        head.y > bottomWall ||
        head.y < leftWall
    ) {
        // Set initial coordinates
        const initialX = canvas.width / 2;
        const initialY = canvas.height / 2;
          
        // Reposition snake in the middle of canvas
        snake[0] = {x: initialX + 10, y: initialY};
        snake[1] = {x: initialX, y: initialY};
        snake[2] = {x: initialX -10, y:initialY};
        return true
    }
    return false
}


const Snake = {
    drawSnake,
    clearCanvas,
    advance
};

export default Snake;