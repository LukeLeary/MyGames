/*please dont look at how i programed the enemy collisions :(*/

function Collision () {

    this.E1 = function () {
        if(spear.spearX - 10 < enemy1.enemy1X + 10 && spear.spearX + 10 > enemy1.enemy1X - 10 && spear.spearY -10 < enemy1.enemy1Y + 10 && spear.spearY + 10 > enemy1.enemy1Y - 10) {
            score++;
            KBwav.play();
            let ran = round(random(1, 4));
            //snake one
            if(ran === 1){
                enemy1.enemy1X = random(0, 1200);
                enemy1.e1x = random(0, 1200);
                enemy1.enemy1Y = -50;
                enemy1.e1y = -50;
            }
            if(ran === 2){
                enemy1.enemy1X = random(0, 1200);
                enemy1.e1x = random(0, 1200);
                enemy1.enemy1Y = 750;
                enemy1.e1y = 750;
            }
            if(ran === 3){
                enemy1.enemy1X = 1250;
                enemy1.e1x = 1250;
                enemy1.enemy1Y = random(0, 700);
                enemy1.e1y = random(0, 700);
            }
            if(ran === 4){
                enemy1.enemy1X = -50;
                enemy1.e1x = -50;
                enemy1.enemy1Y = random(0, 700);
                enemy1.e1y = random(0, 700);
            }
        }
        this.E2 = function () {
            if(spear.spearX - 10 < enemy2.enemy2X + 10 && spear.spearX + 10 > enemy2.enemy2X - 10 && spear.spearY -10 < enemy2.enemy2Y + 10 && spear.spearY + 10 > enemy2.enemy2Y - 10) {
                score++;
                KBwav.play();
                let ran = round(random(1, 4));
                //snake two
                if(ran === 4){
                    enemy2.enemy2X = random(0, 1200);
                    enemy2.e2x = random(0, 1200);
                    enemy2.enemy2Y = -50;
                    enemy2.e2y = -50;
                }
                if(ran === 2){
                    enemy2.enemy2X = random(0, 1200);
                    enemy2.e2x = random(0, 1200);
                    enemy2.enemy2Y = 750;
                    enemy2.e2y = 750;
                }
                if(ran === 3){
                    enemy2.enemy2X = 1250;
                    enemy2.e2x = 1250;
                    enemy2.enemy2Y = random(0, 700);
                    enemy2.e2y = random(0, 700);
                }
                if(ran === 1){
                    enemy2.enemy2X = -50;
                    enemy2.e2x = -50;
                    enemy2.enemy2Y = random(0, 700);
                    enemy2.e2y = random(0, 700);
                }
            }
        }
        this.E3 = function () {
            if(spear.spearX - 10 < enemy3.enemy3X + 10 && spear.spearX + 10 > enemy3.enemy3X - 10 && spear.spearY -10 < enemy3.enemy3Y + 10 && spear.spearY + 10 > enemy3.enemy3Y - 10) {
                score++;
                KBwav.play();
                let ran = round(random(1, 4));
                //snake three
                if(ran === 3){
                    enemy3.enemy3X = random(0, 1200);
                    enemy3.e3x = random(0, 1200);
                    enemy3.enemy3Y = -50;
                    enemy3.e3y = -50;
                }
                if(ran === 1){
                    enemy3.enemy3X = random(0, 1200);
                    enemy3.e3x = random(0, 1200);
                    enemy3.enemy3Y = 750;
                    enemy3.e3y = 750;
                }
                if(ran === 4){
                    enemy3.enemy3X = 1250;
                    enemy3.e3x = 1250;
                    enemy3.enemy3Y = random(0, 700);
                    enemy3.e3y = random(0, 700);
                }
                if(ran === 2){
                    enemy3.enemy3X = -50;
                    enemy3.e3x = -50;
                    enemy3.enemy3Y = random(0, 700);
                    enemy3.e3y = random(0, 700);
                }
            }
        }
        this.E4 = function () {
            if(spear.spearX - 10 < enemy4.enemy4X + 10 && spear.spearX + 10 > enemy4.enemy4X - 10 && spear.spearY -10 < enemy4.enemy4Y + 10 && spear.spearY + 10 > enemy4.enemy4Y - 10) {
                score++;
                KBwav.play();
                let ran = round(random(1, 4));
                //snake three
                if(ran === 3){
                    enemy4.enemy4X = random(0, 1200);
                    enemy4.e4x = random(0, 1200);
                    enemy4.enemy4Y = -50;
                    enemy4.e4y = -50;
                }
                if(ran === 1){
                    enemy4.enemy4X = random(0, 1200);
                    enemy4.e4x = random(0, 1200);
                    enemy4.enemy4Y = 750;
                    enemy4.e4y = 750;
                }
                if(ran === 4){
                    enemy4.enemy4X = 1250;
                    enemy4.e4x = 1250;
                    enemy4.enemy4Y = random(0, 700);
                    enemy4.e4y = random(0, 700);
                }
                if(ran === 2){
                    enemy4.enemy4X = -50;
                    enemy4.e4x = -50;
                    enemy4.enemy4Y = random(0, 700);
                    enemy4.e4y = random(0, 700);
                }
            }
        }
        if(player.playerX - 25 < enemy1.enemy1X + 10 && player.playerX + 25 > enemy1.enemy1X - 10 && player.playerY -25 < enemy1.enemy1Y + 10 && player.playerY + 25 > enemy1.enemy1Y - 10 ||
            player.playerX - 25 < enemy2.enemy2X + 10 && player.playerX + 25 > enemy2.enemy2X - 10 && player.playerY -25 < enemy2.enemy2Y + 10 && player.playerY + 25 > enemy2.enemy2Y - 10 ||
            player.playerX - 25 < enemy3.enemy3X + 10 && player.playerX + 25 > enemy3.enemy3X - 10 && player.playerY -25 < enemy3.enemy3Y + 10 && player.playerY + 25 > enemy3.enemy3Y - 10 ||
            player.playerX - 25 < enemy4.enemy4X + 10 && player.playerX + 25 > enemy4.enemy4X - 10 && player.playerY -25 < enemy4.enemy4Y + 10 && player.playerY + 25 > enemy4.enemy4Y - 10) {
            health -= 3;
        }
        
    }

}