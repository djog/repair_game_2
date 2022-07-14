const TileDistance = 60;
const TileWidth = 55;
const TileHeight = 55;
var hours = 0;
var minutes = 0;
var seconds = 0;
var stoptime = true

class NumbersMiniGame extends Minigame {
    game = MINIGAMES.NUMBERS;

    constructor() {
        super();
        this.lastPressedNumber = 0;
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
        
        seconds = seconds + 1;

        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
        }


        let hrs = hours;
        let mins = minutes;
        let secs = seconds;
        if (seconds < 10 || seconds == 0) {
            secs = '0' + seconds;
        }
        if (minutes < 10 || min == 0) {
            mins = '0' + minutes;
        }
        if (hours < 10  || hours == 0) {
            hrs = '0'  + hours;
        }
    
        this.time = `${hrs}:${mins}:${secs}`;

        setTimeout(()=>this.timerCycle(), 1000);
      }
        
    }

    resetTimer() {
        timer.innerHTML = '00:00:00';

        hours = 0;
        seconds = 0;
        min = 0;
        
    }

    onStart(stateManager) {
        console.log("Setup test!");
        let numbers = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
        this.numbershuffle  = shuffle (numbers);
    }

    onUpdate(dt) {
        if (mouseIsPressed)
        {
            
            for (let j = 0; j < 2; j++)
            {
                for (let i = 0; i < 5; i++)
                {
                    let xMin = this.getTileX(i);
                    let yMin = this.getTileY(j);
                    let xMax = xMin + TileWidth;
                    let yMax = yMin + TileHeight;

                    if (mouseX >= xMin && 
                        mouseX <= xMax &&
                        mouseY >= yMin &&
                        mouseY <= yMax)
                        {
                            let selectedNumber = this.getSelectedNumber(j, i);
                            if (selectedNumber == this.lastPressedNumber + 1)
                            {
                                this.lastPressedNumber ++;
                                if (this.lastPressedNumber == 10)
                                {
                                    return new GameState(true, MINIGAMES.GAME);
                                }
                            }

                        }
                }
            }
        }
    }

    getSelectedNumber(j, i){
        let getal = this.numbershuffle[i + j * 5];
        return getal;
    }


    mousePressed() {
        
        //question
    }

    onDraw()
    {
        // Draw
        background(0);

        let tileDefaultColor = color(255, 204, 0);
        let tilePressedColor = color(0, 255, 0);
        let textColor = color(255, 255, 255);

    
        textAlign(CENTER);
        textSize(32);
        strokeWeight(2);
        stroke(0);

        fill(textColor);
        text(this.time, 100,50);
        
        for (let j = 0; j < 2; j++)
        {
            for (let i = 0; i < 5; i++)
            {
                let getal = this.getSelectedNumber(j, i);

                if (getal <= this.lastPressedNumber)
                {
                    fill(tilePressedColor);
                } else
                {
                    fill(tileDefaultColor);
                }


                rect(this.getTileX(i), this.getTileY(j), TileWidth,TileHeight);

                fill(textColor);

                let label = '' + getal;
                let xPositionText = 60 + i * TileDistance;
                let yPositionText = 180 + j * TileDistance;
                text(label, xPositionText, yPositionText);
            }
        }
    }

    getTileX(i)
    {
        return 30 + i * TileDistance;
    }

    getTileY(j)
    {
        return 140 + j * TileDistance;
    }
}       