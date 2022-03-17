class PressButton extends Minigame {
    onStart(){
      this.elements = [];
      this.elements.push(new GameElement(390, 50, 50, 50));
      this.elements.push(new GameElement(780, 50, 50, 50));
      this.elements.push(new GameElement(780, 500, 50, 50));
      this.elements.push(new GameElement(390, 500, 50, 50));
    }

    onDraw(){

      background(0);
      this.elements.forEach(function(val){
        val.drawElement();
        });
    
      print(mouseIsPressed);
    }

}

class GameElement
{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.hit = false;
    this.width = width;
    this.height = height;
  }

  drawElement(){

    if (this.hit)
    {
       if (mouseIsPressed === false){
        this.hit = false;
      }
    }
    else if (
      mouseIsPressed === true &&
      mouseX >= this.x && mouseX <= this.x + this.width &&
      mouseY >= this.y && mouseY <= this.y + this.height){
        this.hit = true;
        this.x += 1;
        this.y += 1;
        this.width -= 2;
        this.height -= 2;
//        ellipse(this.x, this.y, this.width, this.height);
    } 
    
    rect(this.x, this.y, this.width, this.height)
         
  }

}