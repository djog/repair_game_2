var x: number, y: number = 0;
var size: number = 60 ;

function setup() {
    x = windowWidth/2;
    y = windowHeight/2;

    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0);
    noStroke();

    fill(255);
    textSize(56);
    textAlign(LEFT);
    text("Hello world!", 60, 60);
    
    if (keyIsDown(32)) {
        fill(50, 255, 50);
        size += size * deltaTime * 0.001;
    }
    else {
        fill(255, 50, 50);
    }

    rectMode(CENTER);
    rect(x, y, size, size);
    textAlign(CENTER);
    textSize(32);
    strokeWeight(4);
    stroke(0);
    text("Press space!", x, y + 100);
}