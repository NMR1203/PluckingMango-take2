class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            'density':1.0,
            'friction': 0.3,
            'restitution':0.5
        }
        
        this.x = x;
      this.y = y;
      this.r = r;
      
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("mango.png")
      
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke("green");
        fill("yellow");
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0,this.r*1.5, this.r*1.5)
        pop();
    }
}