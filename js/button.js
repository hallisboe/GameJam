class Button {

	constructor(pos){
		this.pos = pos;
		this.size = 100;
	}

	drawMiner(){
		fill(255);
		ellipse(this.pos.x,this.pos.y,this.size,this.size);
		fill(255,153,51);
		ellipse(this.pos.x,this.pos.y,this.size*0.9,this.size*0.9);

		//Drawing Miner sprite
		fill(255);
		let rw = this.size/2;
		let rh = this.size/2;
		rect(this.pos.x-rw/2,this.pos.y - rh/2,rw,rh);
	}

	drawTurret(){
		fill(255);
		ellipse(this.pos.x,this.pos.y,this.size,this.size);
		fill(255,153,51);
		ellipse(this.pos.x,this.pos.y,this.size*0.9,this.size*0.9);

		//Drawing Miner sprite
		fill(51);
		let rw = this.size/2;
		let rh = this.size/2;
		rect(this.pos.x-rw/2,this.pos.y - rh/2,rw,rh);
	}

	isClicked(x,y){
		if(x >= this.pos.x - this.size/2&& x <= this.pos.x + this.size/2 && y >= this.pos.y - this.size/2&& y <= this.pos.y + this.size/2){
			return true;
		}
		return false;
	}
}