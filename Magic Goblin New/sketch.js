function preload() {
  //images
  Bodyimg = loadImage("Sprites/PlayerBody.png");
  Armimg = loadImage("Sprites/PlayerArm.png");
  goldHimg = loadImage("Sprites/goldhold.png");
  Armimg2 = loadImage("Sprites/PlayerArm2.png");
  Spearimg = loadImage("Sprites/Spear.png");
  goldSimg = loadImage("Sprites/goldthrow.png");

  SEimg = loadImage("Sprites/SnakeEnemy.gif");

  SKimg = loadImage("Sprites/skull.png");
  HBimg = loadImage("Sprites/HealthBar.png");

  BGimg = loadImage("Sprites/Ground.png");
  TRimg = loadImage("Sprites/Tree1.png");

  //sound
  STwav = loadSound("Sound/Start.wav");
  DDwav = loadSound("Sound/Dead.wav");
  KBwav = loadSound("Sound/Kill_Bell.wav");

  //music
  BGmp3 = loadSound("Sound/BGmusic.mp3");
}

var player;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var spear;
var tree;
var collision;

let on = false;
let spearT = false;
let health = 260;
let score = 0;
let winDect = false;
let reset = false;

function setup() {
  createCanvas(1200, 700);
  imageMode(CENTER);
  BGmp3.loop();
  enemy1 = new Enemy1();
  enemy2 = new Enemy2();
  enemy3 = new Enemy3();
  enemy4 = new Enemy4();
  spear = new Spear();
  tree = new Tree();
  player = new Player();
  collision = new Collision();
}

function draw() {
  //BG
  push();
  scale(2);
  imageMode(CORNER);
  image(BGimg, 0, 0);
  pop();

  //enemy
  if(on === true){
    push();
    enemy1.show();
    enemy1.follow();
    pop();
    push();
    if(score >= 20){
      enemy2.show();
      enemy2.follow();
    }
    pop();
    push();
    if(score >= 50){
      enemy3.show();
      enemy3.follow();
    }
    pop();
    push();
    if(score >= 80){
      enemy4.show();
      enemy4.follow();
    }
    pop();
    if(score >= 100){
      winDect = true;
    }
  }

  //player
  push();
  player.show();
  if(on === true){
    player.move();
  }
  pop();

  push();
  if(mouseIsPressed){
    spearT = true;
  } else { spearT = false;}

  if(spearT === true){
    spear.show();
  }
  if(spearT === false){
    spear.reset();
  }
  pop();

  //tree
  push();
  scale(0.4);
  tree.show();
  pop();

  //healthbar
  if(health <= 0){
    push();
    textStyle(BOLD);
    textSize(100);
    fill(255);
    text("You're Dead", width/2-300, height/2);
    on = false;
    health = 0;
    if(keyIsPressed && keyCode === 13){
      reset = true;
    }
    if(reset === true){
      health = 260;
      score = 0;
    }
    if(health === 260){
      reset = false;
    }
    pop();
  }
  
  push();
  rectMode(CORNER);
  fill(255, 0, 0);
  noStroke();
  rect(782,600, health, 33);
  fill(150, 0, 0);
  noStroke();
  rect(782, 620, health, 13);
  strokeWeight(3);
  stroke(0);
  fill(0, 0, 0, 0);
  rect(782,600, health, 33);
  pop();
  image(HBimg, 950, 600);

  //score
  image(SKimg, 1100, 45);
  text(score, 1120, 45);
  
  //collisions
  if(reset === false){
    collision.E1();
    collision.E2();
    collision.E3();
    collision.E4();
  }

  //startScreen
  if(on === false && health === 260) {
    textStyle(BOLD);
    textSize(100);
    fill(255);
    text("Start", width/2 - 125, height/2)
    textSize(35);
    text("Press Enter to", width/2 - 125, height/2 - 75);
  }
}

keyPressed = function () {
  if(keyCode === 13){
    if(on === false){
      STwav.play();
    }
    on = true;
  }
}