class Tile {

	constructor(pos) {
		this.pos = pos;
		this.type = 0;
		//this.sprite = loadImage();
	}

	draw() {
		//image(this.sprite,this.pos.x,this.pos.z);
		rect(this.pos.x, this.pos.y, SCALE, SCALE);
	}

}