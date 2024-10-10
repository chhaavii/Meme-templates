let img;
let input1, input2, input3;
let generateButton, downloadButton;

function preload() {
  img = loadImage('distra.jpg');
}

function setup() {
  img.resize(500, 500);
  createCanvas(img.width, img.height + 100); // Adding extra space for inputs and buttons
  input1 = createInput('');
  input1.position(20, img.height + 20);

  input2 = createInput('');
  input2.position(input1.x + input1.width + 20, img.height + 20);

  input3 = createInput('');
  input3.position(input2.x + input2.width + 20, img.height + 20);

  generateButton = createButton('Generate Meme');
  generateButton.position(100,560);
  generateButton.mousePressed(generateMeme);

  downloadButton = createButton('Download Meme');
  downloadButton.position(250,560);
  downloadButton.mousePressed(downloadMeme);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  noLoop();
}

function draw() {
  background(0);
  image(img, 0, 0);
}

function generateMeme() {
  clear();
  background(0);
  image(img, 0, 0);

  let text1 = input1.value();
  let text2 = input2.value();
  let text3 = input3.value();

  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(22);
  textAlign(CENTER, CENTER);

  // Text positions for the three labels
  text(text1, 125, 450); // Other Girl
  text(text2, 250, 300); // Boyfriend
  text(text3, 400, 240); // Girlfriend
}

function downloadMeme() {
  saveCanvas('meme', 'jpg');
}
