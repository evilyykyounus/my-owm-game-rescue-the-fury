class hospital{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(1000,50,10,10,options)
this.image=loadImage("images/vetHospital.jpg")
World.add(world,this.body)
    }
    display () {
        image(this.image,this.body.position.x,this.body.position.y,80,80)
    }
}