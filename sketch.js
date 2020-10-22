const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var engine,world;
var stage=0;
var ballIMG,brickIMG,brick;
var paddle,paddleIMG;
 
var form;
var canvas;
var ball;
var nextStage;
var brick1;
var brick2;
var brick3;
var brick4;


function preload(){
	ballIMG=loadImage("ball.png")
    brickIMG=loadImage("brick.png")
    paddleIMG=loadImage("paddle.png")
}
function setup(){
 //   engine = Engine.create();
   // world = engine.world;
canvas=createCanvas(displayWidth-30,displayHeight-30)
form= new Form();

  ball=createSprite(580,565,40,40);
   
  ball.addImage(ballIMG);
  ball.scale=0.16;
  ball.visible=false;
  paddle=createSprite(600,600,20,20);
  paddle.addImage(paddleIMG);
   paddle.scale=0.2;
paddle.visible=false
   brick1=new Group();
   brick2=new Group();
   brick3=new Group();
   brick4=new Group();
}





function draw(){
    
background("pink")
form.display();
//nextStage.display()
console.log(stage)
if(stage===0){
    form.display();
    
}else if(stage===2){
  var rand=random(1,5);
  if(World.frameCount%80===0){
    if(rand===1){
      spawnB1();
    }else if(rand===2){
      spawnB2();
    }else if(rand===3){
      spawnB3();
    }else{
      spawnB4();
    }
  }
    
  }
  
 


  drawSprites();

}




function spawnB1(){
  var b1=createSprite(randomNumber(100,800),randomNumber(500,800),10,10);
  b1.addImage(brickIMG);
  b1.velocityX=3
  b1.lifetime=150;
  brick1.add(b1)
}
function spawnB2(){
  var b2=createSprite(randomNumber(200,750),randomNumber(500,800),10,10);
  b2.addImage(brickIMG);
  b2.velocityX=3
  b2.lifetime=150;
  brick2.add(b2)
}
   function spawnB3(){
  var b3=createSprite(randomNumber(120,900),randomNumber(500,800),10,10);
  b3.addImage(brickIMG);
  b3.velocityX=3
  b3.lifetime=150;
  b3.add(b3)
}
  function spawnB4(){
  var b4=createSprite(randomNumber(260,500),randomNumber(500,800),10,10);
  b4.addImage(brickIMG);
  b4.velocityX=3
  b4.lifetime=150;
  b4.add(b4)
}
  



