// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  strokeWeight(1);
  fill(0);
  beginShape();
  vertex((w + p * 2) - (w + p * 10) / 4,(h + p * 2));
  vertex((w + p * 2) / 2 ,(h + p * 2) + 30);
  vertex((w + p * 2) ,(h + p * 2));
  endShape(CLOSE);
  fill(0);
  ellipse((w + p * 2), (h + p * 2), w + p * 10, h + p * 10);
  fill(255);
  textSize(12);
  text(t, (w / 2 + p * 2), (h + p * 2) + 4);
}
