var mario,mario_running;
var sonic,sonic_running;
var bg,bg_image;
var invisiblePlatform;
var eggman,eggman_image;
var goomba,goomba_image;
var gameState = "play";
var sonic_dead
var score = 0;
var music;
var over;

function preload(){


mario_running = loadAnimation("MARIO_RUN_1.png","MARIO_RUN_2.png","MARIO_RUN_3.png");
sonic_running = loadAnimation("SONIC_RUN_1.png","SONIC_RUN_2.png","SONIC_RUN_3.png","SONIC_RUN_4.png");
bg_image = loadImage("BACKGROUND GAME.png");
eggman_image =loadImage("eggman.png");
goomba_image =loadImage("goomba.png");
sonic_dead = loadImage("sonic_dead.png");
music = loadSound("mario and sonic mashup.mp3");
over = loadSound("oof.mp3")

}




function setup() {
 createCanvas(1106,768);

 

 bg = createSprite(683,384);
 bg.addImage("background",bg_image);


 invisiblePlatform = createSprite(683,707,1366,10);
 invisiblePlatform.visible = false;




 //eggman = createSprite(1000,655,10,10);
//
// eggman.scale = 0.2;


 goomba = createSprite(1600,665,10,10);
 goomba.addImage("villain",goomba_image);
 goomba.scale = 0.1;



 mario = createSprite(100,625,10,10);
 mario.addAnimation("running",mario_running);
 
 sonic = createSprite(300,650,10,10);
 sonic.addAnimation("jumping",sonic_running); 

 music.play();
}





function draw()  {

background("black");

drawSprites();
textSize(20)
stroke("black")
text("score:"+score,950,25);


//
if ( gameState == "play")  {
  
    score = score + Math.round(frameCount/60) 

    bg.velocityX = -10;
    if (bg.x < 400 ) {
        bg.x= 600
    }
    
    //if (eggman.x < 0 ) {
   //     eggman.x= 1000
   // }
    
    if (goomba.x < 0) {
        goomba.x =1400; 
    }
    

   // eggman.velocityX = -20;
    goomba.velocityX = -50;


  //Giving downward velocity to mario and sonic 
  mario.velocityY = 15;
  sonic.velocityY = 20;
 
   
//making sonic jump by pressing spacebar
if (keyDown("SPACE") && sonic.y > 400) {
    sonic.y -= 100;
}



//linking sonic and mario jumps
mario.y = sonic.y
    




if (sonic.collide(goomba)) {
 gameState = "end";
 over.play()
 music.stop()

}






}//
//






if (gameState == "end") {
    sonic.addAnimation("dead",sonic_dead);
    bg.velocityX = 0;
    goomba.velocityX = 0
    sonic.velocityX = 0
    eggman.velocityX = 0
    mario.x = sonic.x

}







//Stopping sonic and mario from going down..
mario.collide(invisiblePlatform);
sonic.collide(invisiblePlatform);





}
