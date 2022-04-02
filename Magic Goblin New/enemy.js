/*please dont look at how i programed the enemies :(*/

//enemy one
function Enemy1 () {
    this.e1x = 0;
    this.e1y = 0;
  
    let e1posX = 0;
    let e1posY = 0;


    this.show = function () {
        this.enemy1X = e1posX + this.e1x;
        this.enemy1Y = e1posY + this.e1y;
        
        let angle = Math.atan2(player.playerY - e1posY - this.e1y, player.playerX - e1posX - this.e1x);

        translate(this.enemy1X, this.enemy1Y);
        rotate(angle);
        rotate(1.57)
        image( SEimg, 0, 0);

        if(health <= 0){
            this.e1x = e1posX;
            this.e1y = e1posY;
        }
    }

    this.follow = function() {

        if(player.playerX > this.e1x){
            this.e1x += 3;
        }
        if(player.playerX < this.e1x){
            this.e1x -= 3;
        }
        if(player.playerY > this.e1y){
            this.e1y += 3;
        }
        if(player.playerY < this.e1y){
            this.e1y -= 3;
        }
    }
}
//enemy two
function Enemy2 () {
    this.e2x = 1200;
    this.e2y = 0;
  
    let e2posX = 0;
    let e2posY = 0;


    this.show = function () {
        this.enemy2X = e2posX + this.e2x;
        this.enemy2Y = e2posY + this.e2y;
        
        let angle = Math.atan2(player.playerY - e2posY - this.e2y, player.playerX - e2posX - this.e2x);

        translate(this.enemy2X, this.enemy2Y);
        rotate(angle);
        rotate(1.57)
        image( SEimg, 0, 0);

        if(health <= 0){
            this.e2x = 1200;
            this.e2y = e2posY;
        }
    }

    this.follow = function() {

        if(player.playerX > this.e2x){
            this.e2x += 3;
        }
        if(player.playerX < this.e2x){
            this.e2x -= 3;
        }
        if(player.playerY > this.e2y){
            this.e2y += 3;
        }
        if(player.playerY < this.e2y){
            this.e2y -= 3;
        }
    }
}

//enemy three
function Enemy3 () {
    this.e3x = width/2;
    this.e3y = 750;
  
    let e3posX = 0;
    let e3posY = 0;


    this.show = function () {
        this.enemy3X = e3posX + this.e3x;
        this.enemy3Y = e3posY + this.e3y;
        
        let angle = Math.atan2(player.playerY - e3posY - this.e3y, player.playerX - e3posX - this.e3x);

        translate(this.enemy3X, this.enemy3Y);
        rotate(angle);
        rotate(1.57)
        image( SEimg, 0, 0);

        if(health <= 0){
            this.e3x = width/2;
            this.e3y = 750;
        }
    }

    this.follow = function() {

        if(player.playerX > this.e3x){
            this.e3x += 3;
        }
        if(player.playerX < this.e3x){
            this.e3x -= 3;
        }
        if(player.playerY > this.e3y){
            this.e3y += 3;
        }
        if(player.playerY < this.e3y){
            this.e3y -= 3;
        }
    }
}

//enemy four
function Enemy4 () {
    this.e4x = width/2;
    this.e4y = 750;
  
    let e4posX = 0;
    let e4posY = 0;


    this.show = function () {
        this.enemy4X = e4posX + this.e4x;
        this.enemy4Y = e4posY + this.e4y;
        
        let angle = Math.atan2(player.playerY - e4posY - this.e4y, player.playerX - e4posX - this.e4x);

        translate(this.enemy4X, this.enemy4Y);
        rotate(angle);
        rotate(1.57)
        image( SEimg, 0, 0);

        if(health <= 0){
            this.e4x = width/2;
            this.e4y = 750;
        }
    }

    this.follow = function() {

        if(player.playerX > this.e4x){
            this.e4x += 3;
        }
        if(player.playerX < this.e4x){
            this.e4x -= 3;
        }
        if(player.playerY > this.e4y){
            this.e4y += 3;
        }
        if(player.playerY < this.e4y){
            this.e4y -= 3;
        }
    }
}