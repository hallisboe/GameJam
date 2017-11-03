class Enemy {

	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.r = 10;
		this.speed = 2;
		this.minDistance = 10;
	}

	draw(){
		fill(0);
		ellipse(this.pos.x - this.r, this.pos.y - this.r,this.r*2,this.r*2);
	}

	moveTowards(targetPos){
		if(abs(targetPos.x - this.pos.x) >= this.minDistance || abs(targetPos.y - this.pos.y) >= this.minDistance){
			let x = targetPos.x - this.pos.x;
			let y = targetPos.y - this.pos.y;
			let magnitude = sqrt(pow(x,2) + pow(y,2));
			this.vel.x = (x/magnitude)*this.speed;
			this.vel.y = (y/magnitude)*this.speed;

			this.pos.y += this.vel.y;
			this.pos.x += this.vel.x;
		}
	}

	update(targetPos){
		this.moveTowards(targetPos);
		this.draw();
	}
}