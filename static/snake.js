// Find canvas element
const canvas = document.getElementById('canvas1');

// Create a context object
const ctx = canvas.getContext('2d');

// Set canvas to window size,. Prevents re-scaling
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

window.addEventListener('resize', function() {
    // Adjust canvas size when window is resized
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 

    // Set context fill method to white
    ctx.fillStyle = 'white';
    // Draw a rectangle
    ctx.fillRect(10, 10, 100, 200);
})

