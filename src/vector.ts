export class Vector2{
  x: number
  y: number
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
    return this;
  }

  toJSON(): vector2JSON{
    return {
      x: this.x,
      y: this.y
    }
  }

  static fromJSON(v: vector2JSON){
    return new Vector2(v.x, v.y);
  }
}

export interface vector2JSON{
  x: number
  y: number
}