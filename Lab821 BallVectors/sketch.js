//  Global variables
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(12);  //  !!!!!!!!!!  this is a function call
}

function draw() {
  //b1.run();
  for (var i = 0; i < balls.length; i++)
  balls[i].run();
 }
var num = 12
function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var rad = random(20,40);
        var col = color(random(255), random(255), random(255));

        balls.push(new Ball(loc, vel, rad, col));

    }
}
