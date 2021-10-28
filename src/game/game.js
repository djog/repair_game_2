class Player {
    constructor() {
        this.pos = createVector(0, 0);
    }

    update() {
        this.pos.x += 5;
    }
    
    draw() {
        fill(200, 50, 50);
        circle(this.pos.x, this.pos.y, 32);
    }
}

class Game extends Minigame {

    constructor() {
        super();
        this.player = new Player();
    }

    setup() {
        console.log("Setup test!");
    }

    update() {
        this.player.update();
    }

    draw() {
        this.update();

        // Draw
        background(200);
        this.player.draw();
    }
}