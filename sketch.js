const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,box1,box2,box3,box4,box5,Ground,pig1,pig2,log1,log2,log3,log4,angrybird1;

function setup() {
  createCanvas(1200,400);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  Ground = new ground(600,400,1200,20);
  pig1 = new pig(810,350);
log1 = new log(810,260,300,PI/2);
box3 =new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig2 = new pig(810,220);
log2 = new log(810,180,300,PI/2);
box5 = new Box(810,160,70,70);
log3 = new log(760,120,150,PI/7);
log4 = new log(870,120,150,-PI/7);
angrybird1= new angrybird(100,100);
}

function draw() {
  background("black");
  rectMode(CENTER);
  Engine.update(myengine);
  box1.display();                                                                                                                                                                                                                                                                                                                             
  box2.display();
Ground.display();
pig1.display();
log1.display();
log2.display();
pig2.display();
box3.display();
box4.display();
log3.display();
log4.display();
box5.display();
angrybird1.display();
console.log(box2.body.angle);
}
