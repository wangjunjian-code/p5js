function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(255, 200, 0);

  ambientLight(200, 0, 0, 10);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  pointLight(0, 0, 255, locX, locY, 100);

  pointLight(255, 255, 0, 100, 100, 100);

  specularMaterial(250);
  shininess(50);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  push();
  translate(0, 0,sin(frameCount / 30) * 50);
  sphere(40);
  pop();

  torus(100, 30, 64, 64);

  //debugMode();
  orbitControl(1, 1, 1, { freeRotation: true });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}