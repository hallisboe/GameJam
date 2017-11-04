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