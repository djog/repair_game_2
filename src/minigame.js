class Minigame {
    game = -1;
    onStart(stateManager) { };
    onUpdate(dt) { };
    onDraw() { };
    onStop() { };
}

const MINIGAMES = { "GAME": 0, "BOLTS": 1, "NUMBERS": 2, "KEYGAME": 3, "BOXGAME": 4 }
Object.freeze(MINIGAMES);

class GameState {

    constructor(wonGame, game) {
        this.wonGame = wonGame;
        this.game = game;
    }
}

class StateManager {
    constructor() {
        this.wonGames = [];
        this.currentMinigame = this.buildMinigame(new GameState(false, MINIGAMES.GAME));
        this.currentMinigame.onStart(this);
        this.victory = false;
    }

    buildMinigame(state) {
        if (state.wonGame) {
            this.wonGames.push(this.currentMinigame.game);
            const allGames = Object.values(MINIGAMES).slice(1);
            let hasWon = true;
            debugger;
            for (let game of allGames) {
                if (!this.wonGames.includes(game)) {
                    hasWon = false;
                    break;
                }
            }
            this.victory = hasWon;
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
        return null;
    }

    switchState(state) {
        const newState = this.buildMinigame(state);

        if (newState) {
            this.currentMinigame.onStop();
            this.currentMinigame = newState;
            this.currentMinigame.onStart(this);
        }
    }


    updateFrame() {

        if (this.victory && this.victoryScreenShown == false) {
            // Draw
            push();

            background(200);
            fill(0);
            rect(width / 2 - 500, height / 3 + 200, 1000, 200);
            fill(200);
            rect(width / 2 - 490, height / 3 + 210, 980, 180);
            fill(0);
            textSize(60);
            text("Congratulations!", width / 2 - 250, height / 3);
            text("You have completed all levels!", width / 2 - 420, height / 3 + 100);
            text("Click here to return to the ship", width / 2 - 420, height / 3 + 320);
            debugger;
            if (mouseX < width / 2 + 500 &&
                mouseX > width / 2 - 500 &&
                mouseY < height / 3 + 400 &&
                mouseY > height / 3 + 200) {
                if (mouseIsPressed) {
                    this.victory = false;
                    this.victoryScreenShown = true;
                }
            }

            pop();

        } else {
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
}