import * as p5 from 'p5';
import { Test } from './test';

const sketch = (p: p5): void => {
  const test_minigame = new Test();

  p.setup = (): void => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.windowResized = (): void => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = (): void => {
    p.background(0);
    test_minigame.draw(p);
  };
};

new p5(sketch);