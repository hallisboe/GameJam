class BuildingController{

	constructor(inventory){
		this.buildings = [];
		this.inventory = inventory;
	}

	update(){
		this.buildings.forEach(b => b.update());
		this.checkHealth();
	}

	createMiner(pos){
		this.buildings.push(new Miner(pos,this.inventory));
	}

	createMainBuilding(pos){
		this.buildings.push(new Base(pos,this.inventory));
	}

	checkHealth(){
		this.buildings.forEach(b => {
			if(b.checkHealth() && b instanceof Miner){
				this.buildings.pop(b);
			}
		});
	}

	latestBuilding(){
		return this.buildings.length - 1;
	}

	isPosAvailable(pos){
		let isAvailable = true;
		this.buildings.forEach(b => {
			if(abs(pos.x - b.pos.x) <= 3 && abs(pos.y - b.pos.y) <= 3){
				isAvailable = false;
				return;
			}
		});
		console.log("Is available: " + isAvailable);
		return isAvailable;
	}

}