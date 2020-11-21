// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  vx = 8;
  vy = 8;
  angle = 0;
  fill("yellow");
  noStroke();
}

function draw(){
  background(160, 192, 255);
   star(x , y , 20, angle);
  angle += 0.05;
  x -= vx;
  y += vy;
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
  if(keyIsDown(DOWN_ARROW)){ vy = 16}
  if(keyIsDown(UP_ARROW)){ vy = 8}
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI 　+ angle ;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
