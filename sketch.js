var canvas;
var surf1,surf2,surf3,surf4;
var box;

function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surf1 = createSprite(Math.round(random(20,775)),570,50,50);
    surf2 = createSprite(Math.round(random(20,775)),570,50,50);
    surf3 = createSprite(Math.round(random(20,775)),570,50,50);
    surf4 = createSprite(Math.round(random(20,775)),570,50,50);

    surf1.shapeColor = 'white';
    surf2.shapeColor = 'yellow';
    surf3.shapeColor = 'green';
    surf4.shapeColor = 'blue';

    //create box sprite and give velocity
    box = createSprite(665,550,25,25);
    box.velocityY = 1;
    box.shapeColor = 'black';
}

function draw() {
    background('pink');
    //create edgeSprite
    createEdgeSprites();

    if(surf1.isTouching(box)){
        box.bounceOff(surf1);
        surf1.shapeColor = 'yellow';
    }
    if(surf2.isTouching(box)){
        box.bounceOff(surf2);
        surf2.shapeColor = 'green';
    }
    if(surf3.isTouching(box)){
        box.bounceOff(surf3);
        surf3.shapeColor = 'blue';
    }
    if(surf4.isTouching(box)){
        box.bounceOff(surf4);
        surf4.shapeColor = 'white';
    }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
