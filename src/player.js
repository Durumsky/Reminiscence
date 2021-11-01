class Player {
  constructor() {
    this.x = 50;
    this.y = 690;
    this.imageIndex = 0;
    this.velocity = 0;
    this.gravity = 1;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= 690){
        this.y = 690
    }

    image(game.playerImages[this.imageIndex].src, this.x, this.y);
  }

  moveRight() {
    if (this.x < 1400) {
      this.x += 10;
    }

    this.imageIndex++;
    if (this.imageIndex > 4) this.imageIndex = 1;
  }

  stop() {
    this.imageIndex = 0;
    if (this.x > 50 && this.y === 690) this.x -= 10;
  }
  jump() {
      if (this.y === 690)
    this.velocity = -15;
  }
}
