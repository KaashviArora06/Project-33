Engine = Matter.Engine;
World = Matter.World;
Events = Matter.Events;
Bodies = Matter.Bodies;

var bgImg;
var snow = [];
function preload(){

  bgImg = loadImage("snow2.jpg");

}

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {

  background(bgImg);  
   
  if(frameCount%40 == 0){

    snow.push(new Snow(random(10,790),random(0,10),10))
  }

  for(var a = 0; a < snow.length; a++){
    snow[a].display();
  }

}