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
    this.endOfWorm = false;
    this.lastX = 0;
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

    //the worm is only drawn is the endOfWorm is not reached
    if (this.endOfWorm === false) {
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

      // if (!(game.player.y + game.playerWalkForward[0].src.height < this.y) && !(game.player.x > this.x + this.width) && game.player.x + game.playerWalkForward[game.player.imageIndex].src.width > this.x ){
      //     console.log('contact!')
      // }

      //FORWARD
      if (
        (game.player.direction === "forward" ||
          game.player.direction === "backward") &&
        game.player.imageIndex >= 1 &&
        game.player.imageIndex <= 5
      ) {
        if (
          !(game.player.y + game.playerJump[0].src.height < this.y) &&
          !(game.player.x > this.x + this.width) &&
          game.player.x +
            game.playerWalkForward[game.player.imageIndex].src.width >
            this.x
        ) {
          if (game.player.score > 0) {
            game.player.score -= 1;
            this.x = 2000;
          }
          this.x = 2000;
          console.log(game.player.score);
          game.painAudio.play()
        }
      }

      //JUMP
      //(no need action: already works with forwards)

      //PULLED
      //(no action needed)

      //START
      if (game.player.direction === "start") {
        if (
          !(game.player.x > this.x + this.width) &&
          game.player.x + game.playerWalkForward[0].src.width > this.x
        ) {
          if (game.player.score > 0) {
            game.player.score -= 1;
            this.x = 2000;
          }
          this.x = 2000;
          console.log(game.player.score);
          game.painAudio.play()
        }
      }
    }
      //STROKE
      if (game.player.direction === "stroke" && game.player.score === 3) {
        if (game.player.x + 200 === this.x) {
          game.player.score += 1;
          this.endOfWorm = true;
          game.wormPurringAudio.play()
          this.speed = 0;
          this.lastX = this.x

          //draw next level: inside house
        }
      }

      //Keep the worm in the same x as the last background
      // if (game.player.score === 4){
      //   this.x = game.backgroundImages[3].x + this.lastX
      // }
    
  }
}
