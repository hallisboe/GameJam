class BuildingController{

	constructor(inventory){
		this.buildings = [];
		this.inventory = inventory;
	}

	update(){
		this.buildings.forEach(b => {
			if(b instanceof Turret){
				b.update();
			}
			b.generate();
		}); //Generate resources and draw
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

	createTurret(pos,type){
		this.buildings.push(new Turret(pos,type));
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


	isPosAvailable(pos,type){
		let isAvailable = true;
		let a = this.getCurrentTile(mouseX,mouseY);
		if(world.tiles[a.x][a.y] != 1 && type === 0) isAvailable = false;
		this.buildings.forEach(b => {
			if(abs(pos.x - b.pos.x) <= 3 && abs(pos.y - b.pos.y) <= 3){
				isAvailable = false;
				return;
			}
		});
		return isAvailable;
	}

}