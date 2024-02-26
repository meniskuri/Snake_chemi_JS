const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the cube
let x      = canvas.width / 2;
let y      = canvas.height / 2;
const size = 20; // Size of the cube
const step = size;


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
        // const step = size; // Step size for movement

        if (event.key === 'ArrowUp'){
            up = true
            // y -= step;
        }
        else if (event.key === 'ArrowDown'){
            down = true
            // y   += step;
        }
        else if (event.key === 'ArrowLeft'){
            left = true
            // x   -= step;
        }
        else if (event.key === 'ArrowRight'){
            right = true
            // x    += step;
        }
       
        console.log("////////////////////////")
        console.log(`left `, left)
        console.log(`right `, right)
        console.log(`down `, down)
        console.log(`up `, up)
        console.log("////////////////////////")
        moveSquare()
        
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
    
}

startGame()


function moveSquare()
{
  if (up)
  {
    y -= step;
  }
  if (down)
  {
    y += step;
  }
  if (left)
  {
    x -= step;
  }
  if (right)
  {
    x += step;
  }

  drawCube();

}
  