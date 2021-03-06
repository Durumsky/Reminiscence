class Background {
  constructor() {}

  draw() {

    //if (game.player.score === 4 && keyIsDown(RIGHT_ARROW)){
      // image(game.lastBackground, 0, 0)
    //}
    
    for (let img of game.backgroundImages) {
      //move back ground after player surpasses the 300 point
      if (img.score <= game.player.score) {
        if (keyIsDown(RIGHT_ARROW) && game.player.x > 300) {
          img.x -= img.speed; 
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        } else {
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        }

        //background backwards

        if (!keyIsDown(RIGHT_ARROW) && game.player.x <= 50 && !(img.x === 0)) {
          img.x += img.speed;
          image(img.src, img.x, 0, WIDTH * 2, height);
        }

        if (img.x <= -(WIDTH * 2)) {
          img.x = 0;
        }
        this.update(img.x);
       
      }

      //SCORE 1:

      //move back ground after player surpasses the 300 point
      if (img.score <= game.player.score) {
        if (keyIsDown(RIGHT_ARROW) && game.player.x > 300) {
          img.x -= img.speed;
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        } else {
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        }

        //background backwards

        if (!keyIsDown(RIGHT_ARROW) && game.player.x <= 50 && !(img.x === 0)) {
          img.x += img.speed;
          image(img.src, img.x, 0, WIDTH * 2, height);
        }

        if (img.x <= -(WIDTH * 2)) {
          img.x = 0;
        }
      }

      //SCORE 2:

      //move back ground after player surpasses the 300 point
      if (img.score <= game.player.score) {
        if (keyIsDown(RIGHT_ARROW) && game.player.x > 300) {
          img.x -= img.speed;
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        } else {
          image(img.src, img.x, 0, WIDTH * 2, height);
          image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
        }

        //background backwards

        if (!keyIsDown(RIGHT_ARROW) && game.player.x <= 50 && !(img.x === 0)) {
          img.x += img.speed;
          image(img.src, img.x, 0, WIDTH * 2, height);
        }

        if (img.x <= -(WIDTH * 2)) {
          img.x = 0;
        }
      }

      //SCORE 3:
      //move back ground after player surpasses the 300 point
      // if (img.score === 3) {
      //   if (keyIsDown(RIGHT_ARROW) && game.player.x > 300) {
      //     img.x -= img.speed;
      //     image(img.src, img.x, 0, WIDTH * 2, height);
      //     image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
      //   } else {
      //     image(img.src, img.x, 0, WIDTH * 2, height);
      //     image(img.src, img.x + WIDTH * 2, 0, WIDTH * 2, height);
      //   }

      //   //background backwards

      //   if (!keyIsDown(RIGHT_ARROW) && game.player.x <= 50 && !(img.x === 0)) {
      //     img.x += img.speed;
      //     image(img.src, img.x, 0, WIDTH * 2, height);
      //   }

      //   if (img.x <= -(WIDTH * 2)) {
      //     img.x = 0;
      //   }
      // }
    }
  }

  update(value) {
    for (let img of game.backgroundImages) {
      img.x = value;
    }
  }
  
}
