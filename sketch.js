
var trex ,trex_running,trex_img;
function preload(){
trex_img=loadAnimation("trex1.png","trex3.png","trex4.png")
}
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20,190,50,55)
trex.addAnimation("trex_running",trex_img)
}

function draw(){
  background("white")
  drawSprites();
}

