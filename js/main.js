"use strict";


let gameController;
let world;
let world2;
let theme_world1;
let theme_world2;
let theme1dur;
let theme2dur;
let tempWorld;
let player;
let enemyController;
let sprite;
let inventory;
let gui;

let swarms;

let canvas;
let bg;
let fTheme = true;

const SCALE = 40;
const enemyLimit = 10;
const minerPrice = 15;
const turretPrice = 100;

let isHolding = false;
let buildOrder;

let swarmCount = 10;
let swarmSpawnChance = 0.0013;

let isShooting = false;


let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function preload(){
  sprite = new Sprites();
  soundFormats('mp3', 'ogg');
  theme_world1 = loadSound('https://dl.dropboxusercontent.com/s/m8tc36q6o2c72y7/alone.mp3');
  theme_world2 = loadSound('https://dl.dropboxusercontent.com/s/ptmzficprqpmq0k/strangeplace.mp3');
  theme1dur = theme_world1.duration();
  theme2dur = theme_world2.duration();
}


function setup() {
  createCanvas(width, height);
  background(51);
  cursor(CROSS);
  angleMode(DEGREES);

  inventory = new Inventory();
  world = new World(inventory,0); //Current world
  world2 = new World(inventory,1); //The other world
  world.initializeSwarmController();
  world2.initializeSwarmController();
  player = new Player({x: width/2, y: height/2});
  world.draw();
  loadPixels(); // EDDFA
  gui = new GUI(inventory);
  swarms = [new Swarm(), new Swarm()];
  gameController = new GameController();
  theme_world1.setVolume(0.1);
  theme_world1.loop();
}

function draw(){
  if(gameController.checkGameStatus()){
    gui.drawWinScreen();
    return;
  }
  else if(gameController.checkGameLost()){
    gui.drawEndScreen();
    return;
  }

  background(51);
  updatePixels();
  world.drawComps();
  player.update();
  world.update(); //Generate resources in world 1
  world2.update(); //Generate resources in world 2
  //Drawing buildOrder
  if(isHolding){
    buildOrder.draw();
  }

  if(player.checkPortalCollision(world.portalPos)){
      player.pos = {x: world.portalPos.x-10, y: world.portalPos.y+80};
      changeWorld();
  }

  if(isShooting){
    player.shoot();
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

  if(keyCode === 81){
    if(!isHolding && inventory.checkResources(minerPrice)){
        isHolding = true;
        buildOrder = new BuildOrder(0);
    }
    else{
      buildOrder = null;
      isHolding = false;
    }
  }
  else if(keyCode === 69){
    if(!isHolding && inventory.checkResources(turretPrice)){
        isHolding = true;
        buildOrder = new BuildOrder(1);
    }
    else{
      buildOrder = null;
      isHolding = false;
    }
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

function mousePressed(){
	isShooting = true;

  if(isHolding && world.buildingController.isPosAvailable(buildOrder.getPos(),buildOrder.type)){
    if(buildOrder.type === 0){
      world.buildingController.createMiner(buildOrder.getPos());
      inventory.decreaseResources(minerPrice);
    }
    else{
      world.buildingController.createTurret(buildOrder.getPos(),world.type);
      inventory.decreaseResources(turretPrice);
    }
    isHolding = false;
    
  }
  else if(!isHolding && gui.purchaseMiner.isClicked(mouseX,mouseY) && inventory.checkResources(minerPrice)){
    isHolding = true;
    buildOrder = new BuildOrder(0);
  }
  else if(!isHolding && gui.purchaseTurret.isClicked(mouseX,mouseY) && inventory.checkResources(turretPrice)){
    isHolding = true;
    buildOrder = new BuildOrder(1);
  }
}

function mouseReleased() {
    isShooting = false;
}

function changeWorld(){
  let temp = world;
  world = world2;
  world2 = temp;
  world.draw();
  loadPixels();
  console.log("Changed World");
}
