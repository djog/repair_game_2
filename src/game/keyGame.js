class KeyGame extends Minigame {
    seconds = 5;
    currentIndex = 0;
    successCount = 0;
    possibleKeys = [
        ['A', 65],
        ['B', 66],
        ['C', 67],
        ['D', 68],
        ['E', 69],
        ['F', 70],
        ['G', 71],
        ['H', 72],
        ['I', 73],
        ['J', 74],
        ['K', 75],
        ['L', 76],
        ['M', 77],
        ['N', 78],
        ['O', 79],
        ['P', 80],
        ['Q', 81],
        ['R', 82],
        ['S', 83],
        ['T', 84],
        ['U', 85],
        ['V', 86],
        ['W', 87],
        ['X', 88],
        ['Y', 89],
        ['Z', 90],
        ['0', 48],
        ['1', 49],
        ['2', 50],
        ['3', 51],
        ['4', 52],
        ['5', 53],
        ['6', 54],
        ['7', 55],
        ['8', 56],
        ['9', 57],
    ]

    constructor() {
        super();
        this.startTimer();
    }

    startTimer() {
        if(stoptime == true) {
            stoptime = false;
            this.timerCycle();
        }        
    }

    stoptimer() {
        if (stoptime == false){
          stoptime = true; 
        }         
    }

    timerCycle() {
        if (stoptime == false) {        

        if (this.seconds < 1) {

            this.successCount = 0;
            this.resetTimer();
        }
    
        this.time = `${this.seconds}`;
        this.seconds--;

        setTimeout(()=>this.timerCycle(), 1000);
      }
        
    }

    resetTimer() {
        this.seconds = 5;
    }


    onStart() {
      
    }
  
    onUpdate(dt) {

        const currentKeyCode = this.possibleKeys[this.currentIndex][1];          
        if (keyIsDown(currentKeyCode))
        {
            this.currentIndex = round(random(0,35));
            console.log(key + " - " + keyCode);
            this.successCount++;
            this.resetTimer();

            if (this.successCount > 9 ){
                alert("win");
                return true;
                
            }

            console.log("wins:" + this.successCount);
        }
    }

    onDraw() {
      background(0);
      fill(230)

      textSize(100);
      let textColor = color(255, 255, 255);
      fill(textColor);
      text("Time Left:            seconds", 200, 500);
      text("Successes:", 200, 700);
      text(this.time, 800, 500);
      text(this.successCount, 800, 700);
        
     
      textSize(200);

      const currentCharacter = this.possibleKeys[this.currentIndex][0];
      text(currentCharacter, 800, 200);
      text("Press:", 200, 200);


    }
  }