"use strict";



let world;
let player;
let enemies = [];
const SCALE = 50;
const enemyLimit = 10;

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


function setup() {
  createCanvas(width, height);
  background(51);
  cursor(CROSS);
  angleMode(DEGREES);

  world = new World();
  player = new Player({x: width/2, y: height/2});

  initializeEnemies();
}

function draw(){
  background(51);
  world.draw();
  player.update();
  player.checkCollision(enemies);


  enemies.forEach(enemy => enemy.update(player.pos));
}

function keyPressed(){
  // Add player controls
  if(keyCode === 87){
  	player.vel.y = -1;
  }
  else if(keyCode === 83){
  	player.vel.y = 1;
  }
  else if(keyCode === 65){
  	player.vel.x = -1;
  }
  else if(keyCode === 68){
  	player.vel.x = 1;
  }
}

function keyReleased(){
  // Stop player
  if(keyCode === 87 || keyCode === 83){
  	player.vel.y = 0;
  }
  else if(keyCode === 65 || keyCode === 68){
  	player.vel.x = 0;
  }
}

function mouseClicked(){
	player.shoot();
}

function initializeEnemies(){
	for(let i = 0; i < enemyLimit; i++){
		createNewEnemy(i);
	}
}

function createNewEnemy(i){
	let x = map(random(),0,1,0,width);
	let y = map(random(),0,1,0,height);
	enemies[i] = new Enemy({x: x, y: y});
}




