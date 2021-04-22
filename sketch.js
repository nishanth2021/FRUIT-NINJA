  var PLAY=1;
  var END=0;
  var gameState=1;
  var sword,fruit1,fruit2,fruit3,fruit4,monster;
  var knifeImage,monsterImage,gameoverImage;
  var fruitGroup,enemyGruop;
  var gameover;
  var score=0;

  function preload(){
    fruit1 = loadImage("fruit1.png");
    fruit2 = loadImage("fruit2.png");
    fruit3 = loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png");
    monsterImage =loadImage("alien1.png");
    knifeImage = loadImage("knife.png");
    gameoverImage = loadImage("gameover.png")
  }
  function setup(){
    createCanvas(400,400);
    knife = createSprite(40,200,20,20);  
    knife.scale=0.7;
    knife.addImage(knifeImage);
    fruitGroup=createGroup();
    enemyGroup=createGroup();
  }
  function draw(){
    background("pink");

     if(gameState === PLAY){

    Enemy();
    fruits();

    knife.y=World.mouseY;
    knife.x=World.mouseX;   

    if(fruitGroup.isTouching(knife))
    {
      fruitGroup.destroyEach();
      score=score+1;
    }
      else if(enemyGroup.isTouching(knife)){

          gameState = END;

      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      knife.addImage(gameoverImage);
      knife.x=200;
      knife.y=200;
    }
    }
    drawSprites();
    text(" score = "+score,330,30);

  }



  function fruits(){

   if(World.frameCount%80===0){ 
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
  //fruit.debud=true;
    r=Math.round(random(1,4)); 
    if(r ==1 ) {
    fruit.addImage(fruit1);
    } else if (r == 2){
      fruit.addImage(fruit2)
      } else if (r == 3){
      fruit.addImage(fruit3)
        } else if (r == 4){
      fruit.addImage(fruit4)
        }
     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-7;
     fruit.setlifetime=100;

     fruitGroup.add(fruit);
  }
  }

  function Enemy(){

   if(World.frameCount%200===0){ 
   monster=createSprite(400,200,20,20);
   monster.addImage("moving",monsterImage);
   monster.y=Math.round(random(100,300)); 
   monster.velocityX=-8;
   monster.setlifetime=50;

   enemyGroup.add(monster);  
  }
  }