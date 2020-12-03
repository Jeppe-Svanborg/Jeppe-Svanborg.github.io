function setup() {
  createCanvas(windowWidth, windowHeight);

  // let ySpeedo = random(10, 4)
  // let xSpeedo = random(10, 4)
  // let x = random(windowWidth - d, 0 + d);
  // let y = random(windowHeight - d, 0 + d);

}
let d = Math.floor(Math.random()*101)+51;

// let x = math.floor(math.random()* 800)+d;
// let y = math.floor(math.random()* 600)+d;

// let xKoordinat = [x, x, x, x];
// let yKoordinat = [y, y, y, y];
// let ySpeed = [ySpeedo, ySpeedo, ySpeedo, ySpeedo];
// let xSpeed = [xSpeedo, xSpeedo, xSpeedo, xSpeedo];


let xKoordinat = [250, 500, 750, 600];
let yKoordinat = [200, 600, 600, 350];


let xSpeed = [3, 5, 7, 10];
let ySpeed = [9, 6, 2, 7];

let antalBolde = xKoordinat.length;

let rød = Math.floor(Math.random() * 256);
let grøn = Math.floor(Math.random() * 256);
let blå = Math.floor(Math.random() * 256);


function draw() {
  
  background(220);

  for (let i = 0; i < antalBolde; i++) {
    if (xKoordinat[i] > width - d / 2 || xKoordinat[i] < 0 + d / 2) {
      xSpeed[i] = -xSpeed[i];
    }

    if (yKoordinat[i] > height - d / 2 || yKoordinat[i] < 0 + d / 2) {
      ySpeed[i] = -ySpeed[i];
    }
    xKoordinat[i] = xKoordinat[i] + xSpeed[i];
    yKoordinat[i] = yKoordinat[i] + ySpeed[i];
  }
  for (let i = 0; i < antalBolde; i++) {
    circle(xKoordinat[i], yKoordinat[i], d);
    fill(rød, grøn, blå)
  }
}