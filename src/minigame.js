class Minigame {
    game = -1;
    onStart(stateManager) { };
    onUpdate(dt) { };
    onDraw() { };
    onStop() { };
}

const MINIGAMES = { "GAME": 0, "TEST": 1, "BOLTS": 2, "NUMBERS" : 3, "KEYGAME" : 4, "BOXGAME" : 5 }
Object.freeze(MINIGAMES);

class GameState{

    constructor(wonGame, game)
    {
        this.wonGame = wonGame;
        this.game = game;
    }
}

class StateManager {
    constructor() {
        this.wonGames = [];
        this.currentMinigame = this.buildMinigame(new GameState(false, MINIGAMES.GAME));
        this.currentMinigame.onStart(this);
    }

    buildMinigame(state) {
        if (state.wonGame){
            this.wonGames.push(this.currentMinigame.game);
            debugger;

        }
        switch (state.game) {
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
        this.currentMinigame.onStart(this);
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