class Player {
  constructor() {
    this.x = 50;
    this.y = 670;
    this.imageIndex = 0;
    this.velocity = 0;
    this.gravity = 1;
    this.floorLevel = 670;
    this.start = 50;
    this.backgroundMovement;
    this.score = 0;
    this.direction = "";
    //this.width = image(game.playerWalkForward[this.imageIndex].src.width)
  }

  draw() {
    //physics for the jumps
    this.velocity += this.gravity;
    this.y += this.velocity;

    //physics of the floor
    if (this.y >= this.floorLevel) {
      this.y = this.floorLevel;
    }
    

    //player jumps
    if (this.y < this.floorLevel) {
      image(game.playerJump[0].src, this.x, this.y);
      if (this.direction === "jump" && keyIsDown(RIGHT_ARROW)) {
        this.x += 10;
      } else if (this.direction === "jump" && keyIsDown(LEFT_ARROW)) {
        this.x -= 10;
      }
    } else if (keyIsDown(RIGHT_ARROW)) {
      //player walks forward
      image(game.playerWalkForward[this.imageIndex].src, this.x, this.y);
      this.direction = "forward";
    } else if (keyIsDown(LEFT_ARROW)) {
      //player walks backwards
      image(
        game.playerWalkBackward[this.imageIndex].src,
        this.x - game.playerWalkBackward[this.imageIndex].src.width,
        this.y
      );
      this.direction = "backward";
    } else if (keyIsDown(DOWN_ARROW)) {
      //player strokes a worm
      this.imageIndex = 0;
      this.y = 715;
      image(game.playerStroke[this.imageIndex].src, this.x, this.y);
      this.direction = "stroke";
    } else if ((this.x > 50 || game.backgroundImages[0].x < 0) && game.player.score <= 3) {
      //player pulled back
      this.y = 825;
      image(game.playerPulledBack[0].src, this.x, this.y);
      this.direction = "pulled";
    } else {
      image(game.playerWalkForward[0].src, this.x, this.y);
      this.direction = "start";
    }
  }

  moveRight() {
    if (this.x < 1400) {
      this.x += 10;
    }

    this.imageIndex++;
    if (this.imageIndex > 5) this.imageIndex = 1;

    game.stepsAudio.play()
    
  }

  moveLeft() {
    if (this.x > 50) {
      this.x -= 10;
    }
    this.imageIndex++;
    if (this.imageIndex > 4) this.imageIndex = 0;
    game.stepsAudio.play()
  }

  stop() {
    this.imageIndex = 0;
    if (this.x >= 50 && this.y === 825 && game.player.score < 4) {
      this.x -= 10;
    }
    game.stepsAudio.pause();
  }

  stroke() {
    //this.imageIndex = 0;
    this.imageIndex++;
    game.stepsAudio.pause();
    if (this.imageIndex > 1) this.imageIndex = 0;
  }

  jump() {
    this.direction = "jump";
    if (this.y === this.floorLevel) {
      this.velocity = -30;
    }
  }
}
