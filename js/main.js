"use strict";



let world;
let player;
let enemyController;
let sprites;
let inventory;
let gui;
let sprite;
const SCALE = 40;
const enemyLimit = 10;
let canvas;
let bg;
let buildingController;

let isHolding = false;
let buildOrder;
const minerPrice = 20;

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function preload(){
  sprite = new Sprites();  //loadImage("http://i.imgur.com/fjdKxpe.png");
}


function setup() {
  createCanvas(width, height);
  background(51);
  cursor(CROSS);
  angleMode(DEGREES);

  world = new World();
  player = new Player({x: 100, y: 100});
  enemyController = new EnemyController(enemyLimit);
  world.draw();
  loadPixels(); // EDDFA
  inventory = new Inventory();
  buildingController = new BuildingController(inventory);
  buildingController.createMainBuilding({x:200, y:200});
  buildingController.createMiner({x:400,y:600});
  buildingController.createMiner({x:200,y:800});
  gui = new GUI(inventory);
}

function draw(){
  background(51);
  updatePixels();
  player.update();
  player.checkCollision(enemyController.enemies); 
  enemyController.update(buildingController.buildings[buildingController.latestBuilding()]);
  buildingController.update();

  //Drawing buildOrder
  if(isHolding){
    buildOrder.draw(mouseX,mouseY);
  }

  gui.draw(); //Have to be the last one to draw
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

  if(isHolding){
    buildingController.createMiner(buildOrder.getPos());
    isHolding = false;
    inventory.r1 -= minerPrice;
  }
  else if(gui.purchaseMiner.isClicked(mouseX,mouseY) && inventory.r1 >= minerPrice){
    isHolding = true;
    buildOrder = new BuildOrder(0);
  }
}