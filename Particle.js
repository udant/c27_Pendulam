class Particle {
    constructor(x,y,r) {
      var particle_options = {
        'restitution':0.8,
        'friction':0.8,
        'density':0.4
      }
      this.body = Bodies.circle(x,y,r,particle_options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.r);
    }
  };