let num = 90;
let x = [];
let y = [];
let z = [];
let size = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < num; i++) {
    x.push(int(random(-width / 2, width / 2)));
    y.push(int(random(-height / 2, height / 2)));
    z.push(int(random(-100, 100)));
    size.push(int(random(1, 50)));
  }
}

function draw() {
  background(10);

  fill(200);
  sphere(20, 40, 40);

  pointLight(100, 100, 100, 15, 15, 0);

  specularMaterial(1);
  shininess(1);

  for (let i = 0; i < num; i++) {
    rotateY(frameCount / 10000 + mouseX / 1000);
    push();
    translate(x[i], y[i], z[i]);
    if (
      mouseX - width / 2 >= x[i] - size[i] / 2 &&
      mouseX - width / 2 <= x[i] + size[i] / 2 &&
      mouseY - height / 2 >= y[i] - size[i] / 2 &&
      mouseY - height / 2 <= y[i] + size[i] / 2
    ) {
      noStroke();
      specularMaterial(50);
    }
    sphere(size[i], 40, 40);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}
