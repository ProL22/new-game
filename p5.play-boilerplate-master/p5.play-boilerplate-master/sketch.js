//make universal variables for aim and bird
var aim,bird;
function preload(){
  //loading images for all the variables
  A=loadImage("images/aim.png");
  B=loadImage("images/bullet.png");
}
function setup() {
  //creating canvas
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  // creating aim and giving it the loaded image
  aim =createSprite(300, 200, 50, 50);
  aim.addImage(A);
 

}

function draw() {
  background(255,255,255);  
  // calling the function in the program
  bullet();
  // moving the aim with mouse
  aim.x=mouseX;
  aim.y=mouseY;
  drawSprites();
}
function bullet (){
  // wrote if condition which states- if we are pressing spaces then bullet will apwan and we ae giving it velocity and also we are making it move with the aim and we have added a image
  if(keyDown("space")){
    var bullet=createSprite(400, 200, 50, 50);
    bullet.addImage(B);
    bullet.velocityX=2;
    bullet.x=aim.x;
    bullet.y=aim.y;
  }
}