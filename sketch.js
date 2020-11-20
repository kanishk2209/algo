var fixedRect, movingRect;
var box1, box2;

function setup() {

  createCanvas(600,400);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,50)
  movingRect.debug = true;
  box1 = createSprite(100,100,50,80)
  box1.velocityY = 3
  box2 = createSprite(100,400,80,50)
  box2.velocityY = -3
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(box2.y - box1.y);

  if(isTouching(movingRect,box2)){
    movingRect.shapeColor = "red";
    box2.shapeColor = "yellow"
  }
  else {
    movingRect.shapeColor = "blue";
    box2.shapeColor = "blue";
  }
  
  bounce(box1,box2);

  drawSprites();
} 