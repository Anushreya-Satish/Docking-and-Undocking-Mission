var bgImg;
var spacecraft, spacecraftImg;
var spacecraft2, Img1, Img2, Img3, Img4;
var hasDocked;

function preload() {
  bgImg = loadImage("spacebg.jpg");
  spacecraftImg = loadImage("iss.png");
  Img1 = loadImage("spacecraft1.png");
  Img2 = loadImage("spacecraft2.png");
  Img3 = loadImage("spacecraft3.png");
  Img4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(1500, 700);

  spacecraft2 = createSprite(700, 600, 20, 20);
  spacecraft2.addImage(Img1);
  spacecraft2.scale = 0.4;

  spacecraft = createSprite(700, 300, 50, 50);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 1.5;

  hasDocked = false;
}

function draw() {
  background(bgImg);

  if (!hasDocked) {
    if (keyDown(LEFT_ARROW)) {
      spacecraft2.addImage(Img4);
      spacecraft2.x = spacecraft2.x - 2;
    }
    if (keyDown(RIGHT_ARROW)) {
      spacecraft2.addImage(Img3);
      spacecraft2.x = spacecraft2.x + 2;
    }
    if (keyDown(UP_ARROW)) {
      spacecraft2.addImage(Img1);
      spacecraft2.y = spacecraft2.y - 2;
    }
    if (keyDown(DOWN_ARROW)) {
      spacecraft2.addImage(Img2);
    }
  }

  if (spacecraft2.x === 592 && spacecraft2.y === 470) {
    hasDocked = true;
    stroke("black");
    fill("white");
    textSize(50);
    textFont("Stargaze");
    text("!Docking Successfull!", 1000, 300);
  }

  drawSprites();

  stroke("black");
  fill("white");
  textSize(30);
  textFont("Stargaze");
  text("Docking-Undocking Mission", 20, 30);
}
