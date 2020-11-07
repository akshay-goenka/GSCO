var car,speed,weight,car2,car3,w1,w2,wall,wall1,wall2



function setup() {
  createCanvas(800,400);
  
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(25,60,30,30);
  car.velocityX=speed;
  car.shapeColor=color(225)


  car2 = createSprite(25,180,30,30);
  car2.velocityX=speed;
  car2.shapeColor=color(225)

    car3 = createSprite(25,300,30,30);
  car3.velocityX=speed;
  car3.shapeColor=color(225)


wall=createSprite(750,70,15,80)
wall.shapeColor=color(80,80,80)


wall2=createSprite(750,190,15,80)
wall2.shapeColor=color(80,80,80)


wall3=createSprite(750,300,15,80)
wall3.shapeColor=color(80,80,80)


w1=createSprite(200,130,1600,5)
w2=createSprite(200,250,1600,5)

}

function draw() {
  background("black")

  if(wall.x-car<(car.width+wall.width)/2)
{
car.velocityX=0
var deforestion=0.5*speed*weigth*speed/22509
if(deforestion>180)
{
car.shapeColor=color(255,0,0)
}

if(deforestion<180 &&deforestion>100 )
{
car.shapeColor=color(230,230,0)
}

if(deforestion<100)
{
car.shapeColor=color(0,255,0)
}

}

if(wall2.x-car2<(car2.width+wall2.width)/2)
{
car2.velocityX=0
var deforestion2=0.11*speed*weigth*speed/22509
if(deforestion2>180)
{
car2.shapeColor=color(255,0,0)
}

if(deforestion2<180 &&deforestion2>100 )
{
car2.shapeColor=color(230,230,0)
}

if(deforestion2<100)
{
car2.shapeColor=color(0,255,0)
}

}

if(wall3.x-car3<(car3.width+wall3.width)/2)
{
car3.velocityX=0
var deforestion4=0.84*speed*weigth*speed/22509
if(deforestion4>180)
{
car3.shapeColor=color(255,0,0)
}

if(deforestion4<180 &&deforestion4>100 )
{
car3.shapeColor=color(230,230,0)
}

if(deforestion4<100)
{
car3.shapeColor=color(0,255,0)
}

}


























  drawSprites();
}