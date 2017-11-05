class Building{

	constructor(pos,inventory,size,generateTime,startHealth,type){
		this.pos = pos;
		this.startHealth = startHealth;
		this.health = startHealth;
		this.generateTime = generateTime; //millis
		this.startMillies = millis();
		this.size = size;
		this.curTime = 0;
		this.type = type;
	}

	draw(){
		push();
		fill(255);
		stroke(0);
		strokeWeight(4);
		image(sprite.miner,this.pos.x,this.pos.y - this.size -5);
		this.drawHealthBar();
		this.drawGenerateTimer();
		pop();
	}

	drawHealthBar(){
		strokeWeight(1);
		fill(255,0,0);
		rect(this.pos.x - 10, this.pos.y - 15,this.size + 20,10);
		fill(0,255,0);
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,this.startHealth,0,this.size + 20),10);
	}

	drawGenerateTimer(color){
		fill(color);
		strokeWeight(1);
		rect(this.pos.x + 10,this.pos.y +10, 10,25);
		fill(0);
		let process = map(this.curTime,0,this.generateTime,25,0);
		rect(this.pos.x + 10,this.pos.y+10, 10,process);
	}

	drawBaseGenerateTimer(){
		fill(0);
		ellipse(this.pos.x + this.size/2,this.pos.y + this.size/6,this.size/5,this.size/5);
		fill(255);
		let angle = map(this.curTime,0,this.generateTime,0,360);
		arc(this.pos.x + this.size/2,this.pos.y + this.size/6,this.size*0.9/5,this.size*0.9/5,0,angle,PIE);
	}

	generate(){
		this.curTime = millis() - this.startMillies;
		if(this.curTime >= this.generateTime){
			this.startMillies = millis();
			inventory.increaseResources(this.type);
		} 
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health - 1;
	}

	checkHealth(){
		return (this.health <= 0)? true : false;
	}
}