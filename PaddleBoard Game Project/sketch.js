//  Global variables
var Balls = [];
var paddle;
// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  //number of balls loaded
  numBalls = 10;
  loadBalls(numBalls);
  frameRate(60);
  //creating lerping paddle
  var loc = createVector(400,550);
  var loc2 = createVector(400, 560);
  var vel = createVector(0,0);
  var width = 250;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length/2, col);
//  paddle2 = new Paddle(loc.y+10, vel, width, length/2, col);

}

function draw() {
  background(20,20,20,6000);
  //get rid of outlines
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run(); //calls array
    //make balls bounce off Paddle
    var aBalls = Balls[i]
    var y = aBalls.loc.y
    var x = aBalls.loc.x//: //distance between paddle and ball in y coords
    //distance between paddle and ball in y coords
    var distY1 = abs(y - paddle.loc.y);
   var distY2= y- paddle2.loc.y;
    //needs to be within y distance and within the paddles 2 corners
    if((distY1 < 28) && (x > paddle.loc.x) && (x < paddle.loc.x+250)){
  aBalls.vel.y = -aBalls.vel.y
      }
      //splice out the balls when they hit paddle2
      if ((distY2 < 10) && (x > paddle.loc.x) && (x < paddle.loc.x+250)){
        Balls.splice(i,1);
      }
    }
  }

  //load the balls
  function loadBalls(numBalls){
    //ball variables
    for(var i = 0; i < numBalls; i++){
      var loc = createVector (random(100, 600), 20);
      var vel = createVector (random(-3,-3), random(3,3));
      var rad = 25
      var col = color(255, 0, 0);
      var b = new Ball (loc, vel, rad, col);
      //add balls to array
      Balls.push(b);
    }
  }
  function loadChaser(){
    console.log(chaser);
  }
