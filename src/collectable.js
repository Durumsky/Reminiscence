class Collectable {
  constructor() {
    this.collectableIndex = 0;
    this.x = game.collectableImages[this.collectableIndex].x;
    this.y = game.collectableImages[this.collectableIndex].y;
    this.width = game.collectableImages[this.collectableIndex].src.width;
    this.height = game.collectableImages[this.collectableIndex].src.height;

    this.playerX = game.player.x + game.playerJump[0].src.width / 2;
    this.playerY = game.player.y;
    this.collectableX =
      this.x + game.collectableImages[this.collectableIndex].src.width / 2;
    this.collectableY = this.y;
  }

  playerCollision() {}

  wormCollision() {}

  draw() {
    //when to show the first item

    if (game.player.score === 0) {
      image(
        game.collectableImages[0].src,
        game.collectableImages[0].x,
        game.collectableImages[0].y
      );

      //collision logic of first item

      let dist1 = dist(
        game.player.x + game.playerJump[0].src.width / 2,
        game.player.y,
        this.x + game.collectableImages[0].src.width / 2,
        this.y
      );

      if (dist1 < 100) {
        this.collectableIndex = 1;
        if (game.player.score < 1) {
          game.player.score += 1;
          game.collectAudio.play();
        }
      } else {
        this.collectableIndex = 0;
      }
    }

    //when to show second item

    if (game.player.score === 1) {
      image(
        game.collectableImages[1].src,
        game.collectableImages[1].x,
        game.collectableImages[1].y
      );

      //collision logic of second item

      let dist2 = dist(
        game.player.x +
          game.playerWalkForward[game.player.imageIndex].src.width / 2,
        game.player.y +
          game.playerWalkForward[game.player.imageIndex].src.height,
        game.collectableImages[1].x + game.collectableImages[1].src.width / 2,
        game.collectableImages[1].y + game.collectableImages[1].src.height
      );

      if (dist2 < 80) {
        this.collectableIndex = 2;
        if (game.player.score < 2) {
          game.player.score += 1;
          game.collectAudio.play();
        }
      } else {
        this.collectableIndex = 0;
      }
      
    }

    // //when to show third items

    if (game.player.score === 2) {
      image(
        game.collectableImages[2].src,
        game.collectableImages[2].x,
        game.collectableImages[2].y
      );

      //collision logic of third item

      let dist3 = dist(
        game.player.x +
          game.playerWalkForward[game.player.imageIndex].src.width / 2,
        game.player.y +
          game.playerWalkForward[game.player.imageIndex].src.height,
        game.collectableImages[2].x + game.collectableImages[2].src.width / 2,
        game.collectableImages[2].y + game.collectableImages[2].src.height
      );

      if (dist3 < 80) {
        this.collectableIndex = 0;
        if (game.player.score < 3) {
          game.player.score += 1;
          game.collectAudio.play();
        }
      } else {
        this.collectableIndex = 0;
      }
    }
  }
}
