const WORLD_SIZE = 50;
const TILE_SIZE = 32;

class World {
    constructor() {
        this.tiles = new Array(WORLD_SIZE);
        for (let x = 0; x < WORLD_SIZE; x++) {
            this.tiles[x] = new Array(WORLD_SIZE);
        }
    }

    update() {
        
    }
    
    draw() {
        for (let x = 0; x < WORLD_SIZE; x++) {
            for (let y = 0; y < WORLD_SIZE; y++) {
                let drawX = x * TILE_SIZE - (WORLD_SIZE / 2) * TILE_SIZE;
                let drawY = y * TILE_SIZE - (WORLD_SIZE / 2) * TILE_SIZE;
                rectMode(CORNER);
                fill(255, 255, 0);
                rect(drawX, drawY, TILE_SIZE, TILE_SIZE);
                
            }
        }
    }
}