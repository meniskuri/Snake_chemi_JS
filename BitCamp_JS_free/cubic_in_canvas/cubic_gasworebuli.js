const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

// Initial position of the cube
let xApple = 30
let yApple = 30
const size = 20; // Size of the cubes
const step = size;

// Initial movement direction
let dx = step;
let dy = 0;

// rect movement with keyboard 
let up = false;
let down = false;
let left = false;
let right = false;

// chartva 
var chartva = false

// ფოინთ
let point   = 0;
var pointIs = document.getElementById('point');

// Array to store the snake's tail segments
let tail = [];

tail[0] = { x: 20, y: 20 };
tail[0].x = canvas.width / 2;
tail[0].y = canvas.height / 2;

tail[1] = { x: 20, y: 20 };
tail[1].x = tail[0].x;
tail[1].y = tail[0].y + size;

let isUsed = false;
function startGame()
{

    drawCube()

    document.addEventListener('keydown', (event) => {
        const step = size; // Step size for movement

        if (event.key === 'ArrowUp'){
            up = true
            isUsed = false
        }
        if (event.key === 'ArrowDown'){
            down = true
            isUsed = false
        }
        if (event.key === 'ArrowLeft'){
            left = true
            isUsed = false
        }
        if (event.key === 'ArrowRight'){
            right = true
            isUsed = false
        }
    });

    let { x, y } = getTargetRandomXY();
    xApple = x
    yApple = y

    setInterval(moveSquare, 200);
}

startGame()

function drawCube()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';

    for (let i = 0; i < tail.length; i++)
    {
        ctx.fillRect(tail[i].x, tail[i].y, size, size);
    }

    ctx.beginPath();
    for (let i = 0; i < 700; i += size)
    {
        for (let j = 0; j < 400; j += size)
        {
            ctx.moveTo(i, j);
            ctx.lineTo(i + size, j);
            ctx.moveTo(i, j);
            ctx.lineTo(i, j + size);
        }

        ctx.setLineDash([6, 6]);
    }

    ctx.strokeStyle = '#00ff00';
    ctx.stroke();
}

function drawApple()
{
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(xApple, yApple, size, size);
}

//function getTargetRandomXY() // es mchirdeba?
//{
//   const x = Math.floor(Math.random() * (canvas.width - size));
//    const y = Math.floor(Math.random() * (canvas.height - size));
//    // console.log(x = ${x}, y = ${y})
//
//    return {
//    x: x,
//    y: y
//  }
//}

//////////////////////////////////////////
function getTargetRandomXY() // es mchirdeba?
{
    let x = (Math.random() * (canvas.width - size));
    x = x - (x % size);

    let y = (Math.random() * (canvas.height - size));
    y = y - (y % size);

    return {
    x: x,
    y: y
  }
}


/////////////////////////////////////////
function isEaten()
{
    return tail[0].x < xApple + size && tail[0].x + size > xApple && tail[0].y < yApple + size && tail[0].y + size > yApple
}

function moveSquare()
{
    if (!isUsed)
    {
        dx = 0;
        dy = 0;

        if (up)
        {
            dy = -step;

            if (left)
            {
                dx = -step;
            }
            else if (right)
            {
                dx = step;
            }
        }
        else if (down)
        {
            dy = step;
            if (left)
            {
                dx = -step;
            }
            else if (right)
            {
                dx = step;
            }
        }
        else if (left)
        {
            dx = -step;
            if (up)
            {
                dy = -step;
            }
            else if (down)
            {
                dy = step;
            }
        }
        else if (right)
        {
            dx = step;
            if (up)
            {
                dy = -step;
            }
            else if (down)
            {
                dy = step;
            }
        }

        isUsed = true;
        up = false;
        down = false;
        left = false;
        right = false;
    }

    tail[0].x += dx;
    tail[0].y += dy;

    if (isEaten())
    {
        let { x, y } = getTargetRandomXY();
        xApple = x
        yApple = y

        tail.push( { x:  tail[0].x, y: tail[0].y } );
    }

    for (let i = tail.length - 1; i > 0; i--)
    {
        tail[i].x = tail[i - 1].x;
        tail[i].y = tail[i - 1].y;
    }
    
    for (let i = tail.length - 1; i >= 0; i--)
    {
        if (tail[i].x < 0)
        {
            tail[i].x = canvas.width - size;
        }

        if (tail[i].y < 0)
        {
            tail[i].y = canvas.height - size;
        }

        if (tail[i].x > canvas.width)
        {
            tail[i].x = 0;
        }

        if (tail[i].y > canvas.height)
        {
            tail[i].y = 0;
        }
    }

    pointIs.innerHTML = tail.length;

    drawCube();
    drawApple();
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