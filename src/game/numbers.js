const TileDistance = 60;
const TileWidth = 55;
const TileHeight = 55;

class NumbersMiniGame extends Minigame {

    constructor() {
        super();
        this.lastPressedNumber = 0;
    }

    onStart() {
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
                                    alert("win");
                                    return true;
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
        debugger;
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