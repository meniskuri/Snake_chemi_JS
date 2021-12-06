const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const squareSize = 50;
const targetSize = 20;
const moveSpeed = 1;
const play = document.querySelector('#play');
// let gameTime = 30;

let squareX = 50;
let squareY = 100;

let targetX = 0;
let targetY = 0;

let up = false;
let down = false;
let right = false;
let left = false;

var point = 0;
var pointIs = document.getElementById('point');


play.addEventListener('click', e => {
  canvas.style.display = 'block';
  // timer = setInterval(updateTimer, 1000);
  // updateTimer();
  // $('#playAgainButton').hide();
  var count = 30;

  function startGame() {
    moveTarget();
    draw();
    moveSquare();
    point = 0;
    timer = 30;
    var interval = setInterval(function() {
      document.getElementById('countdown').innerHTML = count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('countdown').innerHTML='კიდევ სცადე ჩემო კარგო';
        canvas.style.display = 'none';
      }
      clearInterval ();
    }, 1000);

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp') {
        up = true;
      }
      if (e.key === 'ArrowDown') {
        down = true;
      }
      if (e.key === 'ArrowRight') {
        right = true;
      }
      if (e.key === 'ArrowLeft') {
        left = true;
      }
      console.log('keydown', e.key);
      // moveSquare();
    });
    document.addEventListener('keyup', e => {
      if (e.key === 'ArrowUp') {
        up = false;
      }
      if (e.key === 'ArrowDown') {
        down = false;
      }
      if (e.key === 'ArrowRight') {
        right = false;
      }
      if (e.key === 'ArrowLeft') {
        left = false;
      }
      console.log('keyup', e.key);
    });
  }
startGame();
});



function draw() {
  resetCanvas();
  // Big square
  context.fillStyle = '#f0ff1d','border';
  context.fillRect(squareX, squareY, squareSize, squareSize);
  // Small square
  context.fillStyle = 'hsl(283, 93%, 53%)';
  context.fillRect(targetX, targetY, targetSize, targetSize);
  // pointIs.innerHTML = 'შენი ქულა';
  pointIs.innerHTML = point;
  // document.getElementById('point').innerHTML='შენი ქულა იხილე თამაშის ბოლოს';;
  
}


function moveSquare() {
  if (up) {
    squareY -= moveSpeed;
  }
  if (down) {
    squareY += moveSpeed;
  }
  if (left) {
    squareX -= moveSpeed;
  }
  if (right) {
    squareX += moveSpeed;
  }
  if (squareX + squareSize > canvas.width) {
    squareX = canvas.width - squareSize;
  }
  if (squareY + squareSize > canvas.height) {
    squareY = canvas.height - squareSize;
  }
  squareX = Math.max(0, squareX);
  squareY = Math.max(0, squareY);
  if(isEaten()){
    moveTarget();
    point += 1;
  }
  draw();
  setTimeout(() => moveSquare(), 1 );
}

function moveTarget() {
  const {x, y} = getTargetRandomXY();
  targetX = x;
  targetY = y;
}

function getTargetRandomXY() {
  const x = Math.floor(Math.random() * (canvas.width - targetSize));
  const y = Math.floor(Math.random() * (canvas.height - targetSize));

  return {
    x: x,
    y: y,
  }
}

function resetCanvas() {
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function isEaten(){
  const squareBottom = squareY + squareSize;
  const squareRight = squareX + squareSize;
  const targetBottom = targetY + targetSize;
  const targetRight = targetX + targetSize;
  return squareBottom > targetBottom && squareY < targetY && squareRight > targetRight && squareX < targetX;
  point += 1;
}
