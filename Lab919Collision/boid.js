/*
**  Boid Constructor Function
**  Kenza Aboulhouda
**  Sept 24, 2018
*/

function Boid(location, velocity, color){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.clr = color;
  this.acc = createVector(0,.1);


  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //this function changes the location of the Ball
  //by adding speed x and y
  this.update = function(){

      //if this is less than 85 away from ball
      //repel:: accelerate away from ball
        var repForce = p5.Vector.sub(this.loc, chaser.loc );
        repForce.normalize();
        repForce.mult(.5);
          this.loc.add(this.vel);
      }


  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.loc.x = width;
    if(this.loc.x > width) this.loc.x = 0;
    if(this.loc.y < 0) this.loc.y = height;
    if(this.loc.y > height) this.loc.y = 0;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(0, 0, 255)
    push() // push or save the current coord system into the stack
        translate(this.loc.x, this.loc.y);
        rotate(0.4);
        triangle(-5, 0, 5, 0, 0, -15);
    pop()
     //  pop or restore the coordianate system from the stack
  }

}//  End of Ball Constructor
