class Minigame {
    onStart() { };
    onUpdate(dt) { };
    onDraw() { };
    onStop() { };
}

const MINIGAMES = { "GAME": 0, "TEST": 1, "BOLTS": 2 }
Object.freeze(MINIGAMES);
const DEFAULT_MINIGAME = MINIGAMES.GAME;


class StateManager {
    constructor() {
        this.gameState = DEFAULT_MINIGAME;
        this.currentMinigame = this.buildMinigame(this.gameState);
        this.currentMinigame.onStart();
    }

    buildMinigame(state) {
        switch (state) {
            case MINIGAMES.GAME:
                return new Game();
            case MINIGAMES.TEST:
                return new Test();
            case MINIGAMES.BOLTS:
                return new BoltsGame();
        }
        throw 'Unkown state!';
    }

    switchState(state) {
        this.currentMinigame.onStop();
        this.currentMinigame = this.buildMinigame(state);
        this.currentMinigame.onStart();
    }

    updateFrame() {
        // Update
        let newState = this.currentMinigame.onUpdate(deltaTime / 1000);
        if (newState != null) {
            this.switchState(newState);
        }
        
        // Draw
        push();
        this.currentMinigame.onDraw();
        pop();
    }
}