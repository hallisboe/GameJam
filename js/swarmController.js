class SwarmController {

	constructor(type) {
		this.swarms = []
		this.type = type;
		this.elapsedTime = 0;
		this.startTime = millis();
		this.spawnRate = 10000;
		this.spawnCount = 0;
	}

	update() {
		// Spawn new swarm
		this.elapsedTime = millis() - this.startTime;
		if(this.elapsedTime >= this.spawnRate){
			if(this.swarms.length < swarmCount) { 
				this.swarms.push(new Swarm(this.type));
				this.startTime = millis();
				this.spawnRate = (this.spawnRate <= 1000)? 1000 : this.spawnRate - 40;
				this.spawnCount++;
				if(this.spawnCount === 10){
					this.spawnRate = 5600;
				}
				else if(this.spawnCount === 30){
					enemySpeed = 3;
				}
				else if(this.spawnCount === 100){
					this.spawnRate = 2400;
					swarmCount = (swarmCount < 23)? 23 : swarmCount;
				}
			}
		}
		//console.log(this.swarms)
		// Anders er sykt casual hihihi

		for(let i = this.swarms.length -1; i >= 0; i--){
			this.swarms[i].update();
			if(this.swarms[i].enemies.length == 0){
				this.swarms.splice(i,1);
				swarmCount = (Math.random() <= 0.1)? swarmCount + 1 : swarmCount;
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