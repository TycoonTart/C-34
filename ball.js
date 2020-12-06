class ball{
    constructor(x,y,width,height,angle){
        var options={
            density:1,
            frictionAir:0.005
             }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("blue")
        ellipse(0,0,this.width,this.height)
        pop()
    
    
    }
    
    }