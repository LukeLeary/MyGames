/* eslint-disable no-undef, no-unused-vars */

function preload() {
  img1 = loadImage("Sprite Left.gif");
  img2 = loadImage("Sprite Right.gif");
  imgSL = loadImage("Shield Left.png");
  imgSR = loadImage("Shield Right.png");

  img3 = loadImage("Sprite Left 2.gif");
  img4 = loadImage("Sprite Right 2.gif");
  imgSL2 = loadImage("Shield Left2.png");
  imgSR2 = loadImage("Shield Right2.png");

  imgLL = loadImage("Lazer left.gif");
  imgLR = loadImage("Lazer Right.gif");

  imgGround = loadImage("ground 1.png");
  imgBG = loadImage("City Background.png");
  imgBG2 = loadImage("City Background2.png");
  imgShip1 = loadImage("Ship1.gif");

  Font1 = loadFont("pixelated/pixelated.ttf");
}

function setup() {
  createCanvas(1200, 700);
}

let ShieldT = false;
let ShieldT2 = false;
let ShieldT3 = false;
let ShieldT4 = false;

let reset = false;

var start = 0;

var ShieldHealth = 200;
var ShieldHealth2 = 200;

var playerHealth2 = 400;
var shieldHealth2 = 100;

var playerX = 1000;
var playerXDirection = 0;
var playerY = 200;
var playerHealth = 400;
var shieldHealth = 100;

var playerX2 = 120;
var playerXDirection2 = 1;
var playerY2 = 200;

