export class vector2{
  x: number
  y: number
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }

  addV(x: number, y: number){
    this.x += x;
    this.y += y;
    return this;
  }
}