// global //////////////////////////////////////////////////////////////////////
var SNAKE_WIDTH  = 40;
var SNAKE_HEIGHT = 40;
var SNAKE_RADIUS = 4;
var SNAKE_COLOR  = Color.green;
var DELAY        = 200;
var menu_color   = new Color(59, 59, 59);
var canvasYlimit = 400;

/// sounds

var death_sound = new Sound("C5", "square");

///
var tailx = [];              // კუდის მასივი
var taily = [];
var cvs;                     // ჯერ იყოს
var snakeB;                  // გველის ტანი
var snakeH;                  // გველის თავი
var ball;                    // ვაშლი
var color;                   //
var ballx;                   //
var bally;                   //
var radius = SNAKE_RADIUS*2; // ვაშლის რადიუსი
var elem;                    // ვაშლის მოძებნისთვის ვიყენებ
var type;                    // ვაშლის შესაჭმელად ვიყენებ. რომ შეჭამოს მარტო ვაშლები.

var dx   = 5;                // უნდა იყოს 5
var dy   = 0;
//var arrx;                  // სნეიქის x კოორდინატზე მოძრაობის მასივი
//var arry;                  // სნეიქის y კოორდინატზე მოძრაობის მასივი

var counter      = 0;
var countermouve = 0;        // ყოველი მოძრაობის მთვლელი
var k            = 0;        // სნეიქის ზრდისთვის ვიყენებ ფორ ციკლში

var y;                       // wasashlelia
var x;
var txt;

// Constants to represent the directions ///////////////////////////////////////
var EAST  = 0;
var SOUTH = 0;
var WEST  = 0;
var NORTH = 0;

// restart
var Restart;
var restart_text;
var pause;

// start ///////////////////////////////////////////////////////////////////////
function start()
{

  createCanvas(400,canvasYlimit); // << ჯერ იყოს

  // txt.. //
  txt   = new Text("(Score)");
  txt.setPosition(0, canvasYlimit + 35);
  txt.setColor(Color.red);

  // apple //
  ball = new Circle(radius);
  color = Randomizer.nextColor();
  ball.setColor(color);
  ballx = Randomizer.nextInt(0, getWidth());
  bally = Randomizer.nextInt(0, (canvasYlimit - radius));
  ball.setPosition(ballx, bally);
  add(ball);
  ///////////

  // snake //
  snakeH = new Circle(SNAKE_RADIUS);
  snakeH.setPosition(getWidth()/2, getHeight()/2);
  snakeH.setColor(SNAKE_COLOR);
  add(snakeH);
  ///////////

  // timer //
  setTimer(draw, DELAY);
  //////////

  add(txt); // txt.. ქულებს წერს
}

// draw ////////////////////////////////////////////////////////////////////////
function draw()
{

  // ყოველ ჯერზე წაშლის კუდებს და შემდეგ უკვე თავიდან მოხდება ფორ ციკლით კუდების შექმნა.
  if (counter >= 1){
    for(k = 0; k < counter; k = k +1){
      var elem2 = getElementAt(tailx[k],taily[k]);
      if (elem2 != null){
        //println(elem2);
        //println(k);
        remove(elem2);
      }
    }
  }

  track(); // <<<< aq var

  keyDownMethod(keyDown);
  checkWalls();
  checkCollision(); ///// <<<<<<<<< aq var
  snakeH.move(dx, dy);
  checkapples();
  //snakegrow();

  // თვითოეული  ბიჯის  მთვლელი
  countermouve = countermouve + 1;
  // println(countermouve);

  //	if(counter == MAX_BOUNCES){
  //		stopTimer(draw);
  //	}

}

