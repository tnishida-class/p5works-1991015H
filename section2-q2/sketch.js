// チェッカー
function setup() {
    createCanvas(200, 200);
    background('white');
}

function draw(){
  const step = 25;

  for (let y = 0; y <= height; y += step) {
    if(y % (step*2) == 0){
      for (let x = step ; x <= width; x += step*2) {
        noStroke();
        fill('gray');
        rect(x, y, step, step);
      }
    }else{　
      for (let x = 0; x <= width; x += step*2) {
        noStroke();
        fill('gray');
        rect(x, y, step, step);
      }
    }
  }

  for (let y = 12.5; y <= 75; y += step) {
    if(y % 37.5 != 0){
      for (let x = 37.5 ; x <= width; x += step*2) {
        noStroke();
        fill('red');
        circle(x, y, 20 );
      }
    }else{　 
      for (let x = 12.5; x <= width; x += step*2) {
        noStroke();
        fill('red');
        circle(x, y, 22 );
      }
    }
  }

    for (let y = 137.5; y <= height; y += step) {
    if(y % 162.5 == 0){  // y の値が (step*2) で割り切れる時
      for (let x = 37.5 ; x <= width; x += step*2) {
        noStroke();
        fill('black');
        circle(x, y, 22 );
      }
    }else{　 // y の値が (step*2) で割り切れない時
      for (let x = 12.5; x <= width; x += step*2) {
        noStroke();
        fill('black');
        circle(x, y, 22 );
      }
    }
  }
}
