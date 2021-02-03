const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,slingshot;

function preload(){
    polygon_image=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    
    ground = new Ground(600,height,1200,20)
    ground1 = new Ground(600,300,300,10)
   ground2=new Ground(990,180,200,10)

   box1=new Box(480,250,30,50)
   box2=new Box(510,250,30,50)
   box3=new Box(540,250,30,50)
   box4=new Box(570,250,30,50)
   box5=new Box(600,250,30,50)
   box6=new Box(630,250,30,50)
   box7=new Box(660,250,30,50)
   box8=new Box(690,250,30,50)
   box9=new Box(720,250,30,50)

   box10=new Box(510,200,30,50)
   box11=new Box(540,200,30,50)
   box12=new Box(570,200,30,50)
   box13=new Box(600,200,30,50)
   box14=new Box(630,200,30,50)
   box15=new Box(660,200,30,50)
   box16=new Box(690,200,30,50)

   box17=new Box(540,150,30,50)
   box18=new Box(570,150,30,50)
   box19=new Box(600,150,30,50)
   box20=new Box(630,150,30,50)
   box21=new Box(660,150,30,50)

   box22=new Box(570,100,30,50)
   box23=new Box(600,100,30,50)
   box24=new Box(630,100,30,50)

   box25=new Box(910,150,20,40)
   box26=new Box(930,100,20,40)
   box27=new Box(950,100,20,40)
   box28=new Box(970,100,20,40)
   box29=new Box(990,100,20,40)
   box30=new Box(1010,100,20,40)
   box31=new Box(1030,100,20,40)
   box32=new Box(1050,100,20,40)
   box33=new Box(1070,150,20,40)

   box34=new Box(930,80,20,40)
   box35=new Box(950,80,20,40)
   box36=new Box(970,80,20,40)
   box37=new Box(990,80,20,40)
   box38=new Box(1010,80,20,40)
   box39=new Box(1030,80,20,40)
   box40=new Box(1050,80,20,40)

   box41=new Box(950,50,20,40)
   box42=new Box(970,50,20,40)
   box43=new Box(990,50,20,40)
   box44=new Box(1010,50,20,40)
   box45=new Box(1030,50,20,40)

   box46=new Box(970,10,20,40)
   box47=new Box(990,10,20,40)
   box48=new Box(1010,10,20,40)

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   slingshot = new Slingshot (this.polygon,{x:100,y:200})
}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    ground1.display()
    ground2.display()
    fill ("lightblue")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    fill ("lightgreen")
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    fill ("red")
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    fill ("pink")
    box22.display()
    box23.display()
    box24.display()
   fill ("indigo")
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()
    box33.display()
fill ("cyan")
    box34.display()
    box35.display()
    box36.display()
    box37.display()
    box38.display()
    box39.display()
    box40.display()
fill ("gold")
   box41.display()
   box42.display()
   box43.display()
   box44.display()
   box45.display()
   fill ("purple")
   box46.display()
   box47.display()
   box48.display()


    

    imageMode (CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
   if (keyCode===32) {
    slingshot.attach(polygon)   
   } 
}