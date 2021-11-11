let mainGame;

var testFont;
function preload() {
  testFont = loadFont('/assets/fonts/Inconsolata-Bold.ttf');
}
function setup() {
https://p5js.org/examples/structure-create-graphics.html
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