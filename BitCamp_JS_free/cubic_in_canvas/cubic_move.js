const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the cube
let xHead      = canvas.width / 2;
let yHead      = canvas.height / 2;
let xApple     = 0
let yApple     = 0 
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

// chartva 
var chartva = false

// Function to draw the cube
function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(xHead, yHead, size, size);
}

function drawApple() {

}

function startGame(){

    drawCube();
    
    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        const step = size; // Step size for movement

        if (event.key === 'ArrowUp'){
            up = true
            // y -= step;
            dx = 0;
            dy = -step;
        }
        else if (event.key === 'ArrowDown'){
            down = true
            // y   += step;
            dx = 0;
            dy = step;
       }
        else if (event.key === 'ArrowLeft'){
            left = true
            // x   -= step;
            dx = -step;
            dy = 0;
        }
        else if (event.key === 'ArrowRight'){
            right = true
            // x    += step;
            dx = step;
            dy = 0;
        }
        //setInterval(moveSquare, 100);
        //moveSquare()
    });

    document.addEventListener('keyup', event => {
        if (event.key === 'ArrowUp')
        {
            up = false;
        }
        if (event.key === 'ArrowDown')
        {
            down = false;
        }
        if (event.key === 'ArrowRight')
        {
            right = false;
        }
        if (event.key === 'ArrowLeft')
        {
            left = false;
        }
        console.log('keyup', event.key);
    });
    
    setInterval(moveSquare, 100);
}

startGame()


function moveSquare()
{
    // console.log("////////////////////////")
    // console.log(`left `, left)
    // console.log(`right `, right)
    // console.log(`down `, down)
    // console.log(`up `, up)
    // console.log("////////////////////////")
    
    if (left === true){
        chartva = true
        console.log("aq var")
        console.log(`chartva: ${chartva}`)
    }

    if (chartva === true){
        xHead += dx;
        yHead += dy;
    }
    
    if (up)
    {
        // y -= step;
        // y += dy;
    }
    if (down)
    {
        // y += step;
        // y += dy;
    }
    if (left)
    {
        // x -= step;
        // x += dx;
    }
    if (right)
    {
       // x += step;
       // x += dx;
    }

    // Wrap around the canvas
    if (xHead >= canvas.width) {
        xHead = 0;
    } else if (xHead < 0) {
        xHead = canvas.width - size;
    }
    if (yHead >= canvas.height) {
        yHead = 0;
    } else if (yHead < 0) {
        yHead = canvas.height - size;
    }
    
    drawCube();
}
// სიჩქარე ემატება როცა კნოპკებს ვაჭერ. რა მიმართულებითაც მიდის თუ მაგ კნოპკას დავა
// ჭერ. უნდა შევუზღუდო კოორდინატის მიმატება. უნდა ვნახო. მეზარება ეხლა
// ვაშლები უნდა დავსვა
// ვაშლის ჭამა უნდა გავაკეთო
// კუდის მომატება უნდა გავაკეთო 
// დავალება დავწერო მეორე მესამე ლექციის
// მესამე ლექციას ვუყურო
// ოუუ შით. მაგრამ უნდ ავქნა 