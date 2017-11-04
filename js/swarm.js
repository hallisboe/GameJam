class Swarm {

	constructor() {
		this.size = 20;
		this.pos = {x: 1000, y:1000};
		this.target = {score: -1000, pos: {x: 0, y: 0}, building: buildingController.buildings[0]};
		this.enemies = [];
		this.vel = {x: 0, y: 0};
		this.speed = 1;
		this.minDistance = 10;
		for(let i = 0; i < 10; i++) {
			this.enemies.push(new Enemy(this.pos));
		}
	}

	update() {
		this.updateTargets();

		if(abs(this.target.pos.x - this.pos.x) >= this.minDistance || abs(this.target.pos.y - this.pos.y) >= this.minDistance){
			let x = this.target.pos.x - this.pos.x;
			let y = this.target.pos.y - this.pos.y;
			let magnitude = sqrt(pow(x,2) + pow(y,2));
			this.vel.x = (x/magnitude)*this.speed;
			this.vel.y = (y/magnitude)*this.speed;
			this.pos.y += this.vel.y;
			this.pos.x += this.vel.x;
		}
		this.enemies.forEach(enemy => {
			enemy.update(this.target, this.pos);
		});
	}

	updateTargets() {
		//this.target = {score: -1000, pos: {x: 0, y: 0}, building: buildingController.buildings[0]};
		buildingController.buildings.forEach(building => {
			let score = Math.sqrt(Math.pow(this.pos.x - building.pos.x, 2) + Math.pow(building.pos.y - this.pos.y, 2));
			if(score > this.target.score) {
				this.target = {'score': score, pos: building.pos, 'building': building};
			}
		});
	}
}