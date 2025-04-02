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
  textSize(100);
}

function draw() {
  background(0);

  orbitControl();

  // directionalLight(255, 0, 0, 1, 1, 0);
  // ambientLight(80);

  let count = mouseX;

  let angle = 360 / count;

  fill("red");

  // push();
  // normalMaterial();
  // sphere(50);
  // pop();

  for (let i = 0; i < count; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    text("Ciao", 0, 0);
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
