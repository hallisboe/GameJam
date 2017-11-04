class GUI{

	constructor(inventory){
		this.inventory = inventory;
	}

	drawTopBar(){
		let barHeight = height*0.05;

		//The Bar
		fill(255,153,51);
		rect(0,0,width,barHeight);

		//Resource 1 Icon
		fill(255);
		rect(25,barHeight/2 - 10,20,20);
		//REsource 1 CountText
		fill(0);
		textStyle(BOLD);
		textSize(20);
		text(inventory.r1,50,barHeight/2 + 7);
	}

	drawBottomBar(){
		let w = 250;
		let h = 75;

		fill(255,153,51);
		rect(width/2 - w/2,height - h,w,h);

		fill(255);
		rect(width/2 - w/2 + 10, height - h + 10,20,20);
		rect(width/2 - w/2 + 10, height - h + 40,20,20);
		text("Resource 1: " + this.inventory.r1 + "/1000",width/2 - w/2 + 50,height - h +26);
		text("Resource 2: " + this.inventory.r2 + "/500",width/2 - w/2 + 50,height - h + 52);
	}

	draw(){
		this.drawTopBar();
		this.drawBottomBar();
	}

}