////////////////////////////////////////////////////////////////////////////////
// კლავიატურით  სნეიქის მოძრაობა
function keyDown(e){
  if (counter < 1) {
    //if(e.keyCode == 37) { // left
    if (e.keyCode == Keyboard.LEFT ) {
      dx = -5;
      dy = 0;
      snakeH.move(dx, 0);
      EAST  = 0;
      SOUTH = 0;
      WEST  = 1;
      NORTH = 0;
    }
    //if(e.keyCode == 39) { // right
    if (e.keyCode == Keyboard.RIGHT) {
      dx = 5;
      dy = 0;
      snakeH.move(dx, 0);
      EAST  = 1;
      SOUTH = 0;
      WEST  = 0;
      NORTH = 0;
    }
    //if(e.keyCode == 38) { // up
    if (e.keyCode == Keyboard.UP) {
      dy = -5;
      dx = 0;
      snakeH.move(0, dy);
      EAST  = 0;
      SOUTH = 0;
      WEST  = 0;
      NORTH = 1;
    }
    //if(e.keyCode == 40) { // down
    if (e.keyCode == Keyboard.DOWN) {
      dy = 5;
      dx = 0;
      snakeH.move(0, dy);
      EAST  = 0;
      SOUTH = 1;
      WEST  = 0;
      NORTH = 0;
    }
  } else { //////////////////// თავის თავი რომ არ ჭამოს უკან სვლით  ////////
    // println("gio chkviania");
    if (e.keyCode == Keyboard.LEFT && EAST == 1) {
      dx = 5;
      dy = 0;
      snakeH.move(dx, 0);
      EAST  = 1;
      SOUTH = 0;
      WEST  = 0;
      NORTH = 0;
    } else {
      if (e.keyCode == Keyboard.LEFT){
        dx = -5;
        dy = 0;
        snakeH.move(dx, 0);
        EAST  = 0;
        SOUTH = 0;
        WEST  = 1;
        NORTH = 0;
      }
    }
    if (e.keyCode == Keyboard.RIGHT && WEST == 1) {
      dx = -5;
      dy = 0;
      snakeH.move(dx, 0);
      EAST  = 0;
      SOUTH = 0;
      WEST  = 1;
      NORTH = 0;
    } else {
      if(e.keyCode == Keyboard.RIGHT){
        dx = 5;
        dy = 0;
        snakeH.move(dx, 0);
        EAST  = 1;
        SOUTH = 0;
        WEST  = 0;
        NORTH = 0;
      }
    }
    if (e.keyCode == Keyboard.UP && SOUTH == 1) {
      dy = 5;
      dx = 0;
      snakeH.move(0, dy);
      EAST  = 0;
      SOUTH = 1;
      WEST  = 0;
      NORTH = 0;
    } //
    else {
      if(e.keyCode == Keyboard.UP) {
        dy = -5;
        dx = 0;
        snakeH.move(0, dy);
        EAST  = 0;
        SOUTH = 0;
        WEST  = 0;
        NORTH = 1;
      }

    } // აქ ვარ
    if (e.keyCode == Keyboard.DOWN && NORTH == 1) {
      dy = -5;
      dx = 0;
      snakeH.move(0, dy);
      EAST  = 0;
      SOUTH = 0;
      WEST  = 0;
      NORTH = 1;
    } else {
      if(e.keyCode == Keyboard.DOWN){
        dy = 5;
        dx = 0;
        snakeH.move(0, dy);
        EAST  = 0;
        SOUTH = 1;
        WEST  = 0;
        NORTH = 0;
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// სნეიქის კედლებში სიარული
function checkWalls(){
  // Bounce off right wall
  if(snakeH.getX() - SNAKE_RADIUS > getWidth() && EAST == 1){
    //dx = -dx;
    // var right_sxvaoba = (snakeH.getX() + SNAKE_WIDTH) - getWidth();

    snakeH.setPosition(0 - SNAKE_RADIUS, snakeH.getY()); /// <<<<
    //println("aq shemovedi");
  }

  // Bounce off left wall
  if(snakeH.getX() + SNAKE_RADIUS< 0){
    //dx = -dx;
    // var left_sxvaoba = 0 - snakeH.getX();

    snakeH.setPosition(getWidth() + SNAKE_RADIUS, snakeH.getY());
  }

  // Bounce off bottom wall
  if(snakeH.getY() + SNAKE_RADIUS >= canvasYlimit - (SNAKE_RADIUS + 1) && SOUTH == 1){
    //dy = -dy;

    snakeH.setPosition(snakeH.getX(),0 - SNAKE_RADIUS);
  }

  // Bounce off top wall
  if(snakeH.getY() + SNAKE_RADIUS< 0 && NORTH == 1){
    //dy = -dy;

    snakeH.setPosition(snakeH.getX(),canvasYlimit - (SNAKE_RADIUS) + SNAKE_RADIUS);
  }


  // println("EAST: " + EAST +" SOUTH: " + SOUTH + " WEST: " + WEST + " NORTH: " + NORTH);
}

////////////////////////////////////////////////////////////////////////////////
// ვაშლების ჭამა
/*
function checkapples(){
// println("funqciashi shevedi");
// დასახვეწია ზომების გამო ხანდახან ჭედავს და არ ასრულებს იმას რაც ეკუთვნის
if (snakeH.getX() + SNAKE_WIDTH/2 >= ball.getX() - radius && snakeH.getX() + SNAKE_WIDTH/2 <= ball.getX() + radius && snakeH.getY() - SNAKE_HEIGHT/2 >= ball.getY() - radius && snakeH.getY() - SNAKE_HEIGHT/2 <= ball.getY() + radius){

//ballx = Randomizer.nextInt(0, getWidth());
//bally = Randomizer.nextInt(0, getHeight());
ball.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
// println("aq shemovedi");
counter = counter + 1 ;
//stopTimer(draw);
x = "(" + counter + ")";
txt.setText(x);
}
}
*/
// ვაშლების ჭამა ახალი
function checkapples(){
  // elem = getElementAt(e.getX(),e.getY());

  // bot <<<
  elem = getElementAt(snakeH.getX(),snakeH.getY() - SNAKE_RADIUS);
  //println("elem :" + elem);
  //println("snakeH.getX() :" + snakeH.getX() + "snakeH.getY() :" + snakeH.getY());

  if (elem != null){
    ball.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, (canvasYlimit - radius)));
    //println("shevida");
    counter = counter + 1 ;
    x = "(Score: " + counter + ")";
    txt.setText(x);
    // snakegrow(); // <<<<<<<<<
    // track();
    // println("arrx: " + arrx[counter]);
  }

  // left
  elem = getElementAt(snakeH.getX() - snakeH.getRadius(),snakeH.getY());
  if (elem != null){
    ball.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, (canvasYlimit - radius)));
    //println("shevida");
    counter = counter + 1 ;
    x = "(Score: " + counter + ")";
    txt.setText(x);
  }

  // right
  elem = getElementAt(snakeH.getX() + snakeH.getRadius(),snakeH.getY());
  if (elem != null){
    ball.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, (canvasYlimit - radius)));
    //println("shevida");
    counter = counter + 1 ;
    x = "(Score: " + counter + ")";
    txt.setText(x);
  }
  // top
  elem = getElementAt(snakeH.getX(),snakeH.getY() + SNAKE_RADIUS);
  if (elem != null){
    ball.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, (canvasYlimit - radius)));
    //println("shevida");
    counter = counter + 1 ;
    x = "(Score: " + counter + ")";
    txt.setText(x);
  }
}

