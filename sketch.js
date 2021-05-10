
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var bground, backgroundimg;
var pin1;
var bowlingball;
var gameState = "PLAY";
var bb1;

function preload() {
  backgroundimg = loadImage("images/bowling track.jpg");
}

function setup() {

  createCanvas(1279, 609);


  engine = Engine.create();
  world = engine.world;

  console.log(pin1);
  ground1 = new gd(660, 110, 280, 5)
  ground2 = new gd(660, 170, 200, 5)
  ground3 = new gd(660, 230, 100, 5)
  ground4 = new gd(660, 290, 50, 5)

  bowlingball = new ball(650, 500, 50,50);
 // bowlingball.scale = 0.5;

  console.log(ground1.body.position.x);
  console.log(ground1.body.position.y);

  pin1 = new Pins(620, 70, 30, 60, PI/2);
  pin2 = new Pins(640, 70, 30, 60, PI/2);

  pin3 = new Pins(640, 70, 30, 60, PI/2);
  pin4 = new Pins(680, 70, 30, 60, PI/2);
  pin5 = new Pins(635, 130, 30, 60, PI/2);
  pin6 = new Pins(645, 130, 30, 60, PI/2);
  pin7 = new Pins(655, 130, 30, 60, PI/2);
  pin8 = new Pins(640, 210, 30, 60, PI/2);
  pin9 = new Pins(650, 210, 30, 60, PI/2);
  pin10 = new Pins(645, 250, 30, 60, PI/2);

  //Slingshot1 = new Slingshot(bowlingball.body, { x: 650, y: 500 });

  

}


function draw() {

  background("black");

  Engine.update(engine);

  bowlingball.display();


  
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();

  //Slingshot1.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  

  //ground1.display()
 


  /*rectMode(CENTER) 
 
   rect(ground1.position.x,ground1.position.y,170,3) 
   rectMode(CENTER) 
 
   rect(ground2.position.x,ground2.position.y,100,3) 
   rectMode(CENTER) 
 
   rect(ground3.position.x,ground3.position.y,80,3) 
 
   
   rectMode(CENTER) 
 
   rect(ground4.position.x,ground4.position.y,50,3) */


}

function keyPressed() {

  if (keyCode === UP_ARROW) {

    Matter.body.applyForce(bowlingball.body, bowlingball.body.position, { x: -100, y: -100 })
  }
}

function mouseDragged() {
  if (gameState === "PLAY") {
    Matter.Body.setPosition(bowlingball.body, { x: mouseX, y: mouseY });
    //  Matter.body.applyForce(bowlingball.body, bowlingball.body.position, {x: -100, y:-100})
  }
}


function mouseReleased() {
  Slingshot1.fly();
  gameState = "released"
  //Matter.body.setStatic(pin1,false)
  Matter.Body.setVelocity({ x: 0, y: -14 })
  Matter.Body.setAngularVelocity(bowlingBall.body, Math.PI / 5)
}

