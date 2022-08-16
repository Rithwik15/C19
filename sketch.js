var ghost, ghostImg;
var background, backgroundImg;
var arrow, arrowImg, arrowsGroup;

function preload(){
ghostImg = loadImage("images.png");
backgroundImg = loadImage("background.png");
arrowImg = loadImage("arrow.png");
}

function setup() {
 createCanvas(600, 600);
 background = createSprite(300,300);
 background.addImage("background", backgroundImg);
 background.velocityx = 1;
}

function draw() {
 background(200)
 drawSprites();
}
