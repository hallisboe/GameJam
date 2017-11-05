class Base extends Building{

	constructor(pos,inventory,type){
		super(pos,inventory,80,2000,2000,type);
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

	reduceHealth(){
		world.buildingController.buildings[0].health -= 1;
		world2.buildingController.buildings[0].health -= 1;
	}
}