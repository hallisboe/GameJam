class Turret {

	constructor(pos){
		this.pos = pos;
		this.size = 40;
		this.range = 300;
		this.rotation = 0;
		this.startHealth = 200;
		this.health = this.startHealth;
		this.startMillis = millis();
		this.curCD = 0;
	}

	draw(){
		push();
		fill(51);
		image(sprite.turretStand,this.pos.x,this.pos.y);
		rotate(this.rotation);
		image(sprite.turretGreen,this.pos.x,this.pos.y - this.size/4);
		this.drawHealthBar();
		pop();
	}

	drawHealthBar(){
		strokeWeight(1);
		fill(255,0,0);
		rect(this.pos.x - 10, this.pos.y - 15,this.size + 20,7);
		fill(0,255,0);
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,this.startHealth,0,this.size + 20),7);
	}

	//Checks if the enemy is in range
	isEnemyInRange(enemy){
		if(abs(this.pos.x - enemy.pos.x) <= this.range/2 && abs(this.pos.y - enemy.pos.y) <= this.range/2){
			return true;
		}
		return false;
	}

	update(){
		let enemies = swarms[0].enemies;
		for(let i = enemies.length - 1; i >= 0; i--){
			if(isEnemyInRange(enemies[i])){
				//Rotate
				//Shot
			}
		}
	}

	generate(){
		this.curCD = millis() - this.startMillis;
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health - 1;
	}

	checkHealth(){
		return (this.health <= 0)? true : false;
	}

	shot(){
		if(this.curCD >= this.CD){
			this.startMillies = millis();
			
		} 
	}
}