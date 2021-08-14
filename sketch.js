const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

//Create multiple bobs, mulitple ropes variable here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution:0.8
	}

	bob1 = Bodies.circle(200,50,10,ball_options);
	World.add(world,bob1);

	con = Matter.Constraint.create({
		pointA:{x:200,y:30},
        bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:1
	});
	World.add(world,con);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
Engine.update(engine);
ellipse(bob1.position.x,bob1.position.y,10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyDown("UP_ARROW")){

	}
}