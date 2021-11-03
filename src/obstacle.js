class Obstacle {
  constructor() {
    this.x = 2000;
    this.y = HEIGHT - 95.5;
    this.obstacles = [];
    (this.speed = 2), 5;
    this.height = 95.5;
    this.width = 300;
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
      this.x = 2000;
    }

    //conditions of collision detection

    //FORWARD

    // console.log('player' + game.player.y + game.playerWalkForward[game.player.imageIndex].src.height)
    // console.log('worm' + this.y)

    //OVER THE WORM
    // if (game.player.y + game.playerWalkForward[0].src.height < this.y){
    //     console.log('over the worm')
    // }

    //AFTER the worm
    //     if ((game.player.x > this.x + this.width)){
    // console.log('after the worm')
    //     }

    //CROSSED THE START POINT OF THE WORM
    // if (game.player.x + game.playerWalkForward[game.player.imageIndex].src.width > this.x){
    //     console.log('possible contact')
    // }

    if (!(game.player.y + game.playerWalkForward[0].src.height < this.y) && !(game.player.x > this.x + this.width) && game.player.x + game.playerWalkForward[game.player.imageIndex].src.width > this.x ){
        console.log('contact!')
    }



    if (
      game.player.direction === "forward" &&
      game.player.imageIndex >= 1 &&
      game.player.imageIndex <= 5
    ) {
      if (
        !(
          game.player.y +
            game.playerWalkForward[game.player.imageIndex].src.height >
          this.y
        ) &&
        !(game.player.x > this.x - game.worm.width) &&
        game.player.x + game.playerWalkForward[game.player.imageIndex].src.width
      ) {
        console.log("CONTACT!!");
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
