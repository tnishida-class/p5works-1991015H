// 最終課題を制作しよう
let x, y, vx, vy;
let grabbed;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
}

function reset(){
  x = width / 2;
  y = height / 2;
  vx = 5;
  vy = 5;
  grabbed = false;
  textSize(60);
  textAlign(CENTER);
  fill(160,192,255);
  noStroke();
}

function draw(){
  background(160, 192, 255);

  if(!grabbed){
  fill("black");
  text("Where is the hexagone?",width / 2,height / 2);

  x += vx;
  y += vy;

  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  if(keyIsDown(LEFT_ARROW)){ vx = 10 ; }
  if(keyIsDown(UP_ARROW)){ vy = 10; }
}
else{
  background(255,255,255);
  text("Clear!", width / 2, height /2);
}

if(keyIsDown(" ".charCodeAt(0))){ background(255,255,255); }
fill(160,192,255);
hexagone(x , y , 60);
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 80;
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}

function keyPressed(){
  if(key == "r"){ reset(); }
}

function hexagone(cx, cy, r){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 1 / 6 - HALF_PI  ;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
