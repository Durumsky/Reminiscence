class Collectable {

    constructor(){
        this.collectableIndex = 0;
        // this.x = game.collectableImages.x;
        // this.y = game.collectableImages.y;

    }


    playerCollision(){

    }

    wormCollision(){

    }

    draw(){

        // game.collectableImages.forEach(img){

        // }
        //image(game.collectableImages[this.collectableIndex].src, game.collectableImages.x, game.collectableImages.y);
        image(game.worm, this.x, this.y, this.width, this.height);

    }

}