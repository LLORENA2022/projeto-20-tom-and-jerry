var bgImg;
var cat;
var mouse;
var bg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadImage("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadImage("images/mouse2.png", "images/mouse3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg3 = loadImage("images/mouse4.png");
   
}

function setup(){
  createCanvas(1000,800);
  //crie os sprites de gato e rato aqui
 cat = createSprite(870,600);
 cat.addAnimation("gatoAndando", catimg1);
 cat.scale= 0.2

 mouse = createSprite(200,600);
 mouse.addAnimation("ratoQuieto", mouseimg1);

 mouse.scale= 0.2
}

function draw() {

  background(bgImg);
  //Escreva a condição aqui para avaliar se o gato e o rato colidem
 
  drawSprites();
  if(cat.x - mouse.x < (cat.width - mouse.width) / 2){
    cat.velocityX=0;
    cat.changeAnimation("gatoSentado", catimg3);
    cat.x = 380;
    cat.scale = 0.2;
    cat.changeAnimation("gatoSentado")
    
    

    mouse.changeAnimation("ratoFeliz", mouseimg3);
    mouse.scale=0.15;
    mouse.changeAnimation("ratoFeliz")
  
    }

}
function keyPressed() {

  if (keyCode === LEFT_ARROW) {
      mouse.addAnimation("ratoProvoca", mouseimg2);
      mouse.changeAnimation("ratoProvoca");
      mouse.frameDelay = 25;

      cat.addAnimation("gatoCorrendo", catimg2);
      cat.changeAnimation("gatoCorrendo");
      cat.velocityX = -5;
  }

}

     