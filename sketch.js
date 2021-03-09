const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var mouseX = 0;
//var mouseY = 0;
var trial;

function preload() {}

function setup() {
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 600, 800, 20);

  hammer = new Hammer();

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  hammer.body.position.x = World.mouseX;
  hammer.body.position.y = World.mouseY;
  //drawSprites();
  ground.display();
  hammer.display();
}
