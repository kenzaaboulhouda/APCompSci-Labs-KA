

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
//  Add perameters to your constructor function
function Sqr(location, sidelength, col){
  //  Add instance variables to your constructor Function
  this.loc = location;
  this.w = sidelength;
  this.col = col;

//What does a square need to know about itself??
this.render = function(){
  fill(this.col);
  rect(this.loc.x, this.loc.y, this.w, this.w);
  //  End of Square constructor function
}
}
