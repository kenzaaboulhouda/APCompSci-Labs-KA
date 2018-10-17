/*
**  Paddle Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

function Paddle(loc, vel, width, length, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;
  // This function calls other functions
  this.run = function(){

    this.update();
    this.render();
  }
    this.update = function(){
      //make paddle lerp to midddle of rectangle touches an edge
      paddleLength = width/2
      this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)
    //var mouseLoc = createVector(mouseX, mouseY);
  //this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }
  // render() draws the paddle at the new location
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.l);
  }

}//  End of Paddle Constructor
