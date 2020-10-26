// 小手調べ
function setup(){
  createCanvas(200,200);
}

function draw(){
  for(let i = 0; i < 10; i++){
    ellipse(100,100,(i+1) * 10);
    noFill();
    if (i>=4 && i<=8) {
      stroke(255,0,0);
    }
    else {
      stroke(0,0,255);
    }
  }
}
