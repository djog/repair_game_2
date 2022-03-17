class PressButton extends Minigame {

  win = false;

  onStart(){

    this.elements = [];
    this.elements.push(new GameElement(390, 50, 50, 50));
    this.elements.push(new GameElement(780, 50, 50, 50));
    this.elements.push(new GameElement(780, 500, 50, 50));
    this.elements.push(new GameElement(390, 500, 50, 50));
  }

  onDraw(){

    background(0);

    let game = this;

    this.elements.forEach(function(val){
      val.drawElement();
      if (game.win === false)
      {
        game.win = game.elements[0].win && game.elements[1].win && game.elements[2].win && game.elements[3].win;
        if (game.win){
          alert("winning!") 
        }
      }
      });
    print(mouseIsPressed);
  }

    

}

class GameElement
{
  win = false;

  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.hit = false;
    this.width = width;
    this.height = height;
  }

  drawElement(){
    if(this.width < 8){

      if (this.win === false){
        console.log("win")
        this.win = true;
  
      }
    }
    
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
        this.x += 4;
        this.y += 4;
        this.width -= 8;
        this.height -= 8;
//        ellipse(this.x, this.y, this.width, this.height);
    } 
    
    rect(this.x, this.y, this.width, this.height)
         
  }
  
}