function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background("purple")
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    ":)";
  textAlign(CENTER, CENTER);
  textSize(25);
  text(message, width / 2, height / 2);
}

function draw() {
  // Sfondo 
  background(140, 161, 140);
  noStroke();

  // posizione del fungo 
  let posX = width / 2;
  let posY = height / 2;

  // Cielo 
  background(100, 180, 240); // azzurro 

  // Erba 
  rectMode(CORNER);
  fill(65, 120, 65); // verde 
  let altezzaPrato = posY + 100; // inizia l'erba
  rect(0, altezzaPrato, width, height - altezzaPrato);

  // ombra fungo
  fill(35, 65, 35, 160); // verde  
  ellipse(posX, posY + 145, 130, 30);

  // gambo fungo
  fill(225, 204, 164); // beige
  rectMode(CENTER);
  rect(posX, posY + 85, 95, 130, 30); // angoli arrotondati

  // macchie gambo
  fill(200, 160, 105);
  ellipse(posX + 10, posY + 58, 14, 18);
  ellipse(posX - 5, posY + 90, 18, 16);
  ellipse(posX + 25, posY + 105, 20, 18);

  // cappello fungo
  fill(215, 25, 15); // rosso 
  arc(posX, posY + 40, 260, 200, PI, 0, CHORD);

  // pallini bianchi
  fill(255);
  
  // coordinate e dimensioni dei pallini
  let pois = [
    
    { x: 30,  y: -35, d: 32 },
    
    { x: -80, y: -10, d: 18 },
    { x: -35, y:   5, d: 32 },
    { x:  8, y:  -5, d: 18 },
    { x:  75, y: -15, d: 24 },
    { x:  38, y:  15, d: 26 },
    { x: -90, y:  20, d: 30 }, 
    { x:  95, y:  16, d: 30 }, 
    { x:   -30, y: -35, d: 28 }  
  ];

  for (let i = 0; i < pois.length; i++) {
    let p = pois[i];
    
    // Blocco if per controllare che i pois siano validi o differenziare il disegno
    if (p.d > 0) {
      circle(posX + p.x, posY + p.y, p.d);
    }
  }
}

