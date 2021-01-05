var car, wall;
var speed, weight;





function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = rand(55,90);
  weight = rand(400, 1500);



}

function draw() {
  background(255,255,255);  
  
  car = createSprite(50, 200, 50, 50)
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
  
  car.velocityX = rand(Number);
  if(velocityX=>180){
     car = ("red")
}
 else{
   car = ("white");
 }
  drawSprites();
}