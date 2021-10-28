let test_minigame = new Test();

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  test_minigame.draw();
}