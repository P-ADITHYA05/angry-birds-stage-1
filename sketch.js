const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);


    box1 = new Box(730,350,50,50);
    pig1 = new Pig(800,350);
    box2 = new Box(870,350,50,50);
    log1 = new Log(800,310,200,PI/2);

    box3 = new Box(730,270,50,50);
    pig2 = new Pig(800,270);
    box4 = new Box(870,270,50,50);
    log2 = new Log(800,230,200,PI/2);

    box5 = new Box(800,190,50,50);
    log3 = new Log(760,180,150,PI/7);
    log4 = new Log(840,180,150,-PI/7);

    bird = new Bird(70,70);

//degrees
//Radians PI= 180 DEGREE
//90 degree = PI/2
   
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}