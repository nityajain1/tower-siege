const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var box1,box2,box3;
var slingShot;

function preload() {
  
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand  = new Ground(800,380,350,20);
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background(255);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY);
    strokeWeight(4);
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    slingShot.display();
 }
 function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    slingShot.fly();
}
