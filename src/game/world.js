const WORLD_SIZE = 50;
const TILE_SIZE = 32;

class Tile {
    constructor(type, darkness) {
        this.type = type;
        this.darkness = darkness;
    }
}

class World {
    constructor() {
        this.isLoaded = false;

        this.tiles = [];
        for (let x = 0; x < WORLD_SIZE; x++) {
            this.tiles[x] = [];
        }

        this.loadLevel();
    }

    async loadLevel() {
        const response = await fetch('assets/levels/1.txt');
        const levelData = await response.text();
        const rows = levelData.split('\n');

        for (let y = 0; y < WORLD_SIZE; y++) {
            const row = rows[y];
            for (let x = 0; x < WORLD_SIZE; x++) {
                const typeNumber = row.charAt(x);
                this.tiles[x][y] = new Tile(typeNumber, random(30));
            }
        }

        this.isLoaded = true;
    }

    draw() {
        if (!this.isLoaded) {
            background(0);
            return;
        }

        for (let x = 0; x < WORLD_SIZE; x++) {
            for (let y = 0; y < WORLD_SIZE; y++) {
                let drawX = x * TILE_SIZE - (WORLD_SIZE / 2) * TILE_SIZE;
                let drawY = y * TILE_SIZE - (WORLD_SIZE / 2) * TILE_SIZE;
                const type = this.tiles[x][y].type;
                const darkness = this.tiles[x][y].darkness;
                let colorValue = color(0);
                switch (type) {
                    case 1:
                        colorValue = color(40);
                    case 2:
                        colorValue = color(80);
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