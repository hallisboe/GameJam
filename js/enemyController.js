class EnemyController{

	constructor(enemyLimit){
		this.limit = enemyLimit;
		this.enemies = [enemyLimit];
		this.initializeEnemies();
	}

	initializeEnemies(){
	for(let i = 0; i < enemyLimit; i++){
		this.enemies[i] = this.createNewEnemy();
	}
}

	createNewEnemy(){
		let x = map(random(),0,1,0,width);
		let y = map(random(),0,1,0,height);
		return (new Enemy({x: x, y: y}));
	}

	update(player){
		if(this.enemies.length < this.limit){
			this.enemies.push(this.createNewEnemy());
		}

		this.enemies.forEach(enemy => enemy.update(player));
	}
}