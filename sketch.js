/** @typedef {import("p5").Font} Font */

let diameter = 100;

/** @type {Font} */
let font;

function preload() {
  font = loadFont("./assets/InputMonoCondensed-Light.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / 10);
}

function draw() {
  background("blue");

  orbitControl();

  // directionalLight(255, 0, 0, 1, 1, 0);
  // ambientLight(80);

  let count = 10;
  let rows = 10;

  let angle = 360 / count;

  fill("white");

  // push();
  // normalMaterial();
  // sphere(50);
  // pop();

  rotateY(-frameCount);
  for (let i = 0; i < count; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text("Ciao", 0, 0);
      pop();
    }
    // ellipse(0, 0, diameter, diameter);
    pop();
  }

  // textSize(100);
  // for (let i = 0; i < count; i++) {
  //   push();
  //   noFill();
  //   stroke("black");
  //   // rotateY(angle * i);
  //   translate(diameter, 0, 0);
  //   text("Ciao", 0, 0);
  //   // ellipse(0, 0, diameter, diameter);
  //   pop();
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
