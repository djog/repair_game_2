class BoltsGame extends Minigame {
  onStart() {
    this.x = 100;
    this.y = 100;
    this.x2= 500;
    this.y2 = 500;

  }

  onUpdate(dt) {
  if (this.x < 600){
    this.x+=1;
    this.y+=0.5;
    this.x2-=1;
    this.y2-=0.5;
  }
  let distance = dist(this.x, this.y, mouseX, mouseY);
  if (distance < 50){
    this.y = 0;
    this.x = 0;
  }
console.log(mouseX)

  }

  onDraw() {
    background(255);
    fill(230)
    rect(mouseX, mouseY, 50, 50);
    rect(this.x, this.y, 50, 50);
    rect(this.x2, this.y2, 50, 50);
  }
}