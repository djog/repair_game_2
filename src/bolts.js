class BoltsGame extends Minigame {
  onStart() {
    console.log("Setup test!");
    this.player = new Player();
  }

  onUpdate(dt) {
  }

  onDraw() {
    background(255);
    fill(230)
    rect(0, 0, 50, 200);
  }
}