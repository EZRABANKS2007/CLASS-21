var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400,20,30,40);
  rect2=createSprite(500,20,30,40);
  rect1.velocityX=-9;
  rect2.velocityX=+9;
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(rect1,rect2);
  
if(isTouching(movingRect,fixedRect)){
  text("VISUAL CODE STUDIO ",200,200);
}
  drawSprites();
}
