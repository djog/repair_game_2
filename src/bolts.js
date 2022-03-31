class BoltsGame extends Minigame {
  onStart() {
    this.x = 100;
    this.y = 100;
    this.x2= 1359;
    this.y2= 649;
    this.x3= 30;
    this.y3= 660 ;
  }

  onUpdate(dt) {
  if (this.x < 620){
    this.x+=4
    this.y+=3;
  }

  if (this.x2 > 730){
      this.x2-=4;

  }
  if (this.y2 > 260){
    this.y2-=3;
  }
    if (this.x3 < 580){
     this.x3+=4;
      this.y3-=3;
}

  let distance = dist(this.x, this.y, mouseX, mouseY);
  if (distance < 50){
    this.y = 0;
    this.x = 0;
  }
  
  let distance2 = dist(this.x2, this.y2, mouseX, mouseY);
  if (distance2 < 50){
    this.y2 = 649;
    this.x2 = 1359;
  }
  
  let distance3 = dist(this.x3, this.y3, mouseX, mouseY);
  if (distance3 < 50){
    this.y3 = 660;
    this.x3 = 30;
  }
  if (this.x == 620 && this.y == 490){
    console.log("lost")
  }
  if (this.x2 == 727 && this.y2 == 259){
    console.log("lost")
  }
  if (this.x3 == 582 && this.y3 == 246){
    console.log("lost")
  }



  }

  onDraw() {
    background(255);
    fill(230)
    rect(560, 245, 270, 300);
    rect(mouseX, mouseY, 50, 50);
    rect(this.x, this.y, 50, 50);
    rect(this.x2, this.y2, 50, 50);
    rect(this.x3, this.y3, 50, 50);
  
  }
}