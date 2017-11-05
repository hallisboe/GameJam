class SwarmController {

	constructor(type) {
		this.swarms = []
		this.type = type;
		this.elapsedTime = 0;
		this.startTime = millis();
		this.spawnRate = 6000;
	}

	update() {
		// Spawn new swarm
		this.elapsedTime = millis() - this.startTime;
		if(this.elapsedTime >= this.spawnRate){
			if(this.swarms.length < swarmCount) { 
				this.swarms.push(new Swarm(this.type));
				this.startTime = millis();
				this.spawnRate -= 40;
				console.log("Spawnrate: " + this.spawnRate);
				console.log("swarmCount: " + swarmCount);
			}
		}
		//console.log(this.swarms)
		// Anders er sykt casual hihihi

		for(let i = this.swarms.length -1; i >= 0; i--){
			this.swarms[i].update();
			if(this.swarms[i].enemies.length == 0){
				this.swarms.splice(i,1);
				swarmCount = (Math.random() <= 0.2)? swarmCount + 1 : swarmCount;
				swarmSpawnChance *= 1.03;
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