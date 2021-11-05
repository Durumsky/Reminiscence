const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

function draw() {
  game.draw();
  //controlling the speed of the frames for the movements:
  if (frameCount % 8 === 0) {
    if (keyIsDown(RIGHT_ARROW) && game.player.y === game.player.floorLevel) {
      game.player.moveRight();
      
    } else if (keyIsDown(LEFT_ARROW)) {
      game.player.moveLeft();
    } else if (keyIsDown(DOWN_ARROW)) {
      game.player.stroke();
    } else {
      game.player.stop();
    }
  }
  // console.log(game.player.x - game.player.width)
  //   if (dist(game.player.x + game.player.width, game.obstacle.contactPoint, game.obstacle.x, game.obstacle.contactPoint) < 0){
  //     game.obstacle.collision();
  //   }
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.jump();
  }
}
