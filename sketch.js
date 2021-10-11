var bg;
var Sol,Solimg;
var TERimg1,TERimg2,TERimg3;
var TERG1; TERG2, TERG3;
var bulletimg, fireimg;
var bulletGroup;

function preload(){
bg = loadImage("soldier game bg.jpg");
Solimg = loadImage("Apna soldier.png");
TERimg1 = loadImage("TER 1 (sol game).png");
TERimg2 = loadImage("TER 2 (sol game).png");
TERimg3 = loadImage("TER 3 (sol game).png");
bulletimg = loadImage("Bullet.png");
}




function setup() {
  createCanvas(800,400);
  Sol = createSprite(50, 200, 50, 50);
  Sol.addImage(Solimg);
  Sol.scale = 0.5;
  TERG1 = createGroup();
  TERG2 = createGroup();
  TERG3 = createGroup();
  bulletGroup = createGroup();
}

function draw() {
  background(bg); 
  Sol.y = World.mouseY;
  if(keyDown("space")){
    shoot();
  }
  if(bulletGroup.isTouching(TERgroup)){
   TERgroup.destroyEach();
   bulletGroup.destroyEach();
  }
  TERG1();
  TERG2();
  TERG3();
  drawSprites();
}

function TER1() {
  if(frameCount % 60 === 0){
  var TER1 = createSprite(750, 200, 50, 50);
  TER1.y = Math.round(random(200, 300));
  TER1.velocityX = -5;
  TER1.addImage(TERimg1);
  
  //TER.debug = true;
  TER1.setCollider("rectangle", 0, 0, 30, 160);
  TER1.lifetime = 250;

TERG1.add(TER1);
}
}

function TER2() {
  if(frameCount % 90 === 0){
  var TER2 = createSprite(750, 200, 50, 50);
  TER2.y = Math.round(random(200, 300));
  TER2.velocityX = -5;
  TER2.addImage(TERimg2);
  
  //TER.debug = true;
  TER2.setCollider("rectangle", 0, 0, 30, 160);
  TER2.lifetime = 250;

TERG2.add(TER2);
}
}

function TER3() {
  if(frameCount % 120 === 0){
  var TER3 = createSprite(750, 200, 50, 50);
  TER3.y = Math.round(random(200, 300));
  TER3.velocityX = -5;
  TER3.addImage(TERimg3);
  
  //TER.debug = true;
  TER3.setCollider("rectangle", 0, 0, 30, 160);
  TER3.lifetime = 250;

TERG3.add(TER3);
}
}

function shoot() {
var bullets = createSprite(Sol.x, Sol.y, 10, 10);
bullets.velocityX = 5;
bullets.addImage(bulletimg);
bullets.scale = 0.1;
bulletGroup.add(bullets);
//bullets.debug = true;
}