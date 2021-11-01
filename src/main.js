const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

function draw() {
  if (frameCount % 8 === 0) {
    game.player.draw();

    if (keyIsDown(RIGHT_ARROW) && game.player.y === 690) {
      game.player.moveRight();
    } else {
      game.player.stop();
    }
  }
  game.draw()
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.jump();
  }
}
