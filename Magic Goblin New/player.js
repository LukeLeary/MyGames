function Player() {
    var x = 0;
    var y = 0;
  
    let posX = width / 2;
    let posY = height / 2;

    this.show = function () {
      this.playerX = posX + x;
      this.playerY = posY + y;
    
      let angle = Math.atan2(mouseY - posY - y, mouseX - posX - x);
  
      translate(this.playerX, this.playerY);
      rotate(angle);
      image(Bodyimg, 0, 0);
      if(mouseIsPressed){
        rotate(-5.5);
        image(Armimg2, 0, 0);
      } else{if(winDect === true){
        image(goldHimg, 0, 0);
      }else{image(Armimg, 0, 0);}}

      if(health <= 0) {
        x = 0;
        y = 0;
      }
    };

    this.move = function () {
      if (keyIsDown(87)) {
        y -= 5;
      }
      if (keyIsDown(83)) {
        y += 5;
      }
      if (keyIsDown(65)) {
        x -= 5;
      }
      if (keyIsDown(68)) {
        x += 5;
      }
    }
  }
  