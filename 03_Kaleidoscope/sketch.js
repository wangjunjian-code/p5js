let symmetry = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  background(0, 0);

  stroke(255);
  strokeWeight(1);

  let mX = mouseX - width / 2;
  let mY = mouseY - height / 2;
  let pmX = pmouseX - width / 2;
  let pmY = pmouseY - height / 2;

  if (mX == pmX && mY == pmY) stroke(0);
  else stroke(255);
  for (let i = 0; i < symmetry; i++) {
    rotate(360 / symmetry);
    line(mX, mY, pmX, pmY);
    push();
    scale(-1, 1);
    line(mX, mY, pmX, pmY);
    pop();
    if (mouseIsPressed) {
      push();
      fill(0, 20);
      noStroke();
      ellipse(mX, mY, random(1, 300));
      scale(-1, 1);
      ellipse(mX, mY, random(1, 300));
      pop();
    }
  }
}

function keyPressed(){
  if (keyCode === 83){
    save('img.jpg');
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//ver1
/*
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 10);
  stroke(255);

  strokeWeight(20);
  line(pmouseX, pmouseY, mouseX, mouseY);
  line(width - pmouseX, pmouseY, width - mouseX, mouseY);
  line(pmouseX, height - pmouseY, mouseX, height - mouseY);
  line(width - pmouseX, height - pmouseY, width - mouseX, height - mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
*/
