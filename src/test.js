class Test extends Minigame {

    constructor() {
        super();
        this.x = 0;
    }

    setup() {
        console.log("Setup test!");
    }

    draw() {
        this.x += 5;
        background(200);
        fill(225, 200, 30);
        circle(this.x - 500, 0, 50);
    }
}