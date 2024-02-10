let stars = [];
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10000; i++) {
    stars.push(new Star());
  }
  speed = 2;
}

function draw() {
  speed = map(mouseX, 0, width, 50, -50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight, WEBGL);
  swap = createGraphics(windowWidth, windowHeight, WEBGL);
}
