class Building{

	constructor(pos){
		this.pos = pos;
		this.health = 1000;
	}

	draw(){
		push();
		fill(255);
		stroke(0);
		strokeWeight(4);
		rect(this.pos.x,this.pos.y,80,80);
		this.drawHealthBar();
		pop();
	}

	drawHealthBar(){
		fill(255,0,0);
		rect(this.pos.x - 10, this.pos.y - 15,120,10);
		fill(0,255,0);
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,1000,0,120),10);
	}

	update(){

	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health -= 1;
	}

	checkHealth(){
		return (health <= 0)? true : false;
	}
}