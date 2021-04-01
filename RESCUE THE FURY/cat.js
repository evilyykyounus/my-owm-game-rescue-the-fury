class Cat{
    constructor(){
        var options ={
            restitution:3
        }
        this.body=Bodies.rectangle(300,300,100,100,options)
this.image=loadImage("images/cat1.jpg")
World.add(world,this.body)
    }
    display () {
        image(this.image,this.body.position.x,this.body.position.y,100,100)
    }
}