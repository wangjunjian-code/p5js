let angle = 0;
let obj;

function preload() {
  obj = loadModel("./FinalBaseMesh.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  let range = map(mouseX - width, 0, width / 2, 0, 1000);
  camera(0, range, height / 2 / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  rotateZ(PI);

  let fov = map(width - mouseX + 50, 0, width, 0, PI / 2);
  let cameraZ = height / 2.0 / tan(PI / 3 / 2.0);
  perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  pointLight(255, 255, 255, -height, -width, 0);

  push();
  translate(0, -80, -1000);
  rotateY(angle * 0.3);
  specularMaterial(10);
  shininess(20);
  model(obj);
  pop();

  translate(0, -180, -500);
  rotateX(HALF_PI);
  pointLight(50, 50, 50, height, width, 0);
  ambientMaterial(255);
  plane(1000, 200000);

  angle += 0.07;
  //debugMode();
}
