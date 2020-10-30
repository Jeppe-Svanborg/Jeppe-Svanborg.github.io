function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(width/2,0,width/2,height)
  line(0,width/2,width,height/2)

  if(mouseX <= width || mouseY <= height) {
    fill(255,255,255)
    circle(mouseX,mouseY,50)
  }

  if(mouseX <= width/2 && mouseY >= height/2 || mouseX >= width/2 && mouseY <= height/2){
  fill(255,0,0)
  circle(mouseX,mouseY,50)
  }

  if(mouseX < width/2 && mouseY < height/2){
    fill(255,255,0)
    square(mouseX-30,mouseY-30,60)
  }
  
  if(mouseX > width/2 && mouseY > height/2){
    fill(0,255,255)
    square(mouseX-50,mouseY-50,100)
  }
}