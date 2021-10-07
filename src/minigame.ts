import * as p5 from 'p5';

export interface Minigame {
    setup(p: p5): void;
    draw(p: p5): void;
}