let font_size;
let copie = 10;
let total_height;

//

let font;

function preload() {
  font = loadFont("./assets/Optimo - Px Grotesk Light Italic.ttf");
}

//

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);
  ellipseMode(CENTER);

  font_size = height / 10;
  total_height = font_size * copie;

  cam = createCamera();
  cam.setPosition(-500, -800, 500);
  cam.lookAt(0, 0, 0);
  setCamera(cam);

  textFont(font);
  textSize(font_size);
  textAlign("center");

  console.log(font, textDescent(), textAscent());
}

//

function draw() {
  background("blue");

  let txt = "CiapCiapCiap";
  let rect_w = textWidth(txt);

  translate(0, -total_height / 2);

  for (let i = 0; i < copie; i++) {
    push();
    textLeading(font_size);

    const translate_amount_base = cos(frameCount * 2 + i * 10);
    const translate_amount = map(translate_amount_base, -1, 1, -100, 100);
    translate(0, 0, translate_amount);
    fill("white");

    text(txt, 0, font_size * i);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
