class Enemy {

	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.r = 10;
		this.speed = 1;
		this.minDistance = 10;
		this.attackRate = 200000;
		this.attackElapsed = 0;
	}

	draw(){
		//console.log(this.pos)
		fill(0);
		ellipse(this.pos.x - this.r, this.pos.y - this.r,this.r*2,this.r*2);
	}

	moveTowards(target){
		if(abs(target.pos.x - this.pos.x) >= this.minDistance || abs(target.pos.y - this.pos.y) >= this.minDistance){

		}
		else if(target.building.reduceHealth() && this.attackElapsed >= this.attackRate){
			this.attackElapsed = 0;
			target.building.reduceHealth();
		}
		else{
			this.attackElapsed++;
		}
	}

	update(target, pos){
		this.moveTowards(target);
		this.pos = pos;
		this.draw();
	}
}