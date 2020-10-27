// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(blue);

  let d = height / 9;

  for(let i = 1; i < 10; i++){
    if(i % 2 == 0){
      rect(0, (i-1) * d, width, d);
      fill('white');
    }
    else{
      rect(0, i * d, width, d);
      noFill();
    }
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(40,0,20,100);
  rect(0,40,100,20);
}
