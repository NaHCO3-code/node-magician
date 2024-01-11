export class vector2{
  x: number
  y: number
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
    return this;
  }

  static fromVector2Like(v: vector2Like){
    return new vector2(v.x, v.y);
  }
}

export interface vector2Like{
  x: number
  y: number
}