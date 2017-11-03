class Player{
	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.size = 10;
		this.movSpeed = 3;
		this.rotation = 0;
	}

	draw(){
		push();
		fill(255,100,188);
		translate(this.pos.x,this.pos.y,this.size,this.size*2);
		rotate(this.rotation);
		rect(-this.size/2,-this.size,this.size,this.size*2);
		pop();
	}

	move(){
		this.pos.x += this.vel.x*this.movSpeed;
		this.pos.y += this.vel.y*this.movSpeed;
	}

	lookAt(){
		this.rotation = atan2((mouseY - this.pos.y),(mouseX - this.pos.x)) + 90;
	}

	update(){
		this.move();
		this.lookAt();
		this.draw();
	}
}