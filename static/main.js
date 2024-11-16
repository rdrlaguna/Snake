import {Snake} from "./snake.js"

document.addEventListener('DOMContentLoaded', function() {


    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    console.log(canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width/2, canvas.height/2, CELL_SIZE, CELL_SIZE);

})