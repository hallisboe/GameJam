class BuildOrder{

	constructor(type){
		this.type = type;
		this.pos = {x: 0, y: 0};
	}

	draw(){
		//Draw miner
		this.pos = this.getCurrentTile(mouseX,mouseY);

		if(this.type === 0){
			fill(255,255,255,100);
			rect(this.pos.x*SCALE,this.pos.y*SCALE,40,40);
		}
		else{
			fill(51,51,51,100);
			rect(this.pos.x*SCALE,this.pos.y*SCALE,40,40);
			fill(51,51,51,30);
			stroke(0,0,0,30);
			ellipse(this.pos.x*SCALE + 20,this.pos.y*SCALE + 20,300,300);
		}
	}

	getCurrentTile(x,y) {
		return {x: Math.floor(x / SCALE), y: Math.floor(y / SCALE)};
	}

	getPos(){
		return {x: this.pos.x*SCALE, y: this.pos.y*SCALE};
	}


}