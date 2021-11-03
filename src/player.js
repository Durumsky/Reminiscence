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
    } else if (keyIsDown(RIGHT_ARROW)) {
      //player walks forward
      image(game.playerWalkForwad[this.imageIndex].src, this.x, this.y);
    } else if (keyIsDown(LEFT_ARROW)) {
      //player walks backwards
      image(game.playerWalkBackward[this.imageIndex].src, this.x - game.playerWalkBackward[this.imageIndex].src.width, this.y);
    } else if (keyIsDown(DOWN_ARROW)) {
      //player strokes a worm
      this.y = 715;
      image(game.playerStroke[this.imageIndex].src, this.x, this.y);
    } else if (this.x > 50 || game.backgroundImages[0].x < 0) {
      //player pulled back
      this.y = 825;
      image(game.playerPulledBack[0].src, this.x, this.y);
    } else {
      image(game.playerWalkForwad[0].src, this.x, this.y);
    }
  }

  moveRight() {
    if (this.x < 1400) {
      this.x += 10;
    }

    this.imageIndex++;
    if (this.imageIndex > 5) this.imageIndex = 1;
  }

  moveLeft() {
    console.log('this works moveleft')
    if (this.x > 50){
      this.x -= 20;
    }
    this.imageIndex++;
    if (this.imageIndex > 4) this.imageIndex = 0
  }

  stop() {
    this.imageIndex = 0;
    if (this.x >= 50 && this.y === 825) {
      this.x -= 50;
    }
  }

  stroke(){
    this.imageIndex++;
    if (this.imageIndex > 1) this.imageIndex = 0
  }

  jump() {
    if (this.y === this.floorLevel) {
      this.velocity = -15;
    }
  }


}
