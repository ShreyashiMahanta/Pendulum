const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,string;
var ballImg,bar,body;

function preload(){

    ballImg = loadImage("pendulum1.png");
}

function setup() {
     createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

    bar = createSprite(180,40,110,20);
    bar.shapeColor = rgb(137, 0, 0);
  
    ball = createSprite(183,170,10,10);
    ball.addImage(ballImg);
    ball.scale = 0.18;
    World.add(world,ball);


    var options = {
        bodyA : ball,
        bodyB : ball,
        stiffness: 0.004,
        length : 100
      }
      string = Constraint.create(options);
      World.add(world,string);
      
    }

function draw(){

    background(0);
   // Engine.update(engine);
   strokeWeight(8);
   stroke(152, 255, 152);
   line(180,50,ball.position.x,ball.position.y);
   ball.position.x = mouseX;
   ball.position.y = mouseY;
   drawSprites();
}



