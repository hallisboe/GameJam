class BuildOrder{

	constructor(type){
		this.type = type;
		this.pos = {x: 0, y: 0};
	}

	draw(x,y){
		//Draw miner
		if(this.type === 0){
			fill(255,255,255,100);
			this.pos = this.getCurrentTile(x,y);
			rect(this.pos.x*SCALE,this.pos.y*SCALE,40,40);
		}
	}

	getCurrentTile(x,y) {
		return {x: Math.floor(x / SCALE), y: Math.floor(y / SCALE)};
	}

	getPos(){
		return {x: this.pos.x*SCALE, y: this.pos.y*SCALE};
	}


}