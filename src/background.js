class Background {
  constructor() {}

  draw() {
    game.backgroundImages.forEach(function (img) {
      //SCORE 0:

      //move back ground after player surpasses the 300 point
      if (img.score === 0) {
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

      //SCORE 1:

      //move back ground after player surpasses the 300 point
      if (img.score === 1) {
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
      if (img.score === 2) {
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
      if (img.score === 3) {
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
    });
  }
}
