let paddle;
let ball;
let score;
const step = 5;
let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


function setup() {
  createCanvas(width, height);
  background(51);
  paddle = new Paddle({x: 1, y: 1})
  ball = new Ball({x: width/2, y: height/2}, {x: -10, y: -3})
  score = 0;
}

function draw(){
  background(51);
  paddle.move();
  paddle.draw();
  ball.move();
  ball.draw();
  fill(255);
  textSize(72);
  text(score, width/2, 200);
}

function keyPressed(){
  if(keyCode === 87){
    paddle.direction = -1;
  }
  else if(keyCode === 83){
    paddle.direction = 1;
  }
}

function keyReleased(){
  paddle.direction = 0;
}
