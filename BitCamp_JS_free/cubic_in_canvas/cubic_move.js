const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the cube
let xHead  = canvas.width / 2;
let yHead  = canvas.height / 2;
let xApple = 30
let yApple = 30
const size = 20; // Size of the cubes
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

// ფოინთ
let point   = 0;
var pointIs = document.getElementById('point');

// Array to store the snake's tail segments
let tail = [];

// counter bijebi
counter_bijebi = 0

function startGame(){

    drawCube()

    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        const step = size; // Step size for movement

        if (event.key === 'ArrowUp'){
            up = true
            dx = 0;
            dy = -step;
        }
        else if (event.key === 'ArrowDown'){
            down = true
            dx   = 0;
            dy   = step;
       }
        else if (event.key === 'ArrowLeft'){
            left = true
            dx   = -step;
            dy   = 0;
        }
        else if (event.key === 'ArrowRight'){
            right = true
            dx    = step;
            dy    = 0;
        }
        // moveSquare()
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
        // console.log('keyup', event.key);
    });
    
    let { x, y } = getTargetRandomXY();
    xApple = x
    yApple = y

    setInterval(moveSquare, 200);
    
}

// ნებისმიერ რამეს რომ ვაჭერ ეს ირთვება. რატო?
startGame()






// Function to draw the cube
function drawCube() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    // ctx.fillRect(xHead, yHead, size, size);
    for (let i = 0; i < tail.length; i++) {
        ctx.fillRect(tail[i].x, tail[i].y, size, size);
    }
}

function drawApple() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(xApple, yApple, size, size);

}

function getTargetRandomXY() // es mchirdeba?
{
  const x = Math.floor(Math.random() * (canvas.width - size));
  const y = Math.floor(Math.random() * (canvas.height - size));
  // console.log(`x = ${x}, y = ${y}`)

  return {
    x: x,
    y: y,
  }
}

function isEaten()
{
    return xHead < xApple + size && xHead + size > xApple && yHead < yApple + size && yHead + size > yApple
}


function moveSquare()
{
    // console.log("////////////////////////")
    // console.log(`left `, left)
    // console.log(`right `, right)
    // console.log(`down `, down)
    // console.log(`up `, up)
    // console.log("////////////////////////")
    
    // lefts რომ დავაჭერ ირთვება კოდი
    if (left === true){
        chartva = true
    }

    if (chartva === true){
        xHead += dx;
        yHead += dy;
        
        // counter bijebi - ramden bijs aketebs gveli 
        counter_bijebi++
    }
    
    if (up)
    {
        // yHead -= step;
        // yHead += dy;
    }
    if (down)
    {
        // yHead += step;
        // yHead += dy;
    }
    if (left)
    {
        // xHead -= step;
        // xHead += dx;
    }
    if (right)
    {
       // xHead += step;
       // xHead += dx;
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
    
    
    if (isEaten()){
        let { x, y } = getTargetRandomXY();
        xApple = x
        yApple = y
        point++
    }

    // პოინთ (აქ ვარ გაჩერებული)
    pointIs.innerHTML = point;
    
    
    // tail testing!!!!!!!!! mishveleTTTt ))) arada martivia bliadd
    tail[point] = { x: xHead, y: yHead };
    
    console.log(`/////////////////////`)
    for (let i = tail.length-1; i >= 0; i--){
        
        if (i !== 0) {
            console.log("aq var")
            // tail[i-1] = tail[i]
            tail[i] = { x: tail[i - 1].x, y: tail[i - 1].y };
        }

        if (tail.length > 0) {
            tail[0] = { x: xHead, y: yHead };
        }
        
        console.log(`i = ${i}`)
        console.log(`tail length = ${tail.length}`)
        console.log(tail[i])
        // console.log(`/////////////////////`)
    }
    
    drawCube()
    drawApple()
}

// ვაშლი თავიდან რენდომზე ისმებოდეს
// ვაშლი არ ისმებოდეს გველის პოზიციაზე
// მასივია გასაკეთებელი სადაც გველის ტრეკი ჩაიწერება
// რამდენი ვაშლიც არის ნაჭამი იმდენი კუბიკი დაიხატოს გველის ტრეკზე
// თავის თავის ჭამის ალგორითმია გასაკეთებელი
// < აქეთ რომ მიდის > აქეთ წამოსვლა ეგრევე არ შეეძლოს რომ თავი არ ჭამოს. ასევე ზევით და ქვევითაც

// tail უნდა გავაკეთო
// ყველა ბიჯი იწერებოდეს tail ში 
// ბოლოდან დაიწყოს ხატვა (იმდენის რამდენი ვაშლიც აქვს ნაჭამი)
// მასივის გადატვირთვისგან დაცვაა საჭირო


// რაღაც ვერ ვაკეთებ ვერაფერს ბლიაძძძ 

// ოტ ი დო კარგად უნდა გავერკვე ყველაფერში 