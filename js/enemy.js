class Enemy {

	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.r = 10;
		this.speed = 1;
		this.minDistance = 10;
		this.attackRate = 5;
		this.attackElapsed = 0;
	}

	draw(){
		fill(0);
		ellipse(this.pos.x - this.r, this.pos.y - this.r,this.r*2,this.r*2);
	}

	attack(target){
		if(abs(target.pos.x - this.pos.x) <= this.minDistance && abs(target.pos.y - this.pos.y) <= this.minDistance){
			if(this.attackElapsed >= this.attackRate){
				this.attackElapsed = 0;
				target.building.reduceHealth();
			}
		}
		this.attackElapsed++;
	}

	update(target, pos){
		this.attack(target);
		this.pos = pos;
		this.draw();
	}

}