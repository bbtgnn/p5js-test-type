/** @typedef {import("./p5").Graphics} Graphics */
/** @typedef {import("./p5").Font} Font */
/** @typedef {import("./p5").Camera} Camera */

//

let font;

function preload() {
  font = loadFont("./assets/InputMonoCondensed-Light.ttf");
}

//

let cam;

/** @type {Graphics} */
let g;

/**
 * @typedef {Object} Position
 * @property {number} x - X coordinate
 * @property {number} y - Y coordinate
 * @property {number} z - Z coordinate
 * @property {-1 | 1} spin - Direction of spin
 * @property {number} speed - Speed of rotation
 * @property {number} angle - Angle in degrees
 */

/** @type {Position[]} */
let positions = [];

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  noStroke();

  textFont(font);

  g = createGraphics(100, 100);

  //

  for (let i = 0; i < 30; i++) {
    positions.push({
      x: randomCoordinate(),
      y: randomCoordinate(),
      z: randomCoordinate(),
      spin: random([-1, 1]),
      speed: random(),
      angle: random(0, 360),
    });
  }
}

//

function draw() {
  background("white");
  orbitControl();

  rotateY(frameCount / 10);

  push();
  fill("red");
  pop();

  g.background("white");
  g.textFont(font);
  g.textSize(100);
  g.text("Hello", 0, 100);

  texture(g);
  for (let position of positions) {
    push();
    translate(position.x, position.y, position.z);
    rotateX(position.speed * frameCount * position.spin);
    rotateZ(position.angle);
    box(100, 100, 100);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function randomCoordinate() {
  return random(-400, 400);
}
