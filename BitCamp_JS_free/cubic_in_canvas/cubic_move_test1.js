const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initial position of the cube
let x = canvas.width / 2;
let y = canvas.height / 2;
const size = 20; // Size of the cube
const step = size; // Step size for movement

// Initial movement direction
let dx = step;
let dy = 0;

// Function to draw the cube
function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, size, size);
}

function startGame() {
    drawCube();

    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' && dy !== step) {
            dx = 0;
            dy = -step;
        } else if (event.key === 'ArrowDown' && dy !== -step) {
            dx = 0;
            dy = step;
        } else if (event.key === 'ArrowLeft' && dx !== step) {
            dx = -step;
            dy = 0;
        } else if (event.key === 'ArrowRight' && dx !== -step) {
            dx = step;
            dy = 0;
        }
    });

    // Start the game loop
    setInterval(moveSquare, 100); // Adjust the interval for speed
}

function moveSquare() {
    // Update the position based on the movement direction
    x += dx;
    y += dy;

    // Wrap around the canvas
    if (x >= canvas.width) {
        x = 0;
    } else if (x < 0) {
        x = canvas.width - size;
    }
    if (y >= canvas.height) {
        y = 0;
    } else if (y < 0) {
        y = canvas.height - size;
    }

    // Redraw the cube
    drawCube();
}

startGame();
