class Minigame {
    onStart() { };
    onUpdate(dt) { };
    onDraw() { };
    onStop() { };
}

const MINIGAMES = { "GAME": 0, "TEST": 1, "BOLTS": 2, "NUMBERS" : 3, "KEYGAME" : 4, "BOXGAME" : 5 }
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
            case MINIGAMES.NUMBERS:
                return new NumbersMiniGame();
            case MINIGAMES.PRESSBUTTON:
                return new PressButton();
            case MINIGAMES.KEYGAME:
                return new KeyGame();
            case MINIGAMES.BOXGAME:
                return new BoxGame();
        }
        throw 'Unknown state!';
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
            debugger;

        }
        
        // Draw
        push();
        this.currentMinigame.onDraw();
        pop();
    }
}