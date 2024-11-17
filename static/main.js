import {Snake} from "./snake.js"




document.addEventListener('DOMContentLoaded', function() {

    // Canvas configuration
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    const snake = new Snake(ROWS);
    snake.draw(ctx, CELL_SIZE);

    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        snake.draw(ctx, CELL_SIZE)

        // Change position
        snake.update()
    }

    // animate snake
    GAME.loop = setInterval(animate, 250);


    // listen for pressed keys on keyboard
    window.addEventListener('keydown', function(event){
        if (event.key === 'ArrowUp') snake.moveUp();
        else if (event.key === 'ArrowDown') snake.moveDown();
        else if (event.key === 'ArrowLeft') snake.moveLeft();
        else if (event.key === 'ArrowRight') snake.moveRight();   
    });

})

