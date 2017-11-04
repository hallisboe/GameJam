"use strict";



let world;
let world2;
let tempWorld;
let player;
let enemyController;
let sprite;
let inventory;
let gui;

let swarms;

let canvas;
let bg;

const SCALE = 40;
const enemyLimit = 10;
const minerPrice = 20;

let isHolding = false;
let buildOrder;


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

  inventory = new Inventory();
  world = new World(inventory,0); //Current world
  world2 = new World(inventory,1); //The other world
  player = new Player({x: width/2, y: height/2});
  world.draw();
  loadPixels(); // EDDFA
  gui = new GUI(inventory);
  swarms = [new Swarm(), new Swarm()];
}

function draw(){
  background(51);
  updatePixels();
  world.drawComps();
  player.update();
  world.update(); //Generate resources in world 1
  world2.update(); //Generate resources in world 2
  swarms.forEach(swarm => swarm.update());
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
  else{
    changeWorld();
  }
}

function mousePressed(){
	player.shoot();

  if(isHolding && world.buildingController.isPosAvailable(buildOrder.getPos())){
    world.buildingController.createMiner(buildOrder.getPos());
    isHolding = false;
    inventory.r1 -= minerPrice;
  }
  else if(!isHolding && gui.purchaseMiner.isClicked(mouseX,mouseY) && inventory.r1 >= minerPrice){
    isHolding = true;
    buildOrder = new BuildOrder(0);
  }
}

function changeWorld(){
  let temp = world;
  world = world2;
  world2 = temp;
  console.log("Changed World");
}