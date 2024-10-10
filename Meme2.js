let img;
let input;
let button;
let memeText = '';

function preload() {
  img = loadImage('https://i.pinimg.com/564x/bf/11/2b/bf112b414ca176fb75949bc37d94d956.jpg')
}

function setup() {
  createCanvas(img.width + 200, img.height);
  image(img, 0, 0);

  input = createInput();
  input.position(img.width + 10, 30);

  button = createButton('Generate Meme');
  button.position(input.x + input.width + 10, 30);
  button.mousePressed(updateMemeText);

  textAlign(LEFT, TOP);
  textSize(24);
  fill(255);
  stroke(0);
  strokeWeight(2);
}

function draw() {
  background(220);
  image(img, 0, 0);
  text(memeText, img.width + 10, 70, 180, img.height - 70);
}

function updateMemeText() {
  memeText = input.value();
}