function draw() {
  var mainstart = function () {
    //background1
    image(imgBG, 0, 0);
    image(imgBG2, 700, 0);

    //ship
    image(imgShip1, -75, 0);

    //floor
    image(imgGround, 0, 650);
    image(imgGround, 400, 650);
    image(imgGround, 800, 650);

    //main player1 function
    var player1 = function () {
      if (playerXDirection === 0) {
        image(img1, playerX, playerY);
      } else if (playerXDirection === 1) {
        image(img2, playerX, playerY);
      }

      playerY += 5;

      if (playerY >= 560) {
        playerY -= 5;
      }

      if (keyIsDown(UP_ARROW)) {
        playerY -= 10;
      }

      if (keyIsDown(LEFT_ARROW)) {
        playerX -= 5;
      }

      if (keyIsDown(LEFT_ARROW) && keyIsDown(16)) {
        playerX -= 3;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        playerX += 5;
      }

      if (keyIsDown(RIGHT_ARROW) && keyIsDown(16)) {
        playerX += 3;
      }
      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 10, playerY - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX - 10, playerY - 30, playerHealth / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 10, playerY - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX - 10, playerY - 60, ShieldHealth / 2 + 5, 15);

      if (playerHealth < 0) {
        playerHealth = 0;
      }

      if (ShieldHealth < 0) {
        ShieldHealth = 0;
      }
    };
    player1();
    //player1 shooting
    var shooting1 = function () {
      if (ShieldT3 === false && ShieldT4 === false) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13) &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13) &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }
      if (ShieldHealth2 < 1) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13) &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13) &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }

      if (keyIsDown(13) && playerXDirection === 0 && ShieldT === false) {
        image(imgLL, playerX - 600, playerY + 15, 600, 30);
        image(imgLL, playerX - 1200, playerY + 15, 600, 30);
      } else if (
        keyIsDown(13) &&
        playerXDirection === 1 &&
        ShieldT2 === false
      ) {
        image(imgLR, playerX + 80, playerY + 15, 600, 30);
        image(imgLR, playerX + 680, playerY + 15, 600, 30);
      }

      if (keyIsDown(70)) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13)
        ) {
          ShieldHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13)
        ) {
          ShieldHealth2 -= 2;
        }
      }
    };
    shooting1();
    //main player2 function
    var player2 = function () {
      if (playerXDirection2 === 0) {
        image(img3, playerX2, playerY2);
      } else if (playerXDirection2 === 1) {
        image(img4, playerX2, playerY2);
      }

      playerY2 += 5;

      if (playerY2 >= 560) {
        playerY2 -= 5;
      }

      if (keyIsDown(87)) {
        playerY2 -= 10;
      }

      if (keyIsDown(65)) {
        playerX2 -= 5;
      }

      if (keyIsDown(65) && keyIsDown(71)) {
        playerX2 -= 3;
      }

      if (keyIsDown(68)) {
        playerX2 += 5;
      }

      if (keyIsDown(68) && keyIsDown(71)) {
        playerX2 += 3;
      }
      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX2 - 15, playerY2 - 30, playerHealth2 / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX2 - 15, playerY2 - 60, ShieldHealth2 / 2 + 5, 15);

      if (playerHealth2 < 0) {
        playerHealth2 = 0;
      }

      if (ShieldHealth2 < 0) {
        ShieldHealth2 = 0;
      }
    };
    player2();
    //player2 shooting
    var shooting2 = function () {
      if (ShieldT === false && ShieldT2 === false) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72) &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72) &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }
      if (ShieldHealth < 1) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72) &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72) &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }

      if (keyIsDown(72) && playerXDirection2 === 0 && ShieldT3 === false) {
        image(imgLL, playerX2 - 600, playerY2 + 15, 600, 30);
        image(imgLL, playerX2 - 1200, playerY2 + 15, 600, 30);
      } else if (
        keyIsDown(72) &&
        playerXDirection2 === 1 &&
        ShieldT4 === false
      ) {
        image(imgLR, playerX2 + 80, playerY2 + 15, 600, 30);
        image(imgLR, playerX2 + 680, playerY2 + 15, 600, 30);
      }

      if (keyIsDown(191)) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72)
        ) {
          ShieldHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72)
        ) {
          ShieldHealth -= 2;
        }
      }
    };
    shooting2();
    //player 1 and 2 losing/winning
    var winninglosing = function () {
      if (playerHealth <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("RED", 500, 100);
        text("WINS", 460, 200);
        playerY += 10;
      }
      if (playerHealth2 <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("BLUE", 460, 100);
        text("WINS", 460, 200);
        playerY2 += 10;
      }
    };
    winninglosing();

    var shieldmain = function () {
      //P1
      if (keyIsDown(191) && playerXDirection === 0) {
        image(imgSL, playerX, playerY + 4);
        ShieldT = true;
      } else {
        ShieldT = false;
      }

      if (keyIsDown(191) && playerXDirection === 1) {
        image(imgSR, playerX, playerY + 4);
        ShieldT2 = true;
      } else {
        ShieldT2 = false;
      }

      //P2
      if (keyIsDown(70) && playerXDirection2 === 0) {
        image(imgSL2, playerX2, playerY2 + 4);
        ShieldT3 = true;
      } else {
        ShieldT3 = false;
      }

      if (keyIsDown(70) && playerXDirection2 === 1) {
        image(imgSR2, playerX2, playerY2 + 4);
        ShieldT4 = true;
      } else {
        ShieldT4 = false;
      }
    };
    shieldmain();
  };
  var mainstart2 = function () {
    //background1
    image(imgBG, 0, 0);
    image(imgBG2, 700, 0);

    //ship
    image(imgShip1, -75, 0);

    //floor
    image(imgGround, 0, 650);
    image(imgGround, 400, 650);
    image(imgGround, 800, 650);

    //main player1 function
    var player1 = function () {
      if (playerXDirection === 0) {
        image(img1, playerX, playerY);
      } else if (playerXDirection === 1) {
        image(img2, playerX, playerY);
      }

      playerY += 5;

      if (playerY >= 560) {
        playerY -= 5;
      }

      if (keyIsDown(UP_ARROW)) {
        playerY -= 10;
      }

      if (keyIsDown(LEFT_ARROW)) {
        playerX -= 5;
      }

      if (keyIsDown(LEFT_ARROW) && keyIsDown(16)) {
        playerX -= 3;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        playerX += 5;
      }

      if (keyIsDown(RIGHT_ARROW) && keyIsDown(16)) {
        playerX += 3;
      }
      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 10, playerY - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX - 10, playerY - 30, playerHealth / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 10, playerY - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX - 10, playerY - 60, ShieldHealth / 2 + 5, 15);

      if (playerHealth < 0) {
        playerHealth = 0;
      }

      if (ShieldHealth < 0) {
        ShieldHealth = 0;
      }
    };
    player1();
    //player1 shooting
    var shooting1 = function () {
      if (ShieldT3 === false && ShieldT4 === false) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13) &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13) &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }
      if (ShieldHealth2 < 1) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13) &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13) &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }

      if (keyIsDown(13) && playerXDirection === 0 && ShieldT === false) {
        image(imgLL, playerX - 600, playerY + 15, 600, 30);
        image(imgLL, playerX - 1200, playerY + 15, 600, 30);
      } else if (
        keyIsDown(13) &&
        playerXDirection === 1 &&
        ShieldT2 === false
      ) {
        image(imgLR, playerX + 80, playerY + 15, 600, 30);
        image(imgLR, playerX + 680, playerY + 15, 600, 30);
      }

      if (ShieldT3 === true || ShieldT4 === true) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 0 &&
          playerX > playerX2 &&
          keyIsDown(13)
        ) {
          ShieldHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerXDirection === 1 &&
          playerX < playerX2 &&
          keyIsDown(13)
        ) {
          ShieldHealth2 -= 2;
        }
      }
    };
    shooting1();
    //main player2 function
    var player2 = function () {
      if (playerX < playerX2) {
        image(img3, playerX2, playerY2);
      } else if (playerX > playerX2) {
        image(img4, playerX2, playerY2);
      }

      playerY2 += 5;

      if (playerY2 >= 560) {
        playerY2 -= 5;
      }

      if (playerY < playerY2 && playerHealth2 > 0) {
        playerY2 -= 9;
      }

      if (playerX + 280 < playerX2) {
        playerX2 -= 5;
      }

      if (playerX - 200 > playerX2) {
        playerX2 += 5;
      }

      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX2 - 15, playerY2 - 30, playerHealth2 / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX2 - 15, playerY2 - 60, ShieldHealth2 / 2 + 5, 15);

      if (playerHealth2 < 0) {
        playerHealth2 = 0;
      }

      if (ShieldHealth2 < 0) {
        ShieldHealth2 = 0;
      }
    };
    player2();
    //player2 shooting
    var shooting2 = function () {
      if (ShieldT === false && ShieldT2 === false) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 > playerX &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 < playerX &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }

      if (playerX > playerX2) {
        image(imgLR, playerX2 + 80, playerY2 + 15, 600, 30);
        image(imgLR, playerX2 + 680, playerY2 + 15, 600, 30);
      } else if (playerX < playerX2) {
        image(imgLL, playerX2 - 600, playerY2 + 15, 600, 30);
        image(imgLL, playerX2 - 1200, playerY2 + 15, 600, 30);
      }

      if (ShieldHealth < 1) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 > playerX &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 < playerX &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }

      if (keyIsDown(191)) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 > playerX
        ) {
          ShieldHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX2 < playerX
        ) {
          ShieldHealth -= 2;
        }
      }
    };
    shooting2();
    //player 1 and 2 losing/winning
    var winninglosing = function () {
      if (playerHealth <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("RED", 500, 100);
        text("WINS", 460, 200);
        playerY += 10;
      }
      if (playerHealth2 <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("BLUE", 460, 100);
        text("WINS", 460, 200);
        playerY2 += 10;
      }
    };
    winninglosing();

    var shieldmain = function () {
      //P1
      if (keyIsDown(191) && playerXDirection === 0) {
        image(imgSL, playerX, playerY + 4);
        ShieldT = true;
      } else {
        ShieldT = false;
      }

      if (keyIsDown(191) && playerXDirection === 1) {
        image(imgSR, playerX, playerY + 4);
        ShieldT2 = true;
      } else {
        ShieldT2 = false;
      }
    };
    shieldmain();
  };
  var mainstart3 = function () {
    //background1
    image(imgBG, 0, 0);
    image(imgBG2, 700, 0);

    //ship
    image(imgShip1, -75, 0);

    //floor
    image(imgGround, 0, 650);
    image(imgGround, 400, 650);
    image(imgGround, 800, 650);

    //main player1 function
    var player1 = function () {
      if (playerX2 < playerX) {
        image(img1, playerX, playerY);
      } else if (playerX2 > playerX) {
        image(img2, playerX, playerY);
      }

      playerY += 5;

      if (playerY >= 560) {
        playerY -= 5;
      }

      if (playerY2 < playerY && playerHealth > 0) {
        playerY -= 9;
      }

      if (playerX2 + 280 < playerX) {
        playerX -= 5;
      }

      if (playerX2 - 200 > playerX) {
        playerX += 5;
      }

      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 15, playerY - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX - 15, playerY - 30, playerHealth / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX - 15, playerY - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX - 15, playerY - 60, ShieldHealth / 2 + 5, 15);

      if (playerHealth < 0) {
        playerHealth = 0;
      }

      if (ShieldHealth < 0) {
        ShieldHealth = 0;
      }
    };
    player1();
    //player1 shooting
    var shooting1 = function () {
      if (ShieldT3 === false && ShieldT4 === false) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerX > playerX2 &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerX < playerX2 &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }

      if (playerX < playerX2) {
        image(imgLR, playerX + 80, playerY + 15, 600, 30);
        image(imgLR, playerX + 680, playerY + 15, 600, 30);
      } else if (playerX > playerX2) {
        image(imgLL, playerX - 600, playerY + 15, 600, 30);
        image(imgLL, playerX - 1200, playerY + 15, 600, 30);
      }

      if (ShieldHealth2 < 1) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerX > playerX2 &&
          ShieldT === false
        ) {
          playerHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerX < playerX2 &&
          ShieldT2 === false
        ) {
          playerHealth2 -= 2;
        }
      }

      if (keyIsDown(70)) {
        if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerX > playerX2
        ) {
          ShieldHealth2 -= 2;
        } else if (
          playerY2 < playerY + 30 &&
          playerY2 + 80 > playerY + 30 &&
          playerX < playerX2
        ) {
          ShieldHealth2 -= 2;
        }
      }
    };
    shooting1();
    //main player2 function
    var player2 = function () {
      if (playerXDirection2 === 0) {
        image(img3, playerX2, playerY2);
      } else if (playerXDirection2 === 1) {
        image(img4, playerX2, playerY2);
      }

      playerY2 += 5;

      if (playerY2 >= 560) {
        playerY2 -= 5;
      }

      if (keyIsDown(87)) {
        playerY2 -= 10;
      }

      if (keyIsDown(65)) {
        playerX2 -= 5;
      }

      if (keyIsDown(65) && keyIsDown(71)) {
        playerX2 -= 3;
      }

      if (keyIsDown(68)) {
        playerX2 += 5;
      }

      if (keyIsDown(68) && keyIsDown(71)) {
        playerX2 += 3;
      }
      //healthBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 30, 100, 15);
      fill(25, 255, 40);
      rect(playerX2 - 15, playerY2 - 30, playerHealth2 / 4 + 5, 15);

      //shieldBar
      strokeWeight(5);
      fill(0);
      rect(playerX2 - 15, playerY2 - 60, 100, 15);
      fill(25, 40, 255);
      rect(playerX2 - 15, playerY2 - 60, ShieldHealth2 / 2 + 5, 15);

      if (playerHealth2 < 0) {
        playerHealth2 = 0;
      }

      if (ShieldHealth2 < 0) {
        ShieldHealth2 = 0;
      }
    };
    player2();
    //player2 shooting
    var shooting2 = function () {
      if (ShieldT === false && ShieldT2 === false) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72) &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72) &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }
      if (ShieldHealth < 1) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72) &&
          ShieldT3 === false
        ) {
          playerHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72) &&
          ShieldT4 === false
        ) {
          playerHealth -= 2;
        }
      }

      if (keyIsDown(72) && playerXDirection2 === 0 && ShieldT3 === false) {
        image(imgLL, playerX2 - 600, playerY2 + 15, 600, 30);
        image(imgLL, playerX2 - 1200, playerY2 + 15, 600, 30);
      } else if (
        keyIsDown(72) &&
        playerXDirection2 === 1 &&
        ShieldT4 === false
      ) {
        image(imgLR, playerX2 + 80, playerY2 + 15, 600, 30);
        image(imgLR, playerX2 + 680, playerY2 + 15, 600, 30);
      }

      if (keyIsDown(191)) {
        if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 0 &&
          playerX2 > playerX &&
          keyIsDown(72)
        ) {
          ShieldHealth -= 2;
        } else if (
          playerY < playerY2 + 30 &&
          playerY + 80 > playerY2 + 30 &&
          playerXDirection2 === 1 &&
          playerX2 < playerX &&
          keyIsDown(72)
        ) {
          ShieldHealth -= 2;
        }
      }
    };
    shooting2();
    //player 1 and 2 losing/winning
    var winninglosing = function () {
      if (playerHealth <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("RED", 500, 100);
        text("WINS", 460, 200);
        playerY += 10;
      }
      if (playerHealth2 <= 0) {
        textFont(Font1);
        fill(255);
        textSize(100);
        text("BLUE", 460, 100);
        text("WINS", 460, 200);
        playerY2 += 10;
      }
    };
    winninglosing();

    var shieldmain = function () {
      //P1
      if (keyIsDown(70) && playerXDirection2 === 0) {
        image(imgSL2, playerX2, playerY2 + 4);
        ShieldT3 = true;
      } else {
        ShieldT3 = false;
      }

      if (keyIsDown(70) && playerXDirection2 === 1) {
        image(imgSR2, playerX2, playerY2 + 4);
        ShieldT4 = true;
      } else {
        ShieldT4 = false;
      }
    };
    shieldmain();
  };

  //switching modes
  if (start === 0) {
    background(0);
    //format
    textFont(Font1);
    textSize(150);
    fill(255);
    text("Arial Attack", 200, 150);
    textSize(75);
    text("Press S to Start", 350, 250);
    text("Press H  for Help", 350, 400);
    textSize(50);
    text("Press  R  to  go  to  the  home  screen", 250, 650);
    image(img1, 1000, 250);
    image(img4, 120, 350);
  }

  if (start === 0 && keyIsPressed && keyCode === 83) {
    start = -1;
  }

  if (start === 0 && keyIsPressed && keyCode === 72) {
    start = -2;
  }

  if (start === -1) {
    background(0);
    textFont(Font1);
    textSize(150);
    fill(255);
    textSize(75);
    text("Press 1 For:", 400, 150);
    text("Press 2 For:", 400, 300);
    text("Press 3 For:", 400, 450);
    textSize(40);
    text("Local Multiply Player", 400, 200);
    text("Single player: Arrow Keys", 375, 350);
    text("Single player: WASD", 400, 500);
    if (keyIsPressed && keyCode === 49 && start === -1) {
      ShieldHealth = 200;
      ShieldHealth2 = 200;

      playerX = 1000;
      playerXDirection = 0;
      playerY = 200;
      playerHealth = 400;
      shieldHealth = 100;

      playerX2 = 120;
      playerXDirection2 = 1;
      playerY2 = 200;
      playerHealth2 = 400;
      shieldHealth2 = 100;
      reset = true;
      start = 1;
    } else if (keyIsPressed && keyCode === 50) {
      ShieldHealth = 200;
      ShieldHealth2 = 200;

      playerX = 1000;
      playerXDirection = 0;
      playerY = 200;
      playerHealth = 400;
      shieldHealth = 100;

      playerX2 = 120;
      playerXDirection2 = 1;
      playerY2 = 200;
      playerHealth2 = 400;
      shieldHealth2 = 100;
      reset = true;
      start = 2;
    } else if (keyIsPressed && keyCode === 51) {
      ShieldHealth = 200;
      ShieldHealth2 = 200;

      playerX = 1000;
      playerXDirection = 0;
      playerY = 200;
      playerHealth = 400;
      shieldHealth = 100;

      playerX2 = 120;
      playerXDirection2 = 1;
      playerY2 = 200;
      playerHealth2 = 400;
      shieldHealth2 = 100;
      reset = true;
      start = 3;
    }
  }

  if (reset === true && start === 1) {
    mainstart();
  } else if (reset === true && start === 2) {
    mainstart2();
  } else if (reset === true && start === 3) {
    mainstart3();
  }

  if (start === -2) {
    background(0);
    //player 2 controls
    textFont(Font1);
    textSize(100);
    text("Blue Player", 100, 150);
    fill(255);
    textSize(75);
    text("Moving", 100, 250);
    text("Shooting", 100, 450);
    text("Shielding", 100, 600);
    textSize(40);
    text("WASD to move around", 100, 300);
    text("and G to sprint", 100, 350);
    text("Press H", 100, 500);
    text("Press F", 100, 650);
    //player 1 controls
    textFont(Font1);
    textSize(100);
    text("Red Player", 700, 150);
    fill(255);
    textSize(75);
    text("Moving", 700, 250);
    text("Shooting", 700, 450);
    text("Shielding", 700, 600);
    textSize(40);
    text("Arrows to move around", 700, 300);
    text("and Shift to sprint", 700, 350);
    text("Press Enter", 700, 500);
    text("Press Slash", 700, 650);
  }

  //reset
  if (keyIsPressed && keyCode === 82) {
    start = 0;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerXDirection = 0;
  } else if (keyCode === RIGHT_ARROW) {
    playerXDirection = 1;
  } else if (keyCode === 65) {
    playerXDirection2 = 0;
  } else if (keyCode === 68) {
    playerXDirection2 = 1;
  }
}
