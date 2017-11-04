class Tile {

	constructor(pos) {
		this.pos = pos;
		this.type = 0;
	}

	draw() {
		image(sprite, this.pos.x, this.pos.y);
	}

}