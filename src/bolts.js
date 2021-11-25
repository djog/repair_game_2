class BoltsGame extends Minigame {
  onStart() {
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