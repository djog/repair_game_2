class Game extends Minigame {
    constructor() {
        super();
        this.world = new World();
        this.player = new Player();
    }

    setup() {
       

    }

    update() {
        this.world.update();
        this.player.update();
    }

    draw() {
        this.update();

        // Draw
        background(230);

        this.world.draw();

        this.player.draw();

        let fps = 1 / (deltaTime / 1000);
        fill(50);
        
        // textFont(this.font);
        // textSize(24);
        // textAlign(LEFT, TOP);
        // textFont('serif');
        // text('FPS: ' + Math.round(fps), 10, 10);
    }
}