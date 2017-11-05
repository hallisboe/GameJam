class SwarmController {

	constructor() {
		this.swarms = []
	}

	update() {
		// Spawn new swarm
		if(Math.random() < 0.02) { 
			this.swarms.push(new Swarm());
		}
		console.log(this.swarms)
		// Anders er sykt casual hihihi
		this.swarms.forEach(swarm => {
			swarm.update();
		}); 
	}

	draw() {
		this.swarms.forEach(swarm => {
			swarm.draw();
		}); 
	}

}