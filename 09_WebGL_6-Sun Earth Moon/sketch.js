let sun, earth, moon, stars;
let sunSize = 100;
let erathSize = 40;
let moonSize = 10;

let sunErathDis = 400;
let erathMoonDis = 80;

function preload() {
  sun = loadImage("./2k_sun.jpg");
  earth = loadImage("./2k_earth_daymap.jpg");
  moon = loadImage("./2k_moon.jpg");
  stars = loadImage("./2k_stars_milky_way.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  push();
  translate(0, 0, -sunErathDis - erathMoonDis);
  image(stars, -width, -height, width * 2, height * 2);
  pop();

  rotateY(frameCount / 100 + mouseY / 10);
  // ambientLight(200);

  fill(255, 255, 0);
  texture(sun);
  sphere(sunSize, 40, 40);
  pointLight(255, 255, 255, 15, 15, 0);

  push();
  translate(sunErathDis, 0, 0);
  rotateY(frameCount / 100);
  texture(earth);
  sphere(erathSize, 40, 40);

  push();
  rotateY(frameCount / 50);
  translate(erathMoonDis, 0, 0);
  texture(moon);
  sphere(moonSize, 40, 40);
  pop();
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}
