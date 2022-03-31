class BoxGame extends Minigame {
    currentX = 200;
    velocity = 3;
    direction = this.velocity;
    wins = 0;
    hasFired = false;
    lastFiredAt = new Date();
    boxWidth = 60;

    onStart() {

    }

    onUpdate(dt) {
 //       console.log(new Date() - this.lastFiredAt);
        this.currentX += this.direction;
        if (this.currentX > 1100 - this.boxWidth) {
            this.direction = this.velocity * -1;
        }
        if (this.currentX < 200) {
            this.direction = this.velocity;
        }
        if (new Date() - this.lastFiredAt > 1000) {
            const boxLeft = 605;
            if (this.currentX > boxLeft && this.currentX < boxLeft + this.boxWidth) {
                if (keyIsDown(32) && this.hasFired == false) {
                    console.log("success")
                    this.hasFired = true;
                    console.log("hasFired:" + this.hasFired);
                    this.boxWidth = Math.random() * 70 + 30;
                    this.currentX = 200;
                    this.velocity = Math.random() * 8 + 1;
                    this.wins++;
                }
            } else {
                this.hasFired = false;
            }
        }
        if (keyIsDown(32)) {
            this.lastFiredAt = new Date();
        }
    }

    onDraw() {
        background(100);
        // fill(30);
        // rect(200, 100, 1000, 500);
        fill(255, 0, 0);
        rect(this.currentX, 200, this.boxWidth, 50);
        fill(0, 0, 255);
        rect(650, 500, 10, 200, 20);
        text(this.wins, 100, 100);
    }
}