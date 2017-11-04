class Miner extends Building{

	constructor(pos,inventory){
		super(pos,inventory,40,3000,300,world.type);
	}

	draw(){
		push();
		fill(255);
		stroke(0);
		strokeWeight(4);
		//rect(this.pos.x,this.pos.y,this.size,this.size);
		let c = color(0,210,0);
		if(world.type === 0){
			image(sprite.miner,this.pos.x,this.pos.y - this.size -5);
		}
		else{
			c = color(255,0,255);
			image(sprite.miner2,this.pos.x,this.pos.y - this.size -10);
		}
		
		this.drawHealthBar();
		this.drawGenerateTimer(c);
		pop();
	}
}