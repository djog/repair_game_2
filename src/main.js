let mainGame;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);

  mainGame = new Game();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  mainGame.draw();
}