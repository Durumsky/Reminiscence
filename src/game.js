class Game {
  setup() {
    this.player = new Player();
    this.background = new Background();
    this.obstacle = new Obstacle;
    this.collectable = new Collectable;
  }

  constructor() {
    this.backgroundImages;
    this.wormImage;
  }

  preload() {
    
    this.backgroundImages = [
      {
        src: loadImage("assets/background/background-1A.png"),
        x: 0,
        speed: 0.5,
        score: 0,
      },
      {
        src: loadImage("assets/background/background-score1.png"),
        x: 0,
        speed: 1.5,
        score: 1
      },
      {
        src: loadImage("assets/background/background-1B.png"),
        x: 0,
        speed: 1.5,
        score: 0,
      },
      {
        src: loadImage("assets/background/background-1C.png"),
        x: 0,
        speed: 2.5,
        score: 0,
      },
      
      {
        src: loadImage("assets/background/background-score2.png"),
        x: 0,
        speed: 2.5,
        score: 2
      },
      {
        src: loadImage("assets/background/background-score3.png"),
        x: 0,
        speed: 2.5,
        score: 3
      },
      {
        src: loadImage("assets/background/background-score4.png"),
        x: 0,
        speed: 2.5,
        score: 4
      },
      
    ];
    this.playerWalkForward = [
      { src: loadImage("assets/player/standing/player-standing.png") },
      { src: loadImage("assets/player/walking forwards/player-walking-1.png") },
      { src: loadImage("assets/player/walking forwards/player-walking-2.png") },
      { src: loadImage("assets/player/walking forwards/player-walking-3.png") },
      { src: loadImage("assets/player/walking forwards/player-walking-4.png") },
      { src: loadImage("assets/player/walking forwards/player-walking-5.png") },
    ];
    this.playerWalkBackward = [
      { src: loadImage("assets/player/walking backwards/player-back-1.png") },
      { src: loadImage("assets/player/walking backwards/player-back-2.png") },
      { src: loadImage("assets/player/walking backwards/player-back-3.png") },
      { src: loadImage("assets/player/walking backwards/player-back-4.png") },
      { src: loadImage("assets/player/walking backwards/player-back-5.png") },
    ];
    this.playerPulledBack = [
      { src: loadImage("assets/player/pulled back/player-pulled-back.png") },
    ];

    this.playerJump = [
      { src: loadImage("assets/player/jump/player-jump-2.png") },
    ];

    this.playerStroke = [
      { src: loadImage("assets/player/stroke/player-stroke-1.png") },
      { src: loadImage("assets/player/stroke/player-stroke-2.png") },
    ];

    this.worm = loadImage('ssets/worms/worm.gif')

    this.collectableImages = [
      { src: loadImage("assets/collectables/collectable-1.png"), x: 1350, y: 450},
      { src: loadImage("assets/collectables/collectable-2.png"), x: 450, y: 1030},
      { src: loadImage("assets/collectables/collectable-3.png"), x: 700, y: 850},

    ];
     

  }

  draw() {
    clear();
    this.background.draw();

    this.collectable.draw();

    this.obstacle.draw();

    this.player.draw();

    

    
    
  }
}
