class BoxGame extends Minigame {
    currentX = 200;
    direction = 1;
    wins = 0;
    onStart() {

    }

    onUpdate(dt) {
        this.currentX += this.direction;
        if(this.currentX > 1150){
            this.direction =-1;
        }
        if(this.currentX < 200){
            this.direction = 1;
        }
        if(keyIsDown(32)){
            if(this.currentX > 605 && this.currentX < 655){
                console.log("success")
                this.wins ++;
            }
        }
    }

    onDraw() {
        background(100);
        fill(30);
        rect(200, 100, 1000, 500);
        fill(255, 0, 0);
        rect(this.currentX, 200, 50, 50);
        fill(0, 0, 255);
        rect(650, 500, 10, 200, 20);
        text(this.wins, 100, 100);
    }
}