class Paddle{

  constructor(pos){
    this.pos = pos;
    this.direction = 0;
  }

  move(){
    this.pos.y += step * this.direction;
  }

  draw(){
    fill(255);
    rect(this.pos.x, this.pos.y-50, 10, 100)
  }
}
