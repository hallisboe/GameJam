class GUI{

	constructor(inventory){
		this.inventory = inventory;
	}

	drawTopBar(){
		fill(255,153,51);
		rect(0,0,width,40);
		fill(255);
		rect(25,15,10,10);
		fill(0);
		text(inventory.r1,50,25);
	}

	draw(){
		this.drawTopBar();
	}

}