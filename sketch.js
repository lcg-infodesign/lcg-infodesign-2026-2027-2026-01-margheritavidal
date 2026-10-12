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

  // --- GAMBO DEL FUNGO ---
  fill(225, 204, 164); // Beige chiaro
  rectMode(CENTER);
  rect(posX, posY + 85, 95, 130, 30); // Gambo con angoli arrotondati

  // Macchie/sfumature sul gambo
  fill(200, 160, 105);
  ellipse(posX + 10, posY + 50, 14, 18);
  ellipse(posX - 5, posY + 90, 18, 16);
  ellipse(posX + 25, posY + 105, 20, 18);

  // --- CAPPELLO DEL FUNGO ---
  fill(215, 25, 15); // Rosso vivo
  arc(posX, posY + 40, 260, 200, PI, 0, CHORD);

  // --- PALLINI BIANCHI (IA: ciclo for + blocco if) ---
  fill(255);
  
  // Array con coordinate e dimensioni relative dei pallini
  let pois = [
    { x: -50, y: -45, d: 24 },
    { x: 30,  y: -35, d: 32 },
    { x: -15, y: -25, d: 26 },
    { x: -80, y: -10, d: 18 },
    { x: -35, y:   5, d: 32 },
    { x:  20, y:  -5, d: 18 },
    { x:  75, y: -15, d: 24 },
    { x:  15, y:  25, d: 26 },
    { x: -90, y:  20, d: 30 }, // incavo a sinistra
    { x:  95, y:  15, d: 35 }, // incavo a destra
    { x:   0, y: -65, d: 28 }  // incavo in cima
  ];

  for (let i = 0; i < pois.length; i++) {
    let p = pois[i];
    
    // Blocco if per controllare che i pois siano validi o differenziare il disegno
    if (p.d > 0) {
      circle(posX + p.x, posY + p.y, p.d);
    }
  }
}
