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
 * Checks if the game is over.
 * 
 * @param {{Snake}} snake - A snake object.
 * @param {number} width - The width in pixels of a canvas element.
 * @param {number} height - The height in pixels of a canvas element.
 * @returns {boolean} - Returns true if the game is over, otherwise false.
 */
function isGameOver(snake, width, height) {

    let gameOver = false;

    // Checks if snake hits its tail
    for (let i = 0; i < snake.segments.length; i++) {
        // console.log(segment);
        if (i > 0 && (
            snake.segments[i].x === snake.position.x &&
            snake.segments[i].y === snake.position.y
        )) {
            gameOver = true;
            break;
        }
    }

    // Checks if snake hits walls
    if (
        snake.position.x < 0 ||
        snake.position.x > width - 1 ||
        snake.position.y < 0 ||
        snake.position.y > height - 1
    ) {
        gameOver = true;
    } 
    
    return gameOver;
}



const MySnake = {
    isGameOver
};

export default MySnake;
