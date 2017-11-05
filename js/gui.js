class GUI{

	constructor(inventory){
		this.inventory = inventory;
		this.purchaseMiner = new Button({x: 70, y: height - 70});
		this.purchaseTurret = new Button({x: width - 60, y: height - 70});
	}

	drawTopBar(){
		let barHeight = height*0.05;

		//The Bar
		fill(255,153,51);
		rect(0,0,width,barHeight);

		strokeWeight(0);

		//Resource 1 Icon
		fill(255);
		image(sprite.r1,25,barHeight/2 -10);
		//REsource 1 CountText
		fill(0);
		textStyle(BOLD);
		textSize(20);
		text(inventory.r1,55,barHeight/2 + 7);

		//Resource 2 Icon
		fill(255);
		image(sprite.r2,90,barHeight/2 -15);
		//REsource 2 CountText
		fill(0);
		textStyle(BOLD);
		textSize(20);
		text(inventory.r2,115,barHeight/2 + 7);
	}

	drawBottomBar(){
		let w = 300;
		let h = 75;

		stroke(0);
		strokeWeight(3);
		fill(255,153,51);
		rect(width/2 - w/2,height - h,w,h);

		fill(255);
		image(sprite.r1,width/2 - w/2 + 40,height - h + 10);
		image(sprite.r2,width/2 - w/2 + 40,height - h + 40);
		stroke(0);
		strokeWeight(3);
		fill(0,240,0);
		text("Resource 1: " + this.inventory.r1 + "/" + gameController.r1Goal,width/2 - w/2 + 80,height - h +26);
		fill(230,0,230);
		text("Resource 2: " + this.inventory.r2 + "/" + gameController.r2Goal,width/2 - w/2 + 80,height - h + 63);
	}


	draw(){
		this.drawTopBar();
		this.drawBottomBar();
		this.purchaseMiner.drawMiner();
		this.purchaseTurret.drawTurret();
	}

	drawEndScreen(){
		push();
		translate(width/2,height/2);
		let w = 600;
		let h = 300;

		stroke(0);
		strokeWeight(4);
		fill(255,153,51);
		rect(-w/2,-h/2,w,h);
		fill(0);
		textSize(70);
		text("GAME OVER",-220,25);
		pop();
	}

	drawWinScreen(){
		push();
		translate(width/2,height/2);
		let w = 600;
		let h = 300;

		stroke(0);
		strokeWeight(4);
		fill(255,153,51);
		rect(-w/2,-h/2,w,h);
		fill(0);
		textSize(70);
		text("VICTORY",-160,25);
		pop();
	}


}