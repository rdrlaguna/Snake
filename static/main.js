import MySnake, {Snake} from "./snake.js"
import {Food} from "./food.js"


document.addEventListener('DOMContentLoaded', function() {

    // Get modal-start and play button
    const modalStart = document.getElementById('modal-start');
    const playButton = document.getElementById('play-btn');

    // Get modal-end
    const modalEnd = document.getElementById('modal-end');

    // Open modal-start
    modalStart.style.display = "flex";

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

        // Check if snake eats food
        if (
            snake.position.x === food.x &&
            snake.position.y === food.y
        ) {
            // Change food location
            food.reset(COLUMNS, ROWS);
            // Increase snake lenght and score
            snake.length++;
            snake.score++;
        }

        // Check for collision
        // Check for collision with walls
        if (MySnake.isGameOver(snake, COLUMNS, ROWS)) {
            GAME.gameOver = true;
        }

        // Check for Game Over
        if (GAME.gameOver) {
            // Stop snake's motion
            clearInterval(GAME.loop);

            // Open modal-end
            modalEnd.style.display = "flex";
        }
    }

    // Animate snake when user hits play
    playButton.onclick = function() {
        // Close modalStart
        modalStart.style.display = "none";
        GAME.loop = setInterval(animate, 250);
    }
    


    // Listen for pressed keys on keyboard
    window.addEventListener('keydown', function(event){
        if (event.key === 'ArrowUp') snake.moveUp();
        else if (event.key === 'ArrowDown') snake.moveDown();
        else if (event.key === 'ArrowLeft') snake.moveLeft();
        else if (event.key === 'ArrowRight') snake.moveRight();   
    });

})

