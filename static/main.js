import {Snake} from "./snake.js"
import {Food} from "./food.js"


document.addEventListener('DOMContentLoaded', function() {

    // Canvas configuration
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    // Create snake and food objects
    const snake = new Snake(ROWS);
    const food = new Food(COLUMNS, ROWS);

    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw snake and food
        snake.draw(ctx, CELL_SIZE);
        food.draw(ctx, CELL_SIZE);

        // Change position
        snake.update()

        // Check for collision
        // Check for collision with walls
        if (
            snake.position.x < 0 ||
            snake.position.x > COLUMNS - 1 ||
            snake.position.y < 0 ||
            snake.position.y > ROWS - 1
        ) {
            GAME.gameOver = true;
        }

        // Check for Game Over
        if (GAME.gameOver) {
            // Display game over message
            ctx.textAlign = 'center';
            ctx.fillStyle = 'black';
            ctx.font = '60px Impact'; 
            ctx.fillText(
                'GAME OVER!',
                GAME.width * 0.5,
                GAME.height * 0.4,
                // Max width of text
                GAME.height * 0.95
            );
            // Stop snake's motion
            clearInterval(GAME.loop);
        }
    }

    // animate snake
    GAME.loop = setInterval(animate, 250);


    // Listen for pressed keys on keyboard
    window.addEventListener('keydown', function(event){
        if (event.key === 'ArrowUp') snake.moveUp();
        else if (event.key === 'ArrowDown') snake.moveDown();
        else if (event.key === 'ArrowLeft') snake.moveLeft();
        else if (event.key === 'ArrowRight') snake.moveRight();   
    });

})

