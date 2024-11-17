// Library functions for the Snake project


export class Snake {
    constructor(rows) {
        this.position = {x: 0, y: Math.floor(rows/2)},
        this.velocity = {x: 1, y: 0},

        this.length = 3,
        this.segments = []
    }
    update() {
        // Move snake
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // Add new segment to the beginning
        this.segments.unshift(
            {
                x: this.position.x,
                y: this.position.y
            }
        );
        // Remove last element from array
        if (this.segments.length > this.length) {
            this.segments.pop();
        }
    }
    draw(context, size) {
        this.segments.forEach((segment, i) => {
            // Differenciate snake's head
            if (i === 0) context.fillStyle = 'gold';
            else context.fillStyle = 'green';

            // Draw snake
            context.fillRect (
                segment.x * size,
                segment.y * size,
                size,
                size
            );
        })
    }

     // Control snake direction
     moveUp() {
        if (this.velocity.y === 0) {
            this.velocity.x = 0;
            this.velocity.y = -1;    
        }
    }
    moveDown() {
        if (this.velocity.y === 0) {
            this.velocity.x = 0;
            this.velocity.y = 1;
        }
    }
    moveLeft() {
        if (this.velocity.x === 0) {
            this.velocity.x = -1;
            this.velocity.y = 0;
        }
    }
    moveRight() {
        if (this.velocity.x === 0) {
            this.velocity.x = 1;
            this.velocity.y = 0;
        }
    }
}



/**
 * Draw a complete snake on canvas.
 * 
 * This function iterates through a list of coordinate objects and,
 * for each one, uses the given coordinates (x, y) and draws a square on
 * the provided canvas context. It does not return any value.
 *
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
 * @param {CanvasRenderingContext2D} ctx - The canvas to draw on.
 * @param {number} size - The size of each snake body part.
 * @returns {void}
 */
function drawSnake(snake, ctx, size) {

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokestyle = 'darkgreen';
        ctx.fillRect(snake[i].x, snake[i].y, size, size);
        ctx.beginPath();
        ctx.strokeRect(snake[i].x, snake[i].y, size, size);
        ctx.stroke();
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
 * This function inserts a new coordinate object to the array, changing 
 * the x or y values, respecting the first object in the array. This 
 * modifies the snake direccion. It then eliminates the last coordinate
 * object. It does not return any value.
 *
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
 * @param {HTMLCanvasElement} canvas - An html canvas element.
 * @param {{x: number, y: number}} speed - An object with 'x' and 'y' coordinates, representing direction.
 * @param {{x: number, y: number}} food - An object with 'x' and 'y' coordinates.
 * @param {{s: number}} sore - An object with the value of the current score.
 * @returns {void}
 */
function advance(snake, canvas, speed, food, score) {

    const head ={x: snake[0].x + speed.x, y: snake[0].y + speed.y}
    
    if (didHitWall(head, canvas, snake)) {
        return
    }

    snake.unshift(head);


    if (didEat(head, food)) {
        let newFood = createFood(canvas, snake);
        food.x = newFood.x;
        food.y = newFood.y;

        score.s += 10;
        document.getElementById('score').innerHTML = score.s;
    } else {
        snake.pop();
    }
    
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
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
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


/**
 * Generate a new food element for the snake.
 * 
 * This function creates a new food element setting its 'x' and 'y' coordinates.
 * It checks if the food coordinates collide with the snake's body, calling the
 * the function again if that happens. Returns an object with the food coordinates.
 *
 * @param {HTMLCanvasElement} canvas - An html canvas element.
 * @param {{x: number, y: number}[]} snake - An array of objects, each with 'x' and 'y' coordinates.
 * @returns {{x: number, y: number}} - Returns an object with 'x' and 'y' coordinates.
 */
function createFood(canvas, snake) {

    let food = {
        x: getRandomInt(canvas.width - 10),
        y: getRandomInt(canvas.height - 10)
    }
        
    for (let i = 0; i < snake.length; i++) {
        if ((snake[i].x == food.x) && (snake[i].y === food.y)) {
            food(canvas, snake);
        }
    }
        
    return food;
}


/**
 * Generate a random number.
 * 
 * This function takes a number as an argument. It returns
 * a random number smaller than the argument.
 *
 * @param {number} max - The maximum number the function can return.
 * @returns {number} - Returns a number random number up to the argument.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/**
 * Draw the food element on canvas.
 * 
 * This function draws a red square on the canvas representing the 
 * snake's food. It takes the food coordinates and the canvas context
 * object as arguments. It does not return any value.
 * 
 * @param {{x: number, y: number}} food - An object with 'x' and 'y' coordinates.
 * @param {CanvasRenderingContext2D} ctx - The canvas object to draw on.
 * @param {number} size - The size of the food.
 * @returns {void}
 */
function drawFood(food, ctx, size) {
    ctx.fillStyle = 'red'; 
    ctx.strokestyle = 'darkred';

    ctx.fillRect(food.x, food.y, size, size); 
    ctx.strokeRect(food.x, food.y, size, size);
}


/**
 * Check if the snake has eaten the food.
 * 
 * This function checks if the snake's head touches the food element.
 * It takes as arguments coordinates of the the head and the food.
 * If the snake touches the food, returns 'true', otherwise returns 'false'.
 *
 * @param {{x: number, y: number}} head - An object with 'x' and 'y' coordinates.
 * @param {{x: number, y: number}} food - An object with 'x' and 'y' coordinates.
 * @returns {boolean} - Returns 'true' when the head touche the food, 'false' if it does not.
 */
function didEat(head, food) {

    const topFood = food.y - 10;
    const rightFood = food.x + 10;
    const bottomFood = food.y + 10;
    const leftFood = food.x - 10;

    if ((head.x < rightFood && head.x > leftFood) && 
        (head.y > topFood && head.y < bottomFood)) {
        return true;
    }
    return false;
}

/*
const Snake = {
    drawSnake,
    clearCanvas,
    advance,
    createFood,
    drawFood
};

export default Snake;
*/