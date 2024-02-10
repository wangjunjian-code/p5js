function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  fill(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  strokeWeight(30);
  stroke(0);
  box(width / 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}