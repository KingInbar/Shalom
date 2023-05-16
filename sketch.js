let x = 160;
let y = 229;
let elliSpeed = 0.1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  let a = random(50, 10);
  background(255);
  noStroke();
  fill(200, 237, 234);
  //body
  ellipse(197.7888, 192.0691, 179, 226);

  //left fin
  ellipse(117.0083, 184.5691, 71.9665, 35);
  ellipse(116.9917, 210.5691, 71.9665, 35);
  ellipse(116.9917, 239.5691, 71.9665, 35);

  //right fin
  ellipse(283.0083, 184.5691, 71.9665, 35);
  ellipse(282.9917, 210.5691, 71.9665, 35);
  ellipse(282.9917, 239.5691, 71.9665, 35);

  //left leg
  ellipse(179.5388, 284.9247, 57, 71.9665);

  //right leg
  ellipse(220.5388, 284.9476, 57, 71.9665);

  //blush
  fill(r, g, b);
  ellipse(142.7888, 175.0691, 46, 18);
  ellipse(252.7888, 175.0691, 46, 18);

  //mouth
  if(mouseX>width/2)
  fill(29, 45, 42);
  ellipse(width/2, height/2, a, 49);

  //nose
  fill(47, 73, 69);
  ellipse(192.7888, 170.0691, 6, 6);
  ellipse(202.7888, 170.0691, 6, 6);

  //backeyes
  fill(97, 145, 139);
  ellipse(171.7888, 152.5691, 23, 23);
  ellipse(232.7888, 152.5691, 23, 23);

  //fronteyes
  fill(255);
  ellipse(x, 149.5691, 11, 11);
  ellipse(y, 149.5691, 11, 11);
  if (x > 180) {
    elliSpeed = -0.1;
  }
  if (x < 166) {
    elliSpeed = 0.1;
  }

  x = x + elliSpeed;
  
  
  if (y > 241) {
    elliSpeed = -0.1;
  }
  if (y < 229) {
    elliSpeed = 0.1;
  }
  y = y + elliSpeed;
  
}
