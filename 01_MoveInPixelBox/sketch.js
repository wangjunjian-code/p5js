let boxNumX = 10;
let boxSize, curNumX, curNumY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255, 20);

  boxSize = width / boxNumX;

  noFill();
  for (x = 0; x < width; x += boxSize) {
    for (y = 0; y < height; y += boxSize) {
      rect(x, y, boxSize, boxSize);
    }
  }

  curNumX = int(map(mouseX, 0, width, 0, boxNumX));
  curNumY = int(map(mouseY, 0, width, 0, boxNumX));

  fill(0);
  rect(boxSize * curNumX, boxSize * curNumY, boxSize, boxSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
