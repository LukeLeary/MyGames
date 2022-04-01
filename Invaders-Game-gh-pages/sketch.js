/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1200, 700);
  noCursor();
  strokeWeight(1);
}

var rectSizeX = 100;

var bulletX = 0;

var enemyY = 350;
var enemyX = 1250;
var enemyWidth = 30;

var bossY = 200;
var bossX = 1300;
var bossH = 500;

var score = 0;

var startTrigger = -1;

function draw() {
  //start screen
  background(0);
  if (startTrigger === -1) {
    fill(255);
    textSize(100);
    textStyle(BOLD);
    text("Invaders", 400, 100);
    textSize(50);
    text("Press S to start", 415, 300);

    //tank on title
    //body
    strokeWeight(5);
    stroke(40);
    fill(100);
    rect(-30, 350 - 45, 145, 140, 25);
    fill(40);
    noStroke();
    rect(-30, 350 + 70, 140, 25, 15);

    //barrel
    stroke(40);
    fill(100);
    rect(50, 350 - 15, rectSizeX + 30, 50);
    fill(40);
    noStroke();
    rect(50, 350 + 15, rectSizeX + 30, 20);

    //enemies
    fill(200, 40, 40);
    stroke(80, 20, 20);
    ellipse(450, 150, 30, 30);
    ellipse(1000, 300, 30, 30);
    ellipse(250, 650, 30, 30);
  }

  //strokeWight reset
  strokeWeight(1);

  if (startTrigger === 0) {
    fill(255);
    textSize(50);
    textStyle(BOLD);
    noStroke();
    text("Pressed the following keys for difficultly", 100, 100);
    text("Easy - 1", 100, 200);
    text("Medium - 2", 100, 300);
    text("Hard - 3", 100, 400);
  }

  //start and difficultly
  if (startTrigger === -1 && keyIsPressed && keyCode === 83) {
    startTrigger = 0;
  }

  if (keyIsPressed && keyCode === 49 && startTrigger === 0) {
    startTrigger = 1;
    enemyX = 1250;
    enemyWidth = 30;
  }

  if (keyIsPressed && keyCode === 50 && startTrigger === 0) {
    startTrigger = 2;
    enemyX = 1250;
    enemyWidth = 30;
  }

  if (keyIsPressed && keyCode === 51 && startTrigger === 0) {
    startTrigger = 3;
    enemyX = 1250;
    enemyWidth = 30;
  }

  if (startTrigger === 1) {
    start();
    enemyX -= 4;
  }

  if (startTrigger === 2) {
    start();
    enemyX -= 7;
  }

  if (startTrigger === 3) {
    start();
    enemyX -= 10;
  }

  //main game
  start = function () {
    background(50, 150, 50);
    stroke(255);

    fill(255);
    textSize(50);
    textStyle(BOLD);
    noStroke();
    text(score, 575, 100);

    strokeWeight(5);

    fill(100);
    stroke(40);
    rect(-20, -20, 100, 750);

    //shoting & barrel shake
    if (mouseIsPressed) {
      rectSizeX = Math.random() * (100 - 90) + 90;
      //bullet
      fill(230, 230, 255);
      stroke(0, 75, 255);
      rect(bulletX, mouseY, 50, 20, 10);
      //position reset
      if (bulletX < 1210) bulletX += 150;
      if (bulletX > 1210) {
        bulletX = 50;
      }
    } else {
      bulletX = -100;
      rectSizeX = 100;
    }

    //body
    stroke(40);
    fill(100);
    rect(-30, mouseY - 45, 145, 140, 25);
    fill(40);
    noStroke();
    rect(-30, mouseY + 70, 140, 25, 15);

    //barrel
    stroke(40);
    fill(100);
    rect(50, mouseY - 15, rectSizeX + 30, 50);
    fill(40);
    noStroke();
    rect(50, mouseY + 15, rectSizeX + 30, 20);


    //bossfight
    if(score > 29){
      stroke(40);
      fill(100);
      rect(bossX,bossY,300,300,20);
      rect(bossX-100,bossY+40,300,120);
      fill(40);
      noStroke();
      rect(bossX-100,bossY+120,300,40);
      noStroke();
      rect(bossX,bossY+230,300,70,20);
      enemyX += 4;

      //movementX
      bossX -= 1;

      //collisions boss
      if(mouseIsPressed &&
        mouseY + 30 > bossY &&
        mouseY-10 < bossY + 300 &&
        bossX > 200 && enemyX > 200){
          bossH -= 1;
      }

      //boss defeat
      if(bossH < 1){
        enemyX = 1300;
        bossX += 1;
        bossH = 0;
        fill(255);
        textStyle(BOLD);
        stroke(255);
        strokeWeight(1);
        textSize(50);
        text("You Won!", 500, 250);
        textSize(30);
        text("Press R to Restart", 475, 300);
      }
    }
    //enemy
    if (score > 14) {
      enemyX -= 4;
      fill(250, 50, 150);
      stroke(100, 25, 65);
    } else {
      fill(200, 40, 40);
      stroke(80, 20, 20);
    }
    ellipse(enemyX, enemyY, enemyWidth, enemyWidth);

    //bossHealthbar
    if(score > 29){
      stroke(0);
      fill(0,0,0,255);
      rect(50,20,500,30);
      fill("red");
      rect(50,20,bossH,30);
    }

    //collisions enemy
    if (
      mouseIsPressed &&
      mouseY + 30 > enemyY &&
      mouseY - 10 < enemyY &&
      enemyX > 200 
    ) {
      enemyWidth -= 1;
    }

    //enemy dies & spawns
    if (enemyWidth < 0) {
      enemyX = 1250;
      enemyY = Math.random() * (650 - 20) + 20;
      enemyWidth = 30;
    }

    //enemy win
    if (enemyX < -10 || bossX < -300) {
      fill(255);
      textStyle(BOLD);
      stroke(255);
      strokeWeight(1);
      textSize(50);
      text("You Lost", 500, 250);
      textSize(30);
      text("Press R to Restart", 475, 300);
    }

    //resets game
    if (keyIsPressed && keyCode === 82) {
      startTrigger = 0;
      bossX = 1300;
      bossH = 500;
    }

    //adds to score
    if (enemyWidth === 0) {
      score += 1;
    }

    //resets score
    if (startTrigger === 0) {
      score = 0;
    }

  }
}

//                      //                  //    //                   //
//                      //                  //  //      ////////       //
////////  //    //      //        //    //  ////        //    //       //
//    //  //    //      //        //    //  ////        ////////       //
//    //  //    //      //        //    //  //  //      //             //
////////  ////////      ////////  ////////  //    //    ////////       ////////
                //
                //
          ////////
