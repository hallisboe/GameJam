class Inventory{

	constructor(){
		this.r1 = 20;
		this.r2 = 20;
	}

	increaseResources(type){
		if(type === 0){
			this.r1++;
		}
		else{
			this.r2++;
		}
	}

	decreaseResources(amount){
		if(world.type === 0){
			this.r1 -= amount;
		}
		else{
			this.r2 -= amount;
		}
	}

	checkResources(amount){
		if(world.type === 0){
			return (this.r1 >= amount);
		}
		else{
			return (this.r2 >= amount);
		}
	}

}