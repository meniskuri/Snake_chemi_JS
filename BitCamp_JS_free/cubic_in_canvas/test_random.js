const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the snake head
let xHead  = canvas.width / 2;
let yHead  = canvas.height / 2;

// Initial position of the apple
let xApple = 30;
let yApple = 30;

const size = 20; // Size of the snake segments and apple
const step = size;

// Initial movement direction
let dx = step;
let dy = 0;

// Array to store the snake's tail segments
let tail = [];

// Variables to track user input for movement
let up    = false;
let down  = false;
let left  = false;
let right = false;

// Variable to track the game score
let score = 0;

// Display the score on the HTML page
const scoreDisplay = document.getElementById('score');

function startGame(){
    drawSnake();
    drawApple();

    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        const step = size; // Step size for movement

        if (event.key === 'ArrowUp' && dy !== step){
            up = true;
            down = false;
            left = false;
            right = false;
            dx = 0;
            dy = -step;
        } else if (event.key === 'ArrowDown' && dy !== -step){
            down = true;
            up = false;
            left = false;
            right = false;
            dx = 0;
            dy = step;
        } else if (event.key === 'ArrowLeft' && dx !== step){
            left = true;
            right = false;
            up = false;
            down = false;
            dx = -step;
            dy = 0;
        } else if (event.key === 'ArrowRight' && dx !== -step){
            right = true;
            left = false;
            up = false;
            down = false;
            dx = step;
            dy = 0;
        }
    });

    setInterval(moveSnake, 100);
}

startGame();

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(xHead, yHead, size, size);

    // Draw the snake's tail
    ctx.fillStyle = 'green';
    for (let i = 0; i < tail.length; i++) {
        ctx.fillRect(tail[i].x, tail[i].y, size, size);
    }
}

function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(xApple, yApple, size, size);
}

function moveSnake() {
    // Move the tail
    for (let i = tail.length - 1; i > 0; i--) {
        tail[i] = { x: tail[i - 1].x, y: tail[i - 1].y };
    }
    if (tail.length > 0) {
        tail[0] = { x: xHead, y: yHead };
    }

    // Move the head
    xHead += dx;
    yHead += dy;

    // Check for collision with the apple
    if (xHead === xApple && yHead === yApple) {
        score++;
        scoreDisplay.innerHTML = score;

        // Generate new coordinates for the apple
        xApple = Math.floor(Math.random() * (canvas.width / size)) * size;
        yApple = Math.floor(Math.random() * (canvas.height / size)) * size;

        // Add a new segment to the snake's tail
        tail.push({ x: xHead, y: yHead });
    }

    // Check for collision with the walls
    if (xHead < 0 || xHead >= canvas.width || yHead < 0 || yHead >= canvas.height) {
        // Game over condition, reset the game
        resetGame();
    }

    // Check for collision with the tail
    for (let i = 0; i < tail.length; i++) {
        if (xHead === tail[i].x && yHead === tail[i].y) {
            // Game over condition, reset the game
            resetGame();
        }
    }

    drawSnake();
}

function resetGame() {
    // Reset snake position and tail
    xHead = canvas.width / 2;
    yHead = canvas.height / 2;
    tail = [];

    // Reset apple position
    xApple = Math.floor(Math.random() * (canvas.width / size)) * size;
    yApple = Math.floor(Math.random() * (canvas.height / size)) * size;

    // Reset score
    score = 0;
    scoreDisplay.innerHTML = score;
}
