class GameController {
	constructor(){
		this.gameOver = false;
		this.r1Goal = 1000;
		this.r2Goal = 1000;
	}

	checkGameStatus(){
		if(inventory.r1 >= this.r1Goal && inventory.r2 >= this.r2Goal){
			return true;
		}
		return false;
	}

	checkGameLost(){
		if(player.health <= 0){
			return true;
		}
		else if(world.buildingController.buildings[0].health <= 0){
			return true;
		}
		else if(world2.buildingController.buildings[0].health <= 0){
			return true;
		}
		return false;
	}
}