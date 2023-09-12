var ship, sea;
var shipImg, seaImg;  

function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg =loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(170,200,20,50);
 ship.addAnimation("ship", shipImg);
  ship.scale = 0.3
  sea = createSprite(250, 200, 300, 50);
 sea.addImage("sea",seaImg);
  sea.scale = 0.3
}

function draw() {
 background("blue");
 if(sea.x <0) {
sea.x=sea.width/2;
 }
 drawSprites();
}