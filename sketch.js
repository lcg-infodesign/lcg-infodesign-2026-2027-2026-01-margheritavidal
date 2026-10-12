function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background("purple")
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is so bad that I wanna give you a 0 but I give you a 1";
  textAlign(CENTER, CENTER);
  textSize(25);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
}
