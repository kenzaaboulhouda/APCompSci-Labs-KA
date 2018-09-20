/*
**  Ball Constructor Function
**  Kenza Aboulhouda
**  Aug 21, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;


  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // p5.Vector.sub() returns a Vector
  //  scales the magnitude to 0.5
  this.update = function(){
    if(this !== b1){
      //if this is less than 250 away from ball
      //attract:: accelerate towards ball
      var d = this.loc.dist(b1.loc)
      if(d < 450){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(.08);
        this.vel.add(attForce)
      }
      //if this is less than 85 away from ball
      //repel:: accelerate away from ball
      if(d < 85){
        var repForce = p5.Vector.sub(this.loc, b1.loc );
        repForce.normalize();
        repForce.mult(.5);
        this.vel.add(repForce)
      }
    }
this.vel.limit(3)
    this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}  //  End of Ball Constructor
