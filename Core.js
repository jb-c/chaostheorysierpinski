var Points = [];
function setup() {
  noLoop();
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(51);
  frameRate(60);
}
function Play(){
    background(51);
    Initialize(document.getElementById("Check").checked);
    loop();
}
function Initialize(Triangle) {
  noStroke();
  fill("#FFFFFF");
  for (var i = 0; i < 3; i++) {
    Points[i] = new Point();
  }
  if (Triangle) {
    Equilateral();
  }
  for (var i = 0; i < 3; i++) {
    ellipse(Points[i].Position.x,Points[i].Position.y,6);
    text(String.fromCharCode(65 + i),Points[i].Position.x,Points[i].Position.y,200,200);
  }
  Points[Points.length] = new Point();
  ellipse(Points[Points.length - 1].Position.x,Points[Points.length - 1].Position.y,8);
}
function draw() {
  for (var i = 0; i < 100; i++) {
    var Random = Math.floor(Math.random() * 3);
    var Dx = (Points[Random].Position.x + Points[Points.length - 1].Position.x)/2;
    var Dy = (Points[Random].Position.y + Points[Points.length - 1].Position.y)/2;
    Points[Points.length + 1] = new Point();
    Points[Points.length -1 ].AddCoords(Dx,Dy);
    noStroke();
    fill("#7CB95C");
    ellipse(Dx,Dy,1);
  }
}
function Point(){
  this.Position = createVector(random(width),random(height));
  this.AddCoords = function(x,y){
  this.Position.x = x;
  this.Position.y = y;
}
}
function Equilateral(){
  Points[0].AddCoords(0,height);
  Points[1].AddCoords(width,height);
  Points[2].AddCoords(width/2,height-(height * Math.sin(Math.PI / 3)));
}
