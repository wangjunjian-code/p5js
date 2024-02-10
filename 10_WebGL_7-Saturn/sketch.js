let saturn, stars;
let saturnSize = 100;

let dis = [];
let range = [];
let num = 5000;
let particleSize = [];

function preload() {
  saturn = loadImage("./2k_saturn.jpg");
  stars = loadImage("./2k_stars.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < num; i++) {
    particleSize.push(random(1));
    dis.push(random(80));
    range.push(random(2));
  }
}

function draw() {
  push();
  translate(0, 0, -100);
  image(stars, -width, -height, width * 2, height * 2);
  pop();

  rotateY(-PI / 3);
  rotateX(-PI / 15);

  //ambientLight(100);
  pointLight(255, 255, 255, -1000 + mouseX * 2, -1000 + mouseY * 2, 1000);

  specularMaterial(10);
  shininess(10);

  noStroke();
  fill(255);
  texture(saturn);
  rotateY(frameCount / 100);
  sphere(saturnSize, 30, 30);

  for (let i = 0; i < num; i++) {
    rotateY(frameCount / 50000);
    push();
    translate(150 + dis[i], range[i], 0);
    box(particleSize[i]);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}
