const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //

    var object_options ={
        isStatic: true
    }
   ground= Bodies.rectangle(0,390,800,20,object_options);
    World.add(world,ground);




  //  
var ball_options={
  restitution: 1.0

}
ball=Bodies.circle(150,60,20,ball_options);
    World.add(world,ball);


   // console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS)
    ellipse (ball.position.x,ball.position.y,20,20);
}
