const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

function setup() {

  engine = Engine.create();
	world = engine.world;

  createCanvas(800,800);
  box = createSprite(500, 600,150,150);

  box1 = createSprite(350, 650,250,50);
  ball = Bodies.circle(300,300,20);
  World.add(world,ball);

  button = createButton("Click to blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);

  Engine.run(engine);
}

function draw() {
  background("black"); 
  rectMode(CENTER);
  ground.show();
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}