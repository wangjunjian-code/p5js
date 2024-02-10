class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.sx;
    this.sy;
    this.r;
  }

  show() {
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);

    this.r = map(this.z, 0, width, 8, 0);
    this.col = map(this.z, 0, width, 255, 0);

    fill(this.col);
    noStroke();
    ellipse(this.sx, this.sy, this.r);
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
    if (this.z > width) {
      this.z = 0;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }
}
