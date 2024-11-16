import {Snake} from "./snake.js"

document.addEventListener('DOMContentLoaded', function() {


    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    const snake = new Snake(ROWS);
    snake.draw(ctx, CELL_SIZE);

    console.log(snake);

})