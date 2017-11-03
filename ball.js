class Ball{

  constructor(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.r = 10;
  }

  move(){
    if(this.pos.x < 20 + this.r){
      if(abs(paddle.pos.y - this.pos.y) < 50){
        this.vel.x *= -1;
        this.vel.y *= max(0.5, abs(paddle.pos.y - this.pos.y) / 12);
        score += 1;
      } else {
        this.vel = {x: -5, y: -3}
        this.pos = {x: width / 2, y: height / 2};
        console.log("You Loose!");
        score = 0;

      }
    } else if(this.pos.x > width - this.r) {
      this.vel.x *= -1;
    }

    if(this.pos.y < this.r || this.pos.y >  height - this.r){
      this.vel.y *= -1;
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(){
    fill(255);
    ellipse(this.pos.x-this.r, this.pos.y-this.r, this.r*2, this.r*2);
  }
}
