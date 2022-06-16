

const WORLD_HEIGHT = 50;
const WORLD_WIDTH = 128;
const TILE_SIZE = 32;

class Tile {
    constructor(type, darkness) {
        this.type = type;
        this.darkness = darkness;
    }
}

class World {
    constructor(stateManager) {
        this.isLoaded = false;
        this.cameraPosition = createVector(0, 0);
        this.stateManager = stateManager;

        this.tiles = [];
        for (let x = 0; x < WORLD_WIDTH; x++) {
            this.tiles[x] = [];
        }

        this.loadLevel();
    }

    getTileAtPosition(position) {
        const relativeX = position.x + (WORLD_WIDTH * TILE_SIZE / 2)
        const relativeY = position.y + (WORLD_HEIGHT * TILE_SIZE / 2)
        const tileIndexX = Math.floor(relativeX / 32);
        const tileIndexY = Math.floor(relativeY / 32);
        return this.tiles[tileIndexX][tileIndexY];
    }

    updateCameraPosition(position){
        this.cameraPosition = position;
    }

    async loadLevel() {
        const response = await fetch('assets/levels/1.txt');
        const levelData = await response.text();
        const rows = levelData.split('\n');
        for (let y = 0; y < WORLD_HEIGHT; y++) {
            const row = rows[y];
            for (let x = 0; x < WORLD_WIDTH; x++) {
                const typeNumber = row.charAt(x);
                this.tiles[x][y] = new Tile(typeNumber, random(30));
            }
        }

        this.isLoaded = true;
    }

    clamp(value, minimumValue, maximumValue){
        return Math.min(Math.max(value, minimumValue), maximumValue);
    }

    draw() {
        if (!this.isLoaded) {
            background(0);
            return;
        }
        let relativeCameraPosition = createVector(this.cameraPosition.x + (WORLD_WIDTH / 2) * TILE_SIZE, this.cameraPosition.y + (WORLD_HEIGHT / 2) * TILE_SIZE);

        let horizontalTilesBorder = Math.floor((width / TILE_SIZE) / 1.5);
        let verticalTilesBorder = Math.floor((height / TILE_SIZE) / 1.5);

        let tileIndexCameraX = Math.floor(relativeCameraPosition.x / TILE_SIZE);
        let tileIndexCameraY = Math.floor(relativeCameraPosition.y / TILE_SIZE);
        let tileXStartIndex = this.clamp(tileIndexCameraX - horizontalTilesBorder, 0, WORLD_WIDTH -1);
        let tileXEndIndex = this.clamp(tileIndexCameraX + horizontalTilesBorder, 0, WORLD_WIDTH -1);
        let tileYStartIndex = this.clamp(tileIndexCameraY - verticalTilesBorder, 0, WORLD_HEIGHT - 1);
        let tileYEndIndex = this.clamp(tileIndexCameraY + verticalTilesBorder, 0, WORLD_HEIGHT -1);
        for (let x = tileXStartIndex; x < tileXEndIndex; x++) {
            for (let y = tileYStartIndex; y < tileYEndIndex; y++) {
                let drawX = x * TILE_SIZE - (WORLD_WIDTH / 2) * TILE_SIZE;
                let drawY = y * TILE_SIZE - (WORLD_HEIGHT / 2) * TILE_SIZE;
                const tile = this.tiles[x][y];
                const type = tile.type;
                const darkness = this.tiles[x][y].darkness;
                let colorValue = color(0);
                switch (type) {
                    case '0':
                        colorValue = color(0,0,200);
                        break;
                    case '1':
                        colorValue = color(40);
                        break;
                    case '2':
                        colorValue = color(80);
                        break;
                    case '3':
                        colorValue = color(200, 200, 50);
                        break;
                    case 'A' : 
                    case 'B' : 
                    case 'C' :

                        let game = -1;
                        switch (type)
                        {
                            case "A" : 
                                game = MINIGAMES.BOXGAME;
                                break;
                            case "B" : 
                                game = MINIGAMES.NUMBERS;
                                break;
                            case "C" : 
                                game = MINIGAMES.BOLTS;
                                break;
                        }
                        let hasWon = this.stateManager.wonGames.includes(game);
                        debugger;
                        if (hasWon){
                            colorValue = color(0, 255, 0);
                        } else{
                            colorValue = color(255, 0, 0);
                        }
                        break;
                        
                }
                push();
                rectMode(CORNER);
                colorMode(HSL, 255);

                strokeWeight(2);
                stroke(darkness + 80);

                lightness(darkness);
                fill(colorValue);

                rect(drawX, drawY, TILE_SIZE, TILE_SIZE);

                pop();
            }
        }
    }
}