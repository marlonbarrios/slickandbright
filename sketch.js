let x;
let y;
let speedX;
let speedY;
let font;
let bg;
let canvas;
let lines = [  "an elastic deity",  "with circuits and code",  "sleek and bright",  "dreaming data day and night", "a neon-lit world"];

function preload() {
  font = loadFont('Anton-regular.ttf');
  bg = loadImage("img.png");
}

function setup() {
  createCanvas(1024, 1024);
  x = width / 2;
  y = height / 2;
  speedX = random(-5, 5);
  speedY = random(-5, 5);
  textFont(font);
  textSize(24);
  textSize(30);
  textAlign(RIGHT, RIGHT);
  mbsFramework();
  credits();
}

//function to register the change wondow size

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  background(bg, 2);
noStroke()

  fill('#22fbfb');
  stroke(0)
  strokeWeight(2)

  line( x, height, x,y)
  line(0, height/2, x,y)
  line(width, height/2, x,y)
  stroke('#22fbfb')
  line( width * 0.685, height * 0.23, x,y)
  noStroke()
  ellipse(x, y, 20, 30);
  x += speedX;
  y += speedY;
 

  if (x > width - 50 || x < 50) {
    speedX = -speedX;
    speedY = random(-5, 5);
  }
  if (y > height -50 || y < 50) {
    speedY = -speedY;
    speedX = random(-5, 5);
  }
  fill(255);
  
  let lineHeight = height - 200;
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width * 0.97, lineHeight);
   
    lineHeight += 40;
  }
}


function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  
    

function windowResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    resizeCanvas(windowWidth * 0.85, windowWidth* 0.85);
    canvas.style("margin", "auto");
    canvas.style("margin-top", "10%");
  
  } else {
      resizeCanvas(windowWidth, windowWidth);
  }
  
}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}

function credits() {
//credits
  createP("sleek and bight");
  createP("Image created in collaboration with DALL-E based on short poem created with ChatGPT  with generative animation in P5 | Studies of Synthetic Creativity" );
  createP("Press 's' to save a png image");
  var link =createA("https://marlonbarrios.github.io/", "Concept and Programming by Marlon Barrios Solano");

  createElement('title', 'Title on tab')

  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }

  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");

}

