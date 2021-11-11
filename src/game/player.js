const MOVE_SPEED = 200.0;

class Player {
    constructor() {
        this.pos = createVector(0, 0);
    }

    update() {
        let left = keyIsDown(65);
        let right = keyIsDown(68);
        let hInput, vInput = 0;
        if (left && right) {
            hInput = 0.0; 
        } else if (left) {
            hInput = -1.0;
        } else if (right) {
            hInput = 1.0;
        } else {
            hInput = 0.0;
        }
        let up = keyIsDown(87);
        let down = keyIsDown(83);
        if (up && down) {
            vInput = 0.0; 
        } else if (up) {
            vInput = -1.0;
        } else if (down) {
            vInput = 1.0;
        } else {
            vInput = 0.0;
        }
        let input = createVector(hInput, vInput);
        if (input.mag() > 0.0) {
            let movement = input.copy().normalize(); 
            let deltaSeconds = deltaTime / 1000;
            movement.mult(MOVE_SPEED).mult(deltaSeconds);
            this.pos.add(movement);
        }
    }
    
    draw() {
        fill(200, 50, 50);
        circle(this.pos.x, this.pos.y, 32);
    }
}