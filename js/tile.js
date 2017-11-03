class Tile {

	constructor(pos) {
		this.pos = pos;
		this.type = 0;
	}

	draw() {
		rect(this.pos.x, this.pos.y, SCALE, SCALE);
	}

}