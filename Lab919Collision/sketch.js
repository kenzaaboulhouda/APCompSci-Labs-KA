//  Global variables
var boids = [];
var chaser;
// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  chaser = new Chaser(createVector(width/2,height/2),
createVector(.5,-.8),25, color(255,0,0));
//boid = new Boid (loc, vel, dir, clr);
  loadBoids(55);  //  !!!!!!!!!!  this is a function call
  frameRate(60);
}

function draw() {
  background(20,20,20,22);
for(var i = 0; i < boids.length; i++){
  boids[i].run(); //calls array
 }
 chaser.run(); //calls Chaser
//forloop for changing isDead to true


  for(var i = 0;i < boids.length; i++){
    var x = boids[i];
    var y = chaser.loc;
    var z = x.loc;
    //returns distance between two objects
    var dist = y.dist(z);
    if (dist <= 18)
    boids.splice (i, 1);
}
}

function loadBoids(numBoids){

    for(var i = 0; i < numBoids; i++){
        var loc = createVector (width/2,height/2);
        var vel = createVector (random(-3,3), random(-3,3));
        var clr = color(255, 0, 0);

      boids.push(new Boid(loc, vel, clr));
    }
    console.log(boids);

}

function loadChaser(){
 console.log(chaser);

}
