const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
function setup() {
    createCanvas(600, 600);
    engine=Engine.create();
    world = engine.world ;  
    pen = new Particle(200,200,40,50);
    chain = new Chain(pen.body,{x:200,y:50});
}
 
function draw() {
    background("white");
    Engine.update(engine);
    pen.display();
    chain.display();
}
 
function mouseDragged(){
    Matter.Body.setPosition(pen.body , { x: mouseX , y: mouseY});
}

