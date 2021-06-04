const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var dustbinImg;

function preload() {
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(1400, 463, 50, 200);
	dustbin2 = new Dustbin(1200, 463, 50, 200);
	dustbin3 = new Dustbin(1300, 583, 260, 50);
	ground = new Ground(800, 580, 1600, 50);
	paper = new Paper(65, 540, 75);

}


function draw() {
	Engine.update(engine);
	background("white");
	fill("yellow");
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,1300,430,200,238);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 1350, y: -1500 });
	}
}

