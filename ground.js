class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450, 390, 900, 20,ground_options)
          this.width = width;
          this.height = height;
          World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width, this.height);
    }
}