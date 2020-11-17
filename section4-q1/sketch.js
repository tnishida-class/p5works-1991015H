// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 30;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if(size > 30){size = 30 + count;}
  if(size < 80){size = 130 - count;}
  ellipse(width / 2, height / 2, size);
  if(keyIsDown(UP_ARROW)){count = (count + 2) % cycle};
}
