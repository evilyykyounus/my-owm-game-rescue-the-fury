class Car{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,100,options)
this.image=loadImage("images/playerSitinginACar.jpg")
World.add(world,this.body)
    }
    display () {
        image(this.image,this.body.position.x,this.body.position.y,100,100)
    }
}