class Building{

	constructor(pos){
		this.pos = pos;
		this.health = 100;
	}

	draw(){
		fill(255);
		stroke(0);
		strokeWeight(4);
		rect(this.pos.x,this.pos.y,100,100);
		this.drawHealthBar();
	}

	drawHealthBar(){
		fill(255,0,0);
		rect(this.pos.x - 10, this.pos.y - 15,120,10);
		fill(0,255,0);
		rect(this.pos.x - 10, this.pos.y - 15,map(this.health,0,100,0,120),10);
	}

	update(){

	}

	reduceDamage(){
		this.health -= 1;
	}

	checkHealth(){
		return (health <= 0)? true : false;
	}
}