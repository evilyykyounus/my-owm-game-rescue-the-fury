

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;hospital;home
var launchingForce=100;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
Home=new home();
Hospital=new hospital();
car=new Car(200,200);
cat=new Cat();
	Engine.run(engine);

}

function draw() {

  background("brown");
 Home.display();
 Hospital.display();
 car.display();
 cat.display();
}

