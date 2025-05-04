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

/** @type {{x:number, y:number, z:number, spin: -1 | 1, speed: number}[]} */
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
  g.textSize(20);
  g.text("Hello", 0, 100);

  texture(g);
  for (let position of positions) {
    push();
    translate(position.x, position.y, position.z);
    rotateY(position.speed * frameCount);
    rotateX(position.speed * frameCount * position.spin);
    rotateZ(position.speed * frameCount);
    box(100, 100, 100);
    pop();
  }

  push();
  // Style the sphere.
  noStroke();
  specularMaterial(50);
  shininess(200);
  metalness(100);

  // Draw the sphere.
  sphere(30);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function randomCoordinate() {
  return random(-400, 400);
}
