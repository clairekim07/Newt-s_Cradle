
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var Pen1, Pen2, Pen3, Pen4, Pen5;
var world,sling,sling2,rsling3,sling4,sling5;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	penDiameter=40;

	roof = new Roof(width/2,height/4,width/7,20);

	startPendulumPositionX=width/2;
	startPendulumPositionY=height/4+500;

	Pen1 = new Pendulum (startPendulumPositionX-penDiameter*2,startPendulumPositionY,penDiameter);
	Pen2 = new Pendulum (startPendulumPositionX-penDiameter,startPendulumPositionY,penDiameter);
	Pen3 = new Pendulum (startPendulumPositionX,startPendulumPositionY,penDiameter);
	Pen4 = new Pendulum (startPendulumPositionX+penDiameter,startPendulumPositionY,penDiameter);
	Pen5 = new Pendulum (startPendulumPositionX+penDiameter*2,startPendulumPositionY,penDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  sling=new Sling(Pen1.body,roof.body,-penDiameter*2, 0)
	  sling2=new Sling(Pen2.body,roof.body,-penDiameter*1, 0)
	  sling3=new Sling(Pen3.body,roof.body,0, 0)
	  sling4=new Sling(Pen4.body,roof.body,penDiameter*1, 0)
	  sling5=new Sling(Pen5.body,roof.body,penDiameter*2, 0)

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("skyblue");
  
	roof.display();
	Pen1.display();
	Pen2.display();
	Pen3.display();
	Pen4.display();
	Pen5.display();
	sling2.display();
	sling.display();
	sling4.display();
	sling3.display();
	
	sling5.display();
	

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Pen1.body,Pen1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  penBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(penBodyPosition.x, penBodyPosition.y, roofBodyX,roofBodyY);
}

function mouseDragged(){
	Matter.Body.setPosition(Pen1.body,{ x:mouseX , y:mouseY});
}

