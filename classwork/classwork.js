/*
  Classwork
*/
var ballX = 0;
var ballY = 0;
var speed = 8;
var speed2 = 18;
var press = "yellow";

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){


  background("white");
  noStroke();
  fill(press);
  ellipse(ballX, height/2, 50,50);

    if (ballX >= width){
      speed = -8;
    } else  if (ballX <= 0){
        speed = 8;
      }
  ballX = ballX + speed;

  fill(press);
  ellipse(width/2,ballY, 50,50);
  if (ballY >= height){
   speed2 = -5;
  } else  if (ballY <= 0){
    speed2 = 5;
    }
  ballY = ballY + speed2;

  if(mouseIsPressed){
  press = "red";
  } else{
    press = "yellow"
    }
}
