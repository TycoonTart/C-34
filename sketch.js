const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground1


function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(600,800,2700,20);
    cement1=new cement(900,100,70,70)
    cement2=new cement(900,100,70,70)
    cement3=new cement(900,100,70,70)
    cement4=new cement(900,100,70,70)
    cement5=new cement(900,100,70,70)
    cement6=new cement(900,100,70,70)
    cement7=new cement(800,100,70,70)
    cement8=new cement(800,100,70,70)
    cement9=new cement(800,100,70,70)
    cement10=new cement(800,100,70,70)
    cement11=new cement(800,100,70,70)
    cement12=new cement(800,100,70,70)
    cement13=new cement(700,100,70,70)
    cement14=new cement(700,100,70,70)
    cement15=new cement(700,100,70,70)
    cement16=new cement(700,100,70,70)
    cement17=new cement(700,100,70,70)
    cement18=new cement(700,100,70,70)
    cement19=new cement(700,100,70,70)
    cement20=new cement(700,100,70,70)
    ball1=new ball(200,200,80,80)
    sling1=new Slingshot(ball1.body,{x:500,y:50})


    
    


   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();

    cement1.display()
    cement2.display()
    cement3.display()
    cement4.display()
    cement5.display()
    cement6.display()
    cement7.display()
    cement8.display()
    cement9.display()
    cement10.display()
    cement11.display()
    cement12.display()
    cement13.display()
    cement14.display()
    cement15.display()
    cement16.display()
    cement17.display()
    cement18.display()
    cement19.display()
    cement20.display()
    ball1.display()
    sling1.display()

}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}