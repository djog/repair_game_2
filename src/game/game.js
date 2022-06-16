class Game extends Minigame {
    game = MINIGAMES.GAME;
    onStart(stateManager) {
        this.world = new World(stateManager);
        this.cameraPos = createVector(0, 0);
        this.player = new Player();
    }

    onUpdate(dt) {
        this.framerate = 1 / (deltaTime / 1000);

        this.player.update();

        this.cameraPos = p5.Vector.lerp(this.cameraPos, this.player.pos, dt * 2.0);

        this.world.updateCameraPosition(this.cameraPos);

        if (keyIsDown(32)) {
            const tile = this.world.getTileAtPosition(this.player.pos);
            // debugger;
            if (tile){
                switch (tile.type) {
                    case 'A':
                        return new GameState(false, MINIGAMES.BOXGAME);
                    case 'B':
                        return new GameState(false, MINIGAMES.NUMBERS);
                    case 'C':
                        return new GameState(false, MINIGAMES.BOLTS);                        
    
                }                
            }
        }
    }

    onDraw() {
        background(230);

        push();
        translate(-this.cameraPos.x + width / 2, -this.cameraPos.y + height / 2);
        this.world.draw();
        this.player.draw();
        pop();

        fill(250);
        textSize(24);
        textAlign(LEFT, TOP);
        textFont('sans-serif');
        text('FPS: ' + Math.round(this.framerate), 10, 10);
    }
}