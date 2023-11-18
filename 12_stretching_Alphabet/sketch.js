let s = 10;
let sp = 1;

let = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  textAlign(CENTER, CENTER);
  //let s = map(mouseX,0,width,-15,15);
  scale(s, 8);
  for (let i = -height / 2; i < height; i = i + 10) {
    text("O", 0, i);
  }

  s = s - sp;
  if (s < 1 || s > 300) sp = -sp;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
