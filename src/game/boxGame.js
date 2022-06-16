class BoxGame extends Minigame {
    game = MINIGAMES.BOXGAME;
    currentX = 200;
    velocity = 3;
    wins = 0;
    hasFired = false;
    lastFiredAt = new Date();
    boxWidth = 60;
    onCooldown = false;
    cooldownTimer = 1000;

    onStart(stateManager) {

    }

    onUpdate(dt) {      
        this.currentX += this.velocity;
        if (this.currentX > 1300 - this.boxWidth) {
            this.velocity = this.velocity * -1;
        }
        if (this.currentX < 200) {
            this.velocity = this.velocity * -1;
        }
        if (new Date() - this.lastFiredAt > this.cooldownTimer) {
            this.onCooldown = false;
            const boxLeft = 655 - this.boxWidth;
            if (keyIsDown(32)) {
                this.lastFiredAt = new Date();
                if (this.currentX > boxLeft && this.currentX < boxLeft + this.boxWidth) {
                    this.boxWidth = Math.random() * 150 + 50;
                    this.currentX = 200;
                    this.velocity = Math.random() * 8 + 7;
                    this.wins++;
                }
            } else {
                this.hasFired = false;
            }
        } else {
            this.onCooldown = true;
        }
        if (this.wins > 1) {
            alert("win");
            return new GameState(true, MINIGAMES.GAME);
        }
    }

    onDraw() {
        background(150);
        fill(0);
        rect(this.currentX, 200, this.boxWidth, 20, 5);
        if (this.onCooldown) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        rect(650, 500, 10, 200, 20);
        fill(0);
        textSize(40);
        text("Press [Space] to shoot", 100, 560);
        text("Hit 15 shots to succeed", 100, 630);
        text("Shots hit =", 100, 700);
        text(this.wins, 300, 700);
        rect(750, 600, 50, 100, 3);
        fill(40, 255, 40);
        let cooldownBar = (new Date() - this.lastFiredAt) / this.cooldownTimer * 90;
        if (cooldownBar > 90) {
            cooldownBar = 90;
        }
        rect(755, 695 - cooldownBar, 40, cooldownBar, 3);
    }
}