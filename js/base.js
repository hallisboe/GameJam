class Base extends Building{

	constructor(pos,inventory,type){
		super(pos,inventory,80,1000,2000,type);
	}

	draw(){
		push();
		fill(51,51,51,220);
		stroke(0);
		image(sprite.portal,this.pos.x-10,this.pos.y-10);
		this.drawHealthBar();
		this.drawBaseGenerateTimer();
		pop();	
	}
}