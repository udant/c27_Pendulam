class Chain{
    constructor(bodyA , pointB ){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.0,
        length:200
    }
    this.chain = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}
 