import {Snake} from "./snake.js";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Canvas configuration
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    let snake = new Snake(ROWS);

    snake.draw(ctx, CELL_SIZE);
    console.log(snake);

    ctx.fillStyle = 'white';
    ctx.fillRect = (50, 50, CELL_SIZE, CELL_SIZE);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snake.draw(ctx, CELL_SIZE);

        // Update position
        snake.update();
    }

    //animate();


})






