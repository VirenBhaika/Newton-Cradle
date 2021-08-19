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

	bob1 = new Bob(360,380,20);
	bob2 = new Bob(400,380,20);
	bob3 = new Bob(440,380,20);
	bob4 = new Bob(480,380,20);
	bob5 = new Bob(520,380,20);

    rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-40,0);
	rope3 = new rope(bob3,roof,0,0); 
	rope4 = new rope(bob4,roof,40,0); 
	rope5 = new rope(bob5,roof,80,0);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //create ellipse shape for multiple bobs here
  Engine.update(engine);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyDown("UP_ARROW")){
       Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}