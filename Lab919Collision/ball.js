/*
**  Ball Constructor Function
**  Kenza Aboulhouda
**  Aug 21, 2018
*/

function Chaser(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);


  // This function calls other functions
  this.run = function(){
    this.checkEdges();

    this.render();
    var mouseLoc = createVector(mouseX, mouseY);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)

  }
  // p5.Vector.sub() returns a Vector

this.vel.limit(3)
    this.loc.add(this.vel);

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

}//  End of Ball Constructor
