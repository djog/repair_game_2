class Test extends Minigame {
    onStart() {
        this.world = new World();
        this.cameraPos = createVector(0, 0);
        this.player = new Player();
    }

    onUpdate(dt) {
        
    }

    onDraw() {
        background(100);
        fill(30)
        rect(10, 10, 100, 100);
    }
}