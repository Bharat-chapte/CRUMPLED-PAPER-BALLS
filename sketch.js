
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball;

function setup() {
	createCanvas(800, 700);
 
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
           
	Matter.Bodies.circle(100, 20) 
	World.add(world.Bodies)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function keyPressed() {
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(circle,100, 0.5)
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



