var stateManager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  stateManager = new StateManager();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stateManager.updateFrame();
}