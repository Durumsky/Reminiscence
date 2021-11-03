class Obstacle {
  constructor() {
    this.x = 1200;
    this.y = HEIGHT - 95.5;
    this.obstacles = [];
    (this.speed = 2), 5;
    this.height = 95.5;
    this.width = 600 / 2;
    //contact point in the y
    this.contactPoint = this.y - this.height / 2;
  }

  collision() {
    game.player.score -= 1;
    console.log("hello");
  }

  draw() {
    // if (frameCount %10){
    //     this.obstacles.push
    // }

    //speed of the worm
    this.x -= this.speed;

    //drawing the worm
    image(game.worm, this.x, this.y, this.width, this.height);

    //restarting the position of the worm
    if (this.x <= -this.width) {
      this.x = 1800;
    }

    //conditions of collision detection
    

    //FORWARD
    
    if (game.player.direction === 'forward' && game.player.imageIndex >= 1 && game.player.imageIndex <= 5){
        if ((game.player.x + game.playerWalkForward[game.player.imageIndex].src.width > this.x || game.player.x > this.x)){

        }
        //if (game.player.x + game.playerWalkForward){}
    }
    
    // if (game.player.direction === 'forward') {
    //     if (game.playerWalkForward[game.player.imageIndex].src.width){}
    // }
    //BACKWARD
    //JUMP
    //PULLED
    //START
    //STROKE
  }
}
