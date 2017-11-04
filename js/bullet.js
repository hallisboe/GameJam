class Bullet {
	
	constructor(pos,vel){
		this.r = 5;
		this.pos = {x: pos.x + this.r, y: pos.y + this.r};
		this.vel = this.calculateVelocity(pos);
		this.speed = 7;

		this.date = new Date();
		this.time = this.date.getTime();
	}

	calculateVelocity(){
		let x = mouseX - this.pos.x;
		let y = mouseY - this.pos.y;
		let length = sqrt(pow(x,2) + pow(y,2));
		x /= length;
		y /= length;
		return {x: x,y: y};
	}

	draw(){
		push();
		fill(200,0,0);
		ellipse(this.pos.x - this.r,this.pos.y - this.r,this.r*2,this.r*2);
		pop();
	}

	update(){
		this.pos.x += this.vel.x*this.speed;
		this.pos.y += this.vel.y*this.speed;
	}

	expired(){
		let newDate = new Date();
		if(newDate.getTime() -  this.time >= 3000){
			return true;
		}
		return false;
	}

	checkCollision(enemy){
			let x = enemy.pos.x - this.pos.x;
			let y = enemy.pos.y - this.pos.y;
			let distance = sqrt(pow(x,2) + pow(y,2));
			if(distance <= enemy.r*2){
				return true;
			}
	}

}
