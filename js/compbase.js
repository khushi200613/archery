class compbase{
    constructor(x,y,w,h){
        var options ={
            isStatic : true
        
        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.width=w
        this.height = h
    
    World.add(world,this.body)
    this.image=loadImage("assets/base1.png")
}

display(){
    var angle = this.body.angle;
    var pos = this.body.position;
  
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image , 0,0, this.width, this.height);
    
    pop();
  
}
}
