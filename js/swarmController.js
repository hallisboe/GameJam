class SwarmController {

	constructor(type) {
		this.swarms = []
		this.type = type;
	}

	update() {
		// Spawn new swarm
		if(Math.random() < swarmSpawnChance && this.swarms.length < swarmCount) { 
			this.swarms.push(new Swarm(this.type));
		}
		//console.log(this.swarms)
		// Anders er sykt casual hihihi

		for(let i = this.swarms.length -1; i >= 0; i--){
			this.swarms[i].update();
			if(this.swarms[i].enemies.length == 0){
				this.swarms.splice(i,1);
				swarmCount = (Math.random == 0.05)? swarmCount + 1 : swarmCount;
				swarmSpawnChance += 0.000072;
				console.log("Killed of swarm");
				break;
			}
		}
	}

	draw() {
		this.swarms.forEach(swarm => {
			swarm.draw();
		}); 
	}

}