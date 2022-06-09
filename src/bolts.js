class Box {
  Vx;
  Vy;
  x;
  y;
  h;
  w;
  constructor(x, y, h, w,Vx ,Vy) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.Vx = Vx;
    this.Vy = Vy;
  }
  moveTo(x, y) {
    if (this.x < x) {
      this.x += this.Vx;
    }
    else {
      this.x -= this.Vx;
    }
    if (this.y < y) {
      this.y += this.Vy;
    }
    else {
      this.y -= this.Vy;
    }
  }
  checkCollision(box) {
    let distance = dist(this.x, this.y, box.x, box.y);
    return (
      (this.x > box.x && this.x < box.x + box.w && this.y > box.y && this.y < box.y + box.h)
      ||(this.x + this.w > box.x && this.x + this.w < box.x + box.w && this.y > box.y && this.y < box.y + box.h)
      ||(this.x > box.x && this.x < box.x + box.w && this.y + this.h > box.y && this.y + this.h < box.y + box.h)
      ||(this.x + this.w > box.x && this.x + this.w < box.x + box.w && this.y + this.h > box.y && this.y + this.h < box.y + box.h)
    );
  }
}
class BoltsGame extends Minigame {
  lost = false;
  win = false;
  end = false;
  boxes = [];
  endBox = new Box
    (
      560, 275, 200, 200 ,0 ,0
    );
  currentSide = 0 ;

  onStart() {

    this.boxes.push(new Box(100, 100, 50, 50, 3, 2.5));
    this.boxes.push(new Box(1359, 649, 50, 50, 3, 2.5));
    this.boxes.push(new Box(30, 660, 50, 50, 3,2.5));
  //  for (let i = 0; i < 100; i++){
    //  this.boxes.push(new Box(30, 660, 10, 10, 0.9 , 0.9 ));
      // this.boxes.push(new Box(0, 0, 10, 10, 0.9 , 0.9 ));
      // this.boxes.push(new Box(1359, 649, 10, 10, 0.9 , 0.9 ));
  //  }

    setTimeout(() => {
      if (this.end == false) {
        if (this.lost == false) {
          this.win = true;
          console.log("win")
        }
      }
    }, 10000)
  }

  onUpdate(dt) {
    for (let box of this.boxes) {
      box.moveTo(this.endBox.x + (this.endBox.w / 2), this.endBox.y + (this.endBox.h / 2 ) );
    }

    let mouseBox = new Box(
      mouseX, mouseY, 50, 50 , 3 , 2.5
    );

    for (let box of this.boxes) {
    if(
      mouseX > 0 && mouseY > 0 && 
      box.checkCollision(mouseBox)
    )
    {
      this.currentSide ++;
      if (this.currentSide == 0)
      {
        box.x = Math.random() * 1300 + 100;
        box.y = 50;
      }
      if (this.currentSide == 1){
        box.x = 1100;
        box.y = Math.random()* 550 + 150;
      }
      if (this.currentSide == 2)
      {
        box.x = Math.random() * 1300 + 100;
        box.y = 650;
      }
      if(this.currentSide == 3)
      {
        box.x = 100;
        box.y = Math.random()* 550 + 150;
        this.currentSide = -1;
      }
      box.Vx = random (2,4)
      box.Vy = random (2,4)
    }
    }


    for (let box of this.boxes) {
      console.log (dist(box.x,box.y,this.endBox.x,this.endBox.y));
      if(
      box.checkCollision(this.endBox)
      )
      {
        this.lost = true;
      }
    }

  }

  onDraw() {
    background(255);

    if (this.win == true) {
      textSize(200);
      let textColor = color(0, 199, 0);
      fill(textColor);
      textAlign(CENTER);
      text("You Win!!!", 0, 200, width);
      this.end = true;
    }

    // cubes
    if (this.end == false) {
      if (this.lost == false && this.win == false) {
        textSize(100);
        let textColor = color(0, 0, 0);
        fill(textColor);
        textAlign(CENTER);
        text("Survive 10 seconds", 0, 100, width);

        fill(230);
        rect(this.endBox.x, this.endBox.y, this.endBox.h, this.endBox.w);
        if(mouseX > 0 && mouseY > 0)
        {rect(mouseX, mouseY, 50, 50);}
        for (let box of this.boxes) {
          rect(box.x, box.y, box.w, box.h);
        }

      }

      //lost text
      if (this.lost == true) {
        textSize(200);
        let textColor = color(255, 0, 0);
        fill(textColor);
        textAlign(CENTER);
        text("You Lost!!!", 0, 200, width);
        console.log("lost")
      }
    }
  }
}