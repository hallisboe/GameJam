class World {

	constructor(map){
	  	this.map = map;
  	}

	draw(){
		for(tile : map) {
			tile.draw();
		}
	}

}