class BuildingController{

	constructor(inventory){
		this.buildings = [];
		this.inventory = inventory;
	}

	update(){
		this.buildings.forEach(b => b.update()); //Generate resources and draw
		this.checkHealth(); //Check health
	}

	createMiner(pos){
		this.buildings.push(new Miner(pos,this.inventory));
	}

	createMainBuilding(pos){
		this.buildings.push(new Base(pos,this.inventory));
	}

	createTurret(pos){
		this.buildings.push(new Turret(pos));
	}

	checkHealth(){
		/*this.buildings.forEach(b => {
			//console.log("No health: " + b.checkHealth());
			if(b.checkHealth() && b instanceof Miner){
				console.log("Length before: " + this.buildings.length);
				this.buildings.pop(b);
				console.log("Length after: " + this.buildings.length);
			}
		});*/

		for(let i = this.buildings.length - 1; i >= 0; i--){
			if(this.buildings[i].checkHealth() && this.buildings[i] instanceof Miner){
				this.buildings.splice(i,1);
			}
		}
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
		return isAvailable;
	}

}