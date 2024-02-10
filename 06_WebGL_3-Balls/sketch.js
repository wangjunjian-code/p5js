function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  smooth();
}
function draw() {
  background(0);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 ----------- width/2,-height/2
  //                   |           |
  //                   |    0,0    |
  //                   |           |
  //  -width/2,height/2 ----------- width/2,height/2

  pointLight(80, 80, 80, locX, locY, 500);
 
  push();
  translate(-width/6, 0, sin(frameCount / 30) * 200);
  sphere(width / 6, 48, 48);
  pop();

  push();
  translate(+width/6, 0, sin(frameCount / 30 + PI) * 200);
  sphere(width / 6, 48, 48);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}