const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var roof, canvas;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  canvas = createCanvas(900,700);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  roof = new Roof(450, 200, 400, 20);

  bob1 = new Bob(330, 500, 30);
  bob2 = new Bob(390, 500, 30);
  bob3 = new Bob(450, 500, 30);
  bob4 = new Bob(510, 500, 30);
  bob5 = new Bob(570, 500, 30);

  rope1 = new Rope(bob1.body, {x: 330, y: 200});
  rope2 = new Rope(bob2.body, {x: 390, y: 200});
  rope3 = new Rope(bob3.body, {x: 450, y: 200});
  rope4 = new Rope(bob4.body, {x: 510, y: 200});
  rope5 = new Rope(bob5.body, {x: 570, y: 200});


  
}

function draw() {
  background(0);
  Engine.update(engine);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
}





