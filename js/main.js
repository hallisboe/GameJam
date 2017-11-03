let world;


const SCALE = 50;
co

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
}

function draw(){
  background(51);
  world.draw();
}

function keyPressed(){
  // Add player controls
}

function keyReleased(){
  // Stop player
}




