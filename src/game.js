class Game {
  setup() {
    this.player = new Player();
    this.background = new Background();
    this.obstacle = [];
  }

  constructor() {
    this.backgroundImages;
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
    this.playerWalkForwad = [
      { src: loadImage("/assets/player/standing/player-standing.png") },
      { src: loadImage("/assets/player/walking forwads/player-walking-1.png") },
      { src: loadImage("/assets/player/walking forwads/player-walking-2.png") },
      { src: loadImage("/assets/player/walking forwads/player-walking-3.png") },
      { src: loadImage("/assets/player/walking forwads/player-walking-4.png") },
      { src: loadImage("/assets/player/walking forwads/player-walking-5.png") },
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

    this.worm = [
      {src: loadImage('/assets/worms/worm.gif')}
    ]

  }

  draw() {
    clear();
    this.background.draw();

    this.player.draw();
  }
}
