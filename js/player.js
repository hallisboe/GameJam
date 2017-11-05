class Player{
	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.size = 50;
		this.movSpeed = 6;
		this.count = 0;
		this.rotation = 0;
		this.bullets = [];
		this.startHealth = 500;
		this.health = 500;
	}

	draw(){
		push();
		this.drawHealthBar();
		fill(255,100,188);
		if(this.vel.y == 1 || (this.vel.x === 0 && this.vel.y === 0)){
			image(sprite.playerFront,this.pos.x - this.size/4,this.pos.y - this.size);
		}
		else if(this.vel.y == -1){
			image(sprite.playerBack,this.pos.x - this.size/4,this.pos.y - this.size);
		}
		else if(this.vel.x == -1){
			image(sprite.playerLeft,this.pos.x - this.size/4,this.pos.y - this.size);
		}
		else if(this.vel.x == 1){
			image(sprite.playerRight,this.pos.x - this.size/4,this.pos.y - this.size);
		}
		pop();

		for(let i = this.bullets.length - 1; i >= 0; i--){
			if(this.bullets[i].expired()){
				this.bullets.splice(i,1);
				continue;
			}
			this.bullets[i].update();
			this.bullets[i].draw();
		}
	}

	drawHealthBar(){
		fill(255,0,0);
		rect(this.pos.x-35,this.pos.y- 70,70,10);
		fill(0,255,0);
		rect(this.pos.x-35, this.pos.y-70,map(this.health,0,this.startHealth,0,70),10);
	}

	getCurrentTile() {
		return {x: Math.floor(this.pos.x / SCALE), y: Math.floor(this.pos.y / SCALE)};
	}

	getAdjacentTiles() {
		let x = this.getCurrentTile().x;
		let y = this.getCurrentTile().y;
		return [world.tiles[x + 1][y], world.tiles[x - 1][y], world.tiles[x][y + 1], world.tiles[x][y - 1]]
	}

	move(){
		let tile = this.getCurrentTile();
		let tiles = this.getAdjacentTiles()
		this.pos.x += this.vel.x*this.movSpeed;
		this.pos.y += this.vel.y*this.movSpeed;
		//console.log(tiles)

		if(tiles[0] == 2) {
			this.pos.x = Math.min((tile.x + 1) * SCALE - 1, this.pos.x);
		}
		if(tiles[1] == 2) {
			this.pos.x = Math.max(tile.x * SCALE + 1, this.pos.x);
		}
		if(tiles[2] == 2) {
			this.pos.y = Math.min((tile.y + 1) * SCALE - 1, this.pos.y);
		}
		if(tiles[3] == 2) {
			this.pos.y = Math.max(tile.y * SCALE + 1, this.pos.y);
		}
	}

	lookAt(){
		this.rotation = atan2((mouseY - this.pos.y),(mouseX - this.pos.x)) + 90;
	}

	update(){
		this.move();
		this.lookAt();
		this.draw();
	}

	shoot(){
		this.count = this.count % 1000;
		if(this.count % 5 == 0){
			this.bullets.push(new Bullet(this.pos,null,true));

		} 
		this.count++;
		
	}

	checkCollision(enemies){
		for(let i = this.bullets.length - 1; i >= 0; i--){
			this.bullets[i].checkCollision(enemies,this.bullets);
		}
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health -= 1;
	}

	checkPortalCollision(pos){
		if(abs(this.pos.x - pos.x) <= 20 && abs(this.pos.y - pos.y) <= 20){
			return true;
		}
		return false;
	}
}