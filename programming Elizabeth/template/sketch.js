//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}
 var diam1;
 diam1 = 0;
//The draw function happens over and over again
function draw() {
 background(173,216,230); //an RGB color for the canvas' background
  //circle 
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  triangle(145, 128, 90, 156, 145,diam1,diam1,diam1,diam1); // center of canvas, 20px dia
  diam1 = diam1+5
}
  function mouseReleased() {
  if (diam1 === 0) {
    diam1 = 255;
  } else {
    diam1 = 0;
  }
text(power)
textSize(32);
text('power', 10, 30);
fill(0, 102, 153);
text('power', 10, 60);
fill(0, 102, 153, 51);
text('power', 10, 90);
}
