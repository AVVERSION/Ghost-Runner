var tower,towerimg
var ghost,ghostimg
var door, doorimg
var climber,climberimg
var invBlock
var play=1
var end=0
var gameState=1
var spooky,spookySound
function preload(){
  towerimg=loadImage("tower.png")
  ghostimg=loadImage("ghost-standing.png")
  doorimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
  spookySound=loadSound("spooky.wav")
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,50,50)
  tower.addImage(towerimg)
  ghost=createSprite(300,300,50,50)
  ghost.addImage(ghostimg)
  ghost.scale=0.5
  doorg=new Group();
  climberg=new Group();
  invBlockg=new Group();
  tower.velocityY=2;
  spookySound.loop();
}



function draw(){
  background("red")
  if (gameState===play){
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-3
  
  }
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3}
    if (keyDown("space")){
    ghost.velocityY=-10}
    
    ghost.velocityY = ghost.velocityY + 0.8
  
  if (tower.y>400){
    tower.y=300;
  }
 
  spawnDoors();
  if (ghost.y>600 || ghost.isTouching(invBlockg)){
    gameState=end
    ghost.destroy();
    

  }
    if (ghost.isTouching(climberg)){
      ghost.velocityY=0
    }
  drawSprites();  
  }
  
if (gameState===end){
  stroke("white")
  fill("blue")
  textSize(50)
  text("GameOver",200,300)
  
}

}
function spawnDoors(){
  if (frameCount%240===0){
  door=createSprite(50,50,25,25);
  door.addImage(doorimg)
  door.velocityY=1
  climber=createSprite(50,100,25,25);
  climber.addImage(climberimg)
  climber.velocityY=1
  door.x=Math.round(random(120,400))
  climber.x=door.x
    invBlock=createSprite(50,100,25,25);
  //door.addImage(doorimg)
  invBlock.velocityY=1
    invBlock.width=climber.width
    invBlock.height=2
    invBlock.x=climber.x
    door.lifetime=800
    climber.lifetime=800
    invBlock.lifetime=800
    doorg.add(door)
    climberg.add(climber)
    invBlockg.add(invBlock)
    invBlock.visible=false
    
}}