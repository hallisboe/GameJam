"use strict";



let world;
let player;
let playerVel = {x: 0,y: 1};
const SCALE = 50;

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


function setup() {
  createCanvas(width, height);
  background(51);

  world = new World();
  player = new Player({x: width/2, y: height/2});
}

function draw(){
  background(51);
  world.draw();

  player.update(playerVel);
}

function keyPressed(){
  // Add player controls
  if(keyCode === 87){
  	playerVel.y = -1;
  }
  else if(keyCode === 83){
  	playerVel.y = 1;
  }
  else if(keyCode === 65){
  	playerVel.x = 1;
  }
  else if(keyCode === 67){
  	playerVel.x = -1;
  }
}

function keyReleased(){
  // Stop player
  if(keyCode === 87 || keyCode === 83){
  	playerVel.y = 0;
  }
  else if(keyCode === 65 || keyCode === 67){
  	playerVel.x = 0;
  }
}




