let mainGame;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  mainGame = new BoltsGame();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  mainGame.draw();
}