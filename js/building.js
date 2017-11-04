class Building{

	constructor(pos,inventory,size,generateTime,startHealth){
		this.pos = pos;
		this.startHealth = startHealth;
		this.health = startHealth;
		this.generateTime = generateTime; //millis
		this.startMillies = millis();
		this.size = size;
		this.curTime = 0;
	}

	draw(){
		push();
		fill(255);
		stroke(0);
		strokeWeight(4);
		rect(this.pos.x,this.pos.y,this.size,this.size);
		this.drawHealthBar();
		this.drawGenerateTimer();
		pop();
	}

	drawHealthBar(){
		fill(255,0,0);
		rect(this.pos.x - 10, this.pos.y - 15,this.size + 20,10);
		fill(0,255,0);
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,this.startHealth,0,this.size + 20),10);
	}

	drawGenerateTimer(){
		fill(0);
		ellipse(this.pos.x + this.size/2,this.pos.y + this.size/2,this.size/2,this.size/2);
		fill(255);
		let angle = map(this.curTime,0,this.generateTime,0,360);
		arc(this.pos.x + this.size/2,this.pos.y + this.size/2,this.size*0.9/2,this.size*0.9/2,0,angle,PIE);
	}

	generate(){
		this.curTime = millis() - this.startMillies
		if(this.curTime >= this.generateTime){
			this.startMillies = millis();
			inventory.r1++;
		} 
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health - 1;
	}

	checkHealth(){
		return (this.health <= 0)? true : false;
	}
}