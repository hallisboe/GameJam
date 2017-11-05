class Turret {

	constructor(pos){
		this.pos = pos;
		this.size = 40;
		this.range = 300;
		this.rotation = 0;
		this.startHealth = 300;
		this.health = this.startHealth;
		this.startMillis = millis();
		this.curCD = 0;
		this.CD = 1000;
		this.isShooting = false;
	}

	draw(){
		push();
		fill(51);
		this.drawHealthBar();
		image(sprite.turretStand,this.pos.x,this.pos.y);
		translate(this.pos.x + this.size/2,this.pos.y + this.size/2);
		rotate(this.rotation);
		if(!this.isShooting){
			image(sprite.turretGreen,-this.size/2,-this.size/2- this.size/4);
		}
		else{
			image(sprite.turretRed,-this.size/2,-this.size/2- this.size/4);
		}
		
		pop();
		this.update();
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
		let swarms = world.swarmController.swarms;
		this.isShooting = false;
		for(let k = swarms.length - 1; k >= 0; k--){
			for(let i = swarms[k].enemies.length - 1; i >= 0; i--){
				if(this.isEnemyInRange(swarms[k].enemies[i])){
					this.isShooting = true;
					this.lookAt(swarms[k].enemies[i]);;
					this.shot(swarms[k].enemies[i]);
					return;
				}
			}
		}
		
	}

	generate(){
		this.curCD = millis() - this.startMillis;
		//console.log("CurCD: " + this.curCD);
		//this.update();
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health - 1;
	}

	checkHealth(){
		return (this.health <= 0)? true : false;
	}

	shot(target){
		//console.log(this.curCD + ">= " + this.CD);
		if(this.curCD >= this.CD){
			this.startMillies = millis();
			//console.log("Should be 0: " + (this.curCD - this.startMillies));
			let velX = ((target.pos.x - target.r) - (this.pos.x + this.size/2));
			let velY = ((target.pos.y - target.r) - (this.pos.y + this.size/2));
			let magnitude = sqrt(pow(velX,2) + pow(velY,2));
			let vel = {x: velX/magnitude, y: velY/magnitude};
			let pos = {x: this.pos.x + this.size/2, y: this.pos.y + this.size/2};
			player.bullets.push(new Bullet(pos,vel));
		} 
	}

	lookAt(target){
		this.rotation = atan2((target.pos.y - target.r - this.pos.y),(target.pos.x - target.r - this.pos.x)) + 90;
		console.log("Rotation: " + this.rotation);
	}
}