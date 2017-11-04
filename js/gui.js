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
		let w = 300;
		let h = 75;

		fill(255,153,51);
		rect(width/2 - w/2,height - h,w,h);

		fill(255);
		rect(width/2 - w/2 + 10, height - h + 10,20,20);
		rect(width/2 - w/2 + 10, height - h + 40,20,20);
		fill(200,0,0);
		text("Resource 1: " + this.inventory.r1 + "/1000",width/2 - w/2 + 50,height - h +26);
		fill(0,0,200);
		text("Resource 2: " + this.inventory.r2 + "/500",width/2 - w/2 + 50,height - h + 57);
	}

	drawMinerButton(){
		let w = 100;
		let h = 100;

		fill(255);
		ellipse(w*0.7,height - h*0.7,w,h);
		fill(255,153,51);
		ellipse(w*0.7,height - h*0.7,w*0.9,h*0.9);

		//Drawing Miner sprite
		fill(255);
		let rw = w/2;
		let rh = h/2;
		rect(w*0.7-rw/2,height - h*0.7 - rh/2,rw,rh);
	}

	drawTurretButton(){
		let w = 100;
		let h = 100;

		fill(255);
		ellipse(width-w*0.7,height - h*0.7,w,h);
		fill(255,153,51);
		ellipse(width-w*0.7,height - h*0.7,w*0.9,h*0.9);

		//Drawing Miner sprite
		fill(51);
		let rw = w/2;
		let rh = h/3;
		rect(width-w*0.7-rw/2,height - h*0.7 - rh/2,rw,rh);
	}

	draw(){
		this.drawTopBar();
		this.drawBottomBar();
		this.drawMinerButton();
		this.drawTurretButton();
	}



}