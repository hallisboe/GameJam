class Player{
	constructor(pos){
		this.pos = pos;
		this.vel = {x: 0, y: 0};
		this.size = 10;
		this.movSpeed = 3;
		this.rotation = 0;
		this.bullets = [];
		this.health = 100;
	}

	draw(){
		push();
		translate(this.pos.x,this.pos.y,this.size,this.size*2);
		this.drawHealthBar();
		fill(255,100,188);
		rotate(this.rotation);
		rect(-this.size/2,-this.size,this.size,this.size*2);
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
		rect(-35,- 35,70,10);
		fill(0,255,0);
		rect(-35, - 35,map(this.health,0,100,0,70),10);
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
		console.log(tiles)

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
		this.bullets.push(new Bullet(this.pos,this.vel));
	}

	checkCollision(enemies){
		for(let i = this.bullets.length - 1; i >= 0; i--){
			this.bullets[i].checkCollision(enemies,this.bullets);
		}
	}

	reduceHealth(){
		this.health = (this.health <= 0)? 0 : this.health -= 1;
	}
}