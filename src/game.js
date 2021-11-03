class Game {
  setup() {
    this.player = new Player();
    this.background = new Background();
    this.obstacle = new Obstacle;
  }

  constructor() {
    this.backgroundImages;
    this.wormImage;
  }

  preload() {
    this.backgroundImages = [
      {
        src: loadImage("/assets/background/background-1A.png"),
        x: 0,
        speed: 0.5,
      },
      {
        src: loadImage("/assets/background/background-1B.png"),
        x: 0,
        speed: 1.5,
      },
      {
        src: loadImage("/assets/background/background-1C.png"),
        x: 0,
        speed: 2.5,
      },
    ];
    this.playerWalkForward = [
      { src: loadImage("/assets/player/standing/player-standing.png") },
      { src: loadImage("/assets/player/walking forwards/player-walking-1.png") },
      { src: loadImage("/assets/player/walking forwards/player-walking-2.png") },
      { src: loadImage("/assets/player/walking forwards/player-walking-3.png") },
      { src: loadImage("/assets/player/walking forwards/player-walking-4.png") },
      { src: loadImage("/assets/player/walking forwards/player-walking-5.png") },
    ];
    this.playerWalkBackward = [
      { src: loadImage("/assets/player/walking backwards/player-back-1.png") },
      { src: loadImage("/assets/player/walking backwards/player-back-2.png") },
      { src: loadImage("/assets/player/walking backwards/player-back-3.png") },
      { src: loadImage("/assets/player/walking backwards/player-back-4.png") },
      { src: loadImage("/assets/player/walking backwards/player-back-5.png") },
    ];
    this.playerPulledBack = [
      { src: loadImage("/assets/player/pulled back/player-pulled-back.png") },
    ];

    this.playerJump = [
      { src: loadImage("/assets/player/jump/player-jump-2.png") },
    ];

    this.playerStroke = [
      { src: loadImage("/assets/player/stroke/player-stroke-1.png") },
      { src: loadImage("/assets/player/stroke/player-stroke-2.png") },
    ];

    this.worm = loadImage('/assets/worms/worm.gif')
     

  }

  draw() {
    clear();
    this.background.draw();

    this.obstacle.draw();

    this.player.draw();

    

    
    
  }
}
