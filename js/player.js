class Player{
	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.size = 10;
		this.movSpeed = 3;
		this.rotation = 0;
	}

	draw(){
		fill(255,100,188);
		rotate(this.rotation);
		rect(this.pos.x,this.pos.y,this.size,this.size*2);
	}

	move(){
		this.pos.x += this.vel.x*this.movSpeed;
		this.pos.y += this.vel.y*this.movSpeed;
	}

	lookAt(){
		//this.rotation = atan((mouseX - this.pos.x)/(mouseY - this.pos.y));
	}

	update(){
		this.move();
		this.lookAt();
		this.draw();
	}
}