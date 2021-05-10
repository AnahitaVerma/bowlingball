class ball {

    constructor(x, y, width, height) {

        var options = {

            'restitution': 0.5,
            'friction': 0.5,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        //this.x = x
        // this.y = y
        this.width = width
        this.height = height
        // this.radiuus = 30
        this.image = loadImage("images/bowling-ball.png")
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position
        pos.x = mouseX
        pos.y = mouseY
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image, 0,0, this.width,this.height)
        // fill("yellow")
        //  ellipse(0, 0, this.radius);
        pop()
    }
}