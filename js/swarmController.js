class SwarmController {

	constructor() {
		this.swarms = []
	}

	update() {
		// Spawn new swarm
		if(Math.random() < 0.001 && this.swarms.length < 10) { 
			this.swarms.push(new Swarm());
		}
		//console.log(this.swarms)
		// Anders er sykt casual hihihi
		this.swarms.forEach(swarm => {
			swarm.update();
			if(swarm.enemies.length == 0) swarms.pop(swarm);
		}); 
	}

	draw() {
		this.swarms.forEach(swarm => {
			swarm.draw();
		}); 
	}

}