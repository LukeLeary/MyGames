function Spear() {
  
    let x = width/2;
    let y = height/2;
    let easing = 0.05;

    let posX = 0;
    let posY = 0;

    this.show = function () {
        this.spearX = posX + x;
        this.spearY = posY + y;

        let angle = Math.atan2(mouseY - posY - y, mouseX - posX - x);
        
        let targetX = mouseX;
        let dx = targetX - x;
        x += dx * easing;

        let targetY = mouseY;
        let dy = targetY - y;
        y += dy * easing;

        translate(this.spearX, this.spearY);
        rotate(angle);
        if(winDect === true){
            image(goldSimg, 0, 0);
        } else{image(Spearimg, 0, 0);};
    };

    this.reset = function () {
        this.spearX = player.playerX + 2400;
        this.spearY = player.playerY + 2400;
        x = player.playerX;
        y = player.playerY;
    }
  }