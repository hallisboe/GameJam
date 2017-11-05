class BuildingController{

	constructor(inventory){
		this.buildings = [];
		this.inventory = inventory;
	}

	update(){
		this.buildings.forEach(b => b.generate()); //Generate resources and draw
		this.checkHealth(); //Check health
	}

	draw(){
		this.buildings.forEach(b => b.draw());
	}

	createMiner(pos){
		this.buildings.push(new Miner(pos,this.inventory));
	}

	createMainBuilding(pos,type){
		this.buildings.push(new Base(pos,this.inventory,type));
	}

	createTurret(pos){
		this.buildings.push(new Turret(pos));
	}

	checkHealth(){
		for(let i = this.buildings.length - 1; i >= 0; i--){
			if(this.buildings[i].checkHealth() && (this.buildings[i] instanceof Miner || this.buildings[i] instanceof Turret)){
				this.buildings.splice(i,1);
			}
		}
	}

	latestBuilding(){
		return this.buildings.length - 1;
	}

	getCurrentTile(x,y) {
		return {x: Math.floor(x / SCALE), y: Math.floor(y / SCALE)};
	}


	isPosAvailable(pos){
		let isAvailable = true;
		let anderskangaaaaleggeseg = this.getCurrentTile(mouseX,mouseY);
		if(world.tiles[anderskangaaaaleggeseg.x][anderskangaaaaleggeseg.y] != 1) isAvailable = false;
		this.buildings.forEach(b => {
			if(abs(pos.x - b.pos.x) <= 3 && abs(pos.y - b.pos.y) <= 3){
				isAvailable = false;
				return;
			}
		});
		return isAvailable;
	}

}