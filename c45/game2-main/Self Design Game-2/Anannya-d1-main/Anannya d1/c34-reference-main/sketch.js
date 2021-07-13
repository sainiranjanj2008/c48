const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var backgroundImage,playerImage,player,coinsImage,dogImage,policeImage,coingroup,monstergroup,score=0,gameState=PLAY;
var engine,world,coin,monsterSprite,PLAY=1,END=0,lives=3,invisibleground,form;
function preload(){
backgroundImage=loadImage("Pictures/background.jpg");
playerImage=loadImage("Pictures/jake.png");
coinsImage=loadImage("Pictures/coins.jpg");
dogImage=loadImage("Pictures/dog.png");
policeImage=loadImage("Pictures/police.jpg");

}
function setup(){
  createCanvas(800,800);
  engine=Engine.create();
   world=engine.world;
  player=createSprite(200,300,30,20);
  player.addImage(playerImage);
  coingroup=new Group();
  monstergroup=new Group();
  invisibleground=createSprite(0,1000,2000,10);
  invisibleground.x=invisibleground.width/2;
  invisibleground.visible=false;
  form=new Form();
}
function draw(){
  background(backgroundImage)
  Engine.update(engine);
  coins();
    monster();
    scores();
  if(gameState===PLAY){
    
    player.x=mouseX;
    player.y=mouseY;
    text("Score:"+score,900,30);
    text("Lives:"+lives,900,45);
    if(monstergroup.isTouching(player)){
      lives=lives-1;
      monsterGroup[0].destroy();
    
      if(lives===0){
      gameState===END
      }
    }}

    else if(gameState===END){
      player.velocityX=0;
      player.velocitY=0;
      monsterGroup.setVelocityXEach(0);
      monstergroup.setVelocityYEach(0);
    }
    

  
drawSprites();


}
function coins(){

if(frameCount%10===0){
  coin=createSprite(400,500,20,20);
  coin.x=Math.round(random(30,800));
  coin.y=Math.round(random(30,800));
  coin.addImage(coinsImage);
  coin.velocitY=5;
  coin.lifetime=170;
  coingroup.add(coin);
  coin.scale=0.2
}

}

function monster(){
if(frameCount%70===0){
monsterSprite=createSprite(500,600,20,20);
var rand=Math.round(random(1,2));
switch(rand){
  case 1:
  monsterSprite.addImage(dogImage);
  break;
  
  case 2:
  monsterSprite.addImage(policeImage);
  break;
}
monsterSprite.velocityX=5;
monsterSprite.lifetime=200;
monsterSprite.scale=0.3;
monstergroup.add(monsterSprite);
monsterSprite.x=Math.round(random(30,800));
monsterSprite.y=Math.round(random(30,800));
}

}

function scores(){

if (coingroup.isTouching(player)){   
score=score+1;


}




}

























