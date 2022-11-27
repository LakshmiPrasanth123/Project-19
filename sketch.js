var dog;
var dogImg;
var bgImg;
var ground;
var boneImg1, boneImg2, boneImg3, boneImg4;
var food1;
var cacti1, cacti2, stone1, stone2;
var obstacleGroup;
var boneGroup;
var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var score = 0;

function preload(){
dogImg = loadImage("dog2.png");
bgImg = loadImage("bgImg.webp");
boneImg1 = loadImage("bone.png");
boneImg2 = loadImage("food2.png");
boneImg3 = loadImage("bone2.png");
boneImg4 = loadImage("bone3.png");
food1 = loadImage("food1.webp");
cacti1 = loadImage("cacti1.png");
cacti2 = loadImage("cacti2.png");
stone1 = loadImage("stone1.png");
stone2 = loadImage("stone2.png");


}

function setup(){
createCanvas(1200,1200);

dog = createSprite(1100,850,21,10);

dog.addAnimation("dogImg", dogImg);
dog.scale = 0.5;

 ground=createSprite(600,1180,1200,12);
 ground.visible = false;

 obstacleGroup = createGroup();
 boneGroup = createGroup();

}

function draw() {
  background(bgImg);
  textSize(25);
  text("SCORE: " + score, 600, 100);
  if(gamestate === PLAY)
  {
    if (keyDown("up")){
      dog.y = dog.y-8;
    
    }
    if (keyDown("left")){
      dog.x = dog.x-5;

    }
    if (keyDown("right")){
      dog.x = dog.x+5;
    }
    if (keyDown("down")){
      dog.y = dog.y+5;
      
    }

    if(boneGroup.isTouching(dog)){
      score = score+1;

    }
   // dog.velocityY = dog.velocityY+0.5;
    spawnBones();
    spawnObstacles();
    
    if(obstacleGroup.isTouching(dog)){
   gamestate = END;
    }
    
  } else if(gamestate === END)
  {
dog.velocityY = 0;
obstacleGroup.setVelocityYEach = 0;
boneGroup.setVelocityXEach = 0;

  }
 console.log(dog.y);
 dog.collide(ground);
  drawSprites()
 
}
function spawnBones(){
  if(frameCount % 80 === 0){
    var bone = createSprite(200, 920, 123, 231);
    bone.velocityX = 12 ;  
    bone.y= Math.round(random(200, 600))  
    var rand = Math.round(random(1,5));

    switch(rand){
   case 1: bone.addImage(boneImg1);
   break;
   case 2: bone.addImage(boneImg2);
   break;
   case 3: bone.addImage(boneImg3);
   break;
   case 4: bone.addImage(boneImg4);
   break;
   case 5: bone.addImage(food1);
   break;
   default:
   break;
    }
    bone.scale = 0.2;
    boneGroup.add(bone);
  }
    }

  function spawnObstacles(){
    if(frameCount % 80 === 0){
      var obstacle = createSprite(200, 920, 123, 231);
      obstacle.velocityY = 12 ;  
      obstacle.x= Math.round(random(400, 800))  
      var rand = Math.round(random(1,4));
  
      switch(rand){
     case 1: obstacle.addImage(cacti1);
     break;
     case 2: obstacle.addImage(cacti2);
     break;
     case 3: obstacle.addImage(stone1);
     break;
     case 4: obstacle.addImage(stone2);
     break;
     default:
     break;
      }
      obstacle.scale = 0.2;
      obstacleGroup.add(obstacle);
    }
}