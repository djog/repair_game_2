class Game extends Minigame {
    constructor() {
        super();
        this.world = new World();
        this.player = new Player();
    }

    setup() {
        console.log("Setup test!");
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
        fill(0);
        textSize(18);
        textAlign(LEFT, TOP);
        text('FPS: ' + fps.toString(), 10, 10);
    }
}