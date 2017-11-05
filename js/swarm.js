class Swarm {

	constructor() {
		this.size = 20;
		this.pos = {x: 1000, y:1000};
		this.target = {score: 1000, pos: {x: 0, y: 0}, building: world.buildingController.buildings[0]};
		this.enemies = [];
		this.vel = {x: 0, y: 0};
		this.speed = 1;
		this.world = Math.round(Math.random());
		this.minDistance = 10;
		for(let i = 0; i < 10; i++) {
			let startPos = {x: this.pos.x+(i-5)*60 - 400, y: this.pos.y-(i-5)*60 - 400};
			this.enemies.push(new Enemy(startPos));
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
			enemy.update(this.target, this.pos,this.enemies);
		});
		this.checkBulletCollision(player.bullets);
	}

	updateTargets() {
		this.target = {score: 1000, pos: player.pos, building: player};
		world.buildingController.buildings.forEach(building => {
			let score = Math.sqrt(Math.pow(this.pos.x - building.pos.x, 2) + Math.pow(this.pos.y - building.pos.y, 2));
			if(score < this.target.score) {
				this.target = {score: score, pos: building.pos, building: building};
			}
		});

		let playerScore = Math.sqrt(Math.pow(this.pos.x - player.pos.x, 2) + Math.pow(this.pos.y - player.pos.y, 2));
		if(playerScore < this.target.score){
			this.target = {score: playerScore, pos: player.pos, building: player};
		}
	}

	checkBulletCollision(bullets){
		this.enemies.forEach(e => {
			for(let i = bullets.length - 1; i >= 0; i--){
				if(bullets[i].checkCollision(e)){
					this.enemies.pop(e); 
					bullets.splice(i,1); 
					continue;
				}
			}
		});
	}
	
}