const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initial position of the cube
let x = canvas.width / 2;
let y = canvas.height / 2;
 const size = 20; // Size of the cube

// Function to draw the cube
function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, size, size);
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const step = 5; // Step size for movement

    switch (event.key) { // if else it gavaketo
        case 'ArrowUp':
            y -= step;
            break;
        case 'ArrowDown':
            y += step;
            break;
        case 'ArrowLeft':
            x -= step;
            break;
        case 'ArrowRight':
            x += step;
            break;
        }
        
    drawCube(); // Redraw the cube after each key press
});

// Initial draw
drawCube();