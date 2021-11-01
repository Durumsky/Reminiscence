class Background {
    constructor(){
        
    }

    draw() {
                

        game.backgroundImages.forEach(function (img){
            if (keyIsDown(RIGHT_ARROW) && game.player.x > 300) {
              img.x -= img.speed;
              image(img.src, img.x, 0, WIDTH * 2, height);
              image(img.src, img.x + (WIDTH*2), 0, WIDTH * 2, height);
              } else {
                image(img.src, img.x, 0, WIDTH *2, height);
                image(img.src, img.x + (WIDTH*2), 0, WIDTH * 2, height);
              }

            if (img.x <= -(WIDTH*2)){
                img.x = 0;
            }
              
        })
    }
}
