import { Minigame } from "./minigame";
import * as p5 from 'p5';

export class Test implements Minigame {
    setup(): void {
    }

    draw(p: p5): void {
        p.fill(225, 200, 30);
        p.circle(0, 0, 50);
    }
}