var ground, groundImg;
function preload() {
    //load the images here
    groundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400,1000,800);

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