// თავის თავის ჭამის ალგორითმი
function checkCollision(e){

  for(var i = 1;i< tailx.length; i++){
    // println("gio chkviania 2");
    //println("snake H x position " + snakeH.getX() + "snake H y positon " + snakeH.getY());
    if (counter != 0) { //
      /*
      var marjvena = snakeH.getX() > parseInt(tailx[i-1]) - SNAKE_RADIUS/2;
      var marcxena = snakeH.getX() < parseInt(tailx[i-1]) + SNAKE_RADIUS/2;
      var zemot    = snakeH.getY() < parseInt(taily[i-1]) + SNAKE_RADIUS/2;
      var qvemot   = snakeH.getY() < parseInt(taily[i-1]) + SNAKE_RADIUS/2;

      println("getx ="+snakeH.getX() + " marcxena=" + (parseInt(tailx[i]) + SNAKE_RADIUS/2))
      println(marjvena);
      println(marcxena);
      println(zemot);
      println(qvemot);
      */

      if((snakeH.getX() < parseInt(tailx[i-1]) + SNAKE_RADIUS/2 && snakeH.getX() > parseInt(tailx[i-1]) - SNAKE_RADIUS/2) && (snakeH.getY() < parseInt(taily[i-1]) + SNAKE_RADIUS/2 && snakeH.getY() > parseInt(taily[i-1]) - SNAKE_RADIUS/2)){
        death_sound.playFor(0.01);
        //var  ScoreOver = new Text("Score: "+score,"15pt Arial");
        //ScoreOver.setPosition(getWidth()/2-ScoreOver.getWidth()/2,getHeight()/2+ScoreOver.getHeight()/2-5)
        //ScoreOver.setColor(Color.white);
        //add(ScoreOver);

        println("gio chkviania 2");
        x = "(Score: " + counter + " GAME OVER)";
        txt.setText(x);

        Restart  = new Rectangle(100,30);
        Restart.setPosition(150,280);
        Restart.setColor(menu_color);
        add(Restart);

        restart_text  = new Text("Restart", "15pt Arial");
        restart_text.setPosition(Restart.getX()+16, Restart.getY()+Restart.getHeight()-restart_text.getHeight()/2+2);
        restart_text.setColor(Color.white);
        add(restart_text);

        x = "(Score: " + counter + " GAME OVER)";
        txt.setText(x);
        stopTimer(draw);
        mouseClickMethod(restartButton);
      }
    } //
  }

}

//დარესტარტების ღილაკი
function restartButton(e){
  elem = getElementAt(e.getX(), e.getY());
  if(elem == Restart || elem == restart_text){
    restart();
  }
}


//


function track(){
  //ეს არის გაზრდის ფუნქცია  tail არის მასივი

  for(var i = 0;  i < tailx.length-1; i++){
    tailx[i] = tailx[i+1];

    //println("shevida trak 1 for");
  }

  for(var i = 0;  i < taily.length-1; i++){
    taily[i] = taily[i+1];

    //println("shevida trak 1 for");
  }

  tailx[counter] = [snakeH.getX()];
  taily[counter] = [snakeH.getY()];



  //println("tail[i].x :" + tailx);
  //println("tail[i].y :" + taily);
  //println("i : " + i);
  //println("tail.length :" + tailx.length);



  for (var i = 1; i < tailx.length; i = i + 1){

    //println("shevida trak 2 for");
    //println("tail[i].x :" + tailx);

    //println("i : " + i);

    var arx = (parseInt(tailx[i-1]));
    var ary = (parseInt(taily[i-1]));

    snakebody(arx,ary,SNAKE_RADIUS);

    //arx += dx;
    //ary += dy;
  }
  //
}

function snakebody(arrx,arry,radiusb){
  //println("shevida snakebody da arrx = " + arrx + " arry = " + arry);
  snakeB = new Circle(radiusb);

  snakeB.setPosition(arrx,arry);

  snakeB.setColor(Randomizer.nextColor());
  add(snakeB);
}

function createCanvas(canvasW,canvasH){
  cvs = new Rectangle(canvasW,canvasH);
  cvs.setPosition(0,400);
  cvs.setColor(menu_color)
  add(cvs);
}

// დასამთავრებელია
