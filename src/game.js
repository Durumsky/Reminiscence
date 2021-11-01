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
      { src: loadImage("/assets/background-1A.png"), x: 0, speed: 0.5 },
      { src: loadImage("/assets/background-1B.png"), x: 0, speed: 1.5 },
      { src: loadImage("/assets/background-1C.png"), x: 0, speed: 2.5 },
    ];
    this.playerImages = [
      { src: loadImage("/assets/player-standing.png") },
      { src: loadImage("/assets/player-walking-1A.png") },
      { src: loadImage("/assets/player-walking-1B.png") },
      { src: loadImage("/assets/player-walking-1C.png") },
      { src: loadImage("/assets/player-walking-1D.png") },
    ];
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
  }
}
