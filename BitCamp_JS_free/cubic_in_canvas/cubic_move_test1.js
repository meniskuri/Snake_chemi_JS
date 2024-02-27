const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the cube
let x      = canvas.width / 2;
let y      = canvas.height / 2;
const size = 20; // Size of the cube
const step = size;

// Initial movement direction
let dx = step;
let dy = 0;

// rect movement with keyboard 
let up    = false
let down  = false
let left  = false
let right = false

// Function to draw the cube
function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, size, size);
}

function startGame(){

    drawCube();
    
    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        const step = size; // Step size for movement

        if (event.key === 'ArrowUp'){
            up = true
            down = false
            left = false
            right = false
            // y -= step;
            dx = 0;
            dy = -step;
        }
        else if (event.key === 'ArrowDown'){
            up = false
            down = true
            left = false
            right = false
            // y   += step;
            dx = 0;
            dy = step;
       }
        else if (event.key === 'ArrowLeft'){
            up = false
            down = false
            left = true
            right = false
            // x   -= step;
            dx = -step;
            dy = 0;
        }
        else if (event.key === 'ArrowRight'){
            up = false
            down = false
            left = false
            right = true
            // x    += step;
            dx = step;
            dy = 0;
        }
        //setInterval(moveSquare, 100);
        //moveSquare()
        console.log("////////////////////////")
        console.log(`left `, left)
        console.log(`right `, right)
        console.log(`down `, down)
        console.log(`up `, up)
        console.log("////////////////////////")
    });
    
    setInterval(moveSquare, 100);
    
}

startGame()


function moveSquare()
{
    x += dx;
    y += dy;

    if (up)
    {
        y -= step;
        y += dy;
    }
    if (down)
    {
        y += step;
        y += dy;
    }
    if (left)
    {
        x -= step;
        x += dx;
    }
    if (right)
    {
       x += step;
       x += dx;
    }

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
    
    drawCube();
}
// სიჩქარე ემატება როცა კნოპკებს ვაჭერ. რა მიმართულებითაც მიდის თუ მაგ კნოპკას დავა
// ჭერ. უნდა შევუზღუდო კოორდინატის მიმატება. უნდა ვნახო. მეზარება ეხლა