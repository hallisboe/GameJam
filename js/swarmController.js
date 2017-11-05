class SwarmController {

	constructor() {
		this.swarms = []
	}

	update() {
		// Spawn new swarm
		if(Math.random() < 0.005) { 
			swarms.push(new Swarm());
		}
		// Anders er sykt casual hihihi
		this.swarms.forEach(swarm => {
			swarm.update();
		}); 
	}

}