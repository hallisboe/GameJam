class Building{

	constructor(pos,inventory){
		this.pos = pos;
		this.health = 1000;
		this.generateTime = 1000; //millis
		this.startMillies = millis();
		this.size = 100;
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
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,1000,0,this.size + 20),10);
	}

	drawGenerateTimer(){
		fill(0);
		ellipse(this.pos.x + this.size/2,this.pos.y + this.size/2,50,50);
		fill(255);
		//arc(this.pos.x + this.size/2, this.pos.y + this.size/2, 45, 45, 0, map(this.curTime,0,this.generate,0,2*PI), PIE);
		let angle = map(this.curTime,0,this.generateTime,0,360);
		arc(this.pos.x + this.size/2,this.pos.y + this.size/2,45,45,0,angle,PIE);
	}

	generate(){
		this.curTime = millis() - this.startMillies
		if(this.curTime >= this.generateTime){
			this.startMillies = millis();
			inventory.r1++;
		} 
	}

	update(){
		this.generate();
		this.draw();
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health -= 1;
	}

	checkHealth(){
		return (health <= 0)? true : false;
	}
}