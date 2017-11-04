class Turret {

	constructor(pos){
		this.pos = pos;
		this.size = 40;
		this.range = 300;
	}

	draw(){
		fill(51);
		rect(this.pos.x,this.pos.y,this.size,this.size);
		fill(51,51,51,50);
		ellipse(this.pos.x + this.size/2,this.pos.y + this.size/2,this.range,this.range);
	}
}