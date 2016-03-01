/*
  Homework
*/

//declare your variables
var speed = 1/4;
var i = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(30);

  //set things up
}

function draw(){
  background("red");
  noStroke();
  fill("white");

  drawPinWheel(width/2,height/2);
  drawPinWheel(width/4,height/2);
  drawPinWheel(width/4,height/4);

i = i + speed;

  var c = color("rgba(0, 0, 255, .8)");
  fill(c);

  triangle(width/2,height/2,0,mouseY+i,width,mouseY+i);
  triangle(width/2,height/2,0,-mouseY+height-i,width,-mouseY+height-i);
  triangle(width/2,height/2,mouseY*2+i,0,mouseY*2+i,height);
  triangle(width/2,height/2,-mouseY*2+width-i,0,-mouseY*2+width-i,height);

  stroke(0);
  strokeWeight(150);
  noFill();
  rect(0,0,width,height);

  if(mouseIsPressed){
  speed = 1/7;
    }else{
      speed = 1/4;
      c = color("rgba(0, 0, 255, .8)");
      }
}
function drawPinWheel(x,y){
  for(a = 0; a < 6; a = a+1){
    arc(x,y,100,100,a+i,a+i+PI/10);
  }
}
