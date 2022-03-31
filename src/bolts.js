class BoltsGame extends Minigame {
  lost = false;

  onStart() {
    this.x = 100;
    this.y = 100;
    this.x2= 1359;
    this.y2= 649;
    this.x3= 30;
    this.y3= 660 ;
    setTimeout(()=>{
      if (this.lost == false){
        console.log("win")
      }
    }, 10000)
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
    this.lost =true;
    console.log("lost")
  }
  if (this.x2 == 727 && this.y2 == 259){
    this.lost =true;
    console.log("lost")
  }
  if (this.x3 == 582 && this.y3 == 246){
    this.lost =true;
    console.log("lost")
  }



  }

  onDraw() {
    background(255);
    if(this.lost == false ){
    textSize(100);
    let textColor = color(0,0,0);
    fill(textColor);
    textAlign(CENTER);
    text("survive 10 seconds", 0,100, width);
    }


    // cubes
    if(this.lost == false)
    {
     
      fill(230);
    rect(560, 245, 270, 300);
    rect(mouseX, mouseY, 50, 50);
    rect(this.x, this.y, 50, 50);
    rect(this.x2, this.y2, 50, 50);
    rect(this.x3, this.y3, 50, 50);
    }
    
    //lost text
    if (this.lost == true)
    {   
      textSize(200);
      let textColor = color(255,0,0);
      fill(textColor);
      textAlign(CENTER);
      text("you lost!!!", 0,200, width);
    }
  }
}