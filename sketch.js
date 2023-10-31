
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(800,300)
  trex=createSprite(50,250,50,20)
  //create a trex sprite
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(400,290,800,20)
}

function draw(){
  background("white")
  drawSprites()

}
