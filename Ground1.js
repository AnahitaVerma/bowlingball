class gd{

    constructor(x,y,width,height){
      
        var options = {

            'isStatic' : true,
            'friction': 0.5
          
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("images/sample.png")
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position
        imageMode(CENTER)
        tint(255,0)
        image(this.image, pos.x,pos.y,this.width,this.height)
    }
}