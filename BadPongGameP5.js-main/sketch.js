/* eslint-disable no-undef, no-unused-vars */

/* 
version 1.0:
  -basic pong mechanics
version 1.1:
  -better visuals
  -press space to reset the ball
  -paddle cant go out of canvas
version 1.2:
  -win screen
  -lose screen
  -boarders
  -score
version 1.3:
*/

var paddleX = 360;
var paddleY = 170;

var EpaddleX = 20;
var EpaddleY = 170;
var Espeed = 3;

var Bx = 200;
var By = 200;
var ballspeedX = -1;
var ballspeedY = 0;

var score = 0;
var Escore = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
}

function draw() {
  noStroke();
  background("black");

  //resets ball
  if (keyIsPressed && keyCode === 32 && Bx < 0) {
    Bx = 200;
    By = 200;
    ballspeedX = Math.floor(-1);
    ballspeedY = Math.floor(0);
  } else if (keyIsPressed && keyCode === 32 && Bx > 400) {
    Bx = 200;
    By = 200;
    ballspeedX = Math.floor(-1);
    ballspeedY = Math.floor(0);
  }

  //main paddle
  fill(255);
  rect(paddleX, paddleY, 20, 70);
  //enemy paddle
  fill(255);
  rect(EpaddleX, EpaddleY, 20, 200);
  //ball
  fill(255);
  ellipse(Bx, By, 10, 10);
  //lines
  var lineY = 5;
  while (lineY < 400) {
    rect(197.5, lineY, 5, 10);
    lineY += 20;
  }

  //boarders
  fill(0);
  strokeWeight(10);
  stroke(255);
  rect(405, -10, 120, 520);
  rect(-10, 405, 520, 120);
  strokeWeight(1);
  fill(255);
  textSize(100);
  textStyle(BOLD);
  text("PONG", 100, 490);
  textSize(20);
  textStyle(BOLD);
  text("Your", 430, 50);
  text("Points", 420, 75);
  text(score, 445, 100);
  text("Enemy", 420, 200);
  text("Points", 420, 225);
  text(Escore, 445, 250);
  noStroke();

  //round win screen
  if (Bx < 0 && score < 10) {
    fill(0, 0, 0, 100);
    rect(0, 0, 400, 400);
    fill(255);
    textSize(50);
    textStyle(BOLD);
    text("You Win", 100, 160);
    textSize(20);
    text("Press Space For Next Round", 70, 200);
    if (Bx < -1 && Bx > -3.5) {
      score += 1;
    }
  }

  //round lose screen
  if (Bx > 400 && Escore < 10) {
    fill(0, 0, 0, 100);
    rect(0, 0, 400, 400);
    fill(255);
    textSize(50);
    textStyle(BOLD);
    text("You Lose", 90, 160);
    textSize(20);
    text("Press Space For Next Round", 70, 200);
    if (Bx > 401 && Bx < 403.5) {
      Escore += 1;
    }
  }

  //main win screen
  if (score === 10) {
    fill(0, 0, 0, 100);
    rect(0, 0, 400, 400);
    fill(255);
    text("Game Won", 90, 160);
  }

  //main lose screen
  if (Escore === 10) {
    fill(0, 0, 0, 100);
    rect(0, 0, 400, 400);
    fill(255);
    textSize(50);
    textStyle(BOLD);
    text("Game Lost", 90, 160);
  }

  //paddle movement
  if (keyIsPressed && keyCode === UP_ARROW) {
    paddleY = paddleY - 5;
  }
  if (keyIsPressed && keyCode === DOWN_ARROW) {
    paddleY = paddleY + 5;
  }
  //paddle wall collisions
  if (paddleY < 0) {
    paddleY = paddleY = 0;
  }
  if (paddleY > 330) {
    paddleY = paddleY = 330;
  }

  //Enemy paddle movement
  EpaddleY = EpaddleY + Espeed;
  if (EpaddleY > 180) {
    Espeed = -3;
  }
  if (EpaddleY < 10) {
    Espeed = +3;
  }

  //ball movement
  Bx = Bx + ballspeedX;
  By = By + ballspeedY;
  if (Bx > 360 && Bx < 370 && By > paddleY && By < paddleY + 70) {
    ballspeedX = Math.floor(Math.random() * -3 + -1);
    ballspeedY = Math.floor(Math.random() * -3 + -1);
  }
  if (Bx < 40 && Bx > 30 && By > EpaddleY && By < EpaddleY + 200) {
    ballspeedX = Math.floor(Math.random() * 3 + 1);
    ballspeedY = Math.floor(Math.random() * 3 + 1);
  }
  if (By > 400 && Bx > 0 && Bx < 400) {
    ballspeedX = Math.floor(Math.random() * 3 + 1);
    ballspeedY = Math.floor(Math.random() * -3 - 1);
  }
  if (By < 0 && Bx > 0 && Bx < 400) {
    ballspeedX = Math.floor(Math.random() * -3 + -1);
    ballspeedY = Math.floor(Math.random() * 3 + 1);
  }
}
