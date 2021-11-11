class Game extends Minigame {
    onStart() {
        this.world = new World();
        this.cameraPos = createVector(0, 0);
        this.player = new Player();
    }

    onUpdate(dt) {
        this.framerate = 1 / (deltaTime / 1000);

        this.player.update();

        this.cameraPos = p5.Vector.lerp(this.cameraPos, this.player.pos, dt * 2.0);

        if (keyIsDown(32)) {
            return MINIGAMES.BOLTS;
        }
    }

    onDraw() {
        // Draw
        background(230);

        translate(-this.cameraPos.x + width / 2, -this.cameraPos.y + height / 2);
        this.world.draw();

        this.player.draw();


        fill(50);

        textSize(24);
        textAlign(LEFT, TOP);
        textFont('serif');
        text('FPS: ' + Math.round(this.framerate), 10, 10);
    }
}