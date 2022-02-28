//globals
let windowWidht = window.innerWidth;
let windowHeight = window.innerHeight;
let center = windowWidht / 2

//backlog, have screen blur when eating amanita and then you still have a chance to run on but it is harder

treesLeft = [];
treesRight = [];

// classes
/* potentioal refactoring for later, but figure out how to do the images then
class mushroom {
    constructor(mushroomX, mushroomY, mushroomWidht, mushroomHeigth){
        this.mushroomX = mushroomX 
        this.mushroomY = mushroomY
        this.mushroomWidht = mushroomWidht
        this.mushroomHeigth =mushroomHeigth
    }

    drawMushroom() {
        image(mushroomImg, this.mushroomX, this.mushroomY, this.mushroomWidht, this.mushroomHeigth);
      
        this.mushroomY = this.mushroomY + 3;

        if(this.mushroomY > windowHeight ){
            this.mushroomY =- 0;
    }
}
}*/

class amanita {
    constructor(amanitaX, amanitaY, amanitaWidht, amanitaHeigth){
        this.amanitaX = amanitaX 
        this.amanitaY = amanitaY
        this.amanitaWidht = amanitaWidht
        this.amanitaHeigth =amanitaHeigth
    }

    drawAmanita() {
        image(amanitaImg, this.amanitaX, this.amanitaY, this.amanitaWidht, this.amanitaHeigth);
      
        this.amanitaY = this.amanitaY + 7;

        if(this.amanitaY > windowHeight ){
            this.amanitaY =- 1000;
    }
}
}

class bolete {
    constructor(boleteX, boleteY, boleteWidht, boleteHeigth){
        this.boleteX = boleteX 
        this.boleteY = boleteY
        this.boleteWidht = boleteWidht
        this.boleteHeigth = boleteHeigth
    }

    drawBolete() {
        image(boleteImg, this.boleteX, this.boleteY, this.boleteWidht, this.boleteHeigth);
      
        this.boleteY = this.boleteY + 3;

        if(this.boleteY > windowHeight ){
            this.boleteY =- 1000;
    }
}
}

class rock {
    constructor(rockX, rockY, rockWidht, rockHeigth){
        this.rockX = rockX 
        this.rockY = rockY
        this.rockWidht = rockWidht
        this.rockHeigth = rockHeigth
    }

    drawRock() {
        image(rockImg, this.rockX, this.rockY, this.rockWidht, this.rockHeigth);
      
        this.rockY = this.rockY + 3;

        if(this.rockY > windowHeight ){
            this.rockY =- 1000;
    }
}
}

class tree {
    constructor(treeX, treeY, treeWidht, treeHeigth){
        this.treeX = treeX 
        this.treeY = treeY
        this.treeWidht = treeWidht
        this.treeHeigth = treeHeigth
    }

    drawtree() {
        image(treeImg, this.treeX, this.treeY, this.treeWidht, this.treeHeigth);
      
        this.treeY = this.treeY + 5;

        if(this.treeY > windowHeight ){
            this.treeY  =- 500;
    }
}
}

class player {
    constructor(playerX, playerY, playerWidht, playerHeigth){
        this.playerX = playerX 
        this.playerY = playerY
        this.playerWidht = playerWidht
        this.playerHeigth = playerHeigth
    }

    drawPlayer() {
        image(squirrelImg, this.playerX, this.playerY, this.playerWidht, this.playerHeigth); // you're a square until I get an image for you
    }
}

class runningPath {
    constructor(runningPathX, runningPathY, runningPathWidht, runningPathHeigth){
        this.runningPathX = runningPathX 
        this.runningPathY = runningPathY
        this.runningPathWidht =runningPathWidht
        this.runningPathHeigth = runningPathHeigth
    }

    drawRunningPath() {
        rect(this.runningPathX, this.runningPathY, this.runningPathWidht, this.runningPathHeigth); // you're a square until I get an image for you
        fill('#B77835');
        stroke("#B77835");
    }
}


// defining some objects that are gonna move on the screen
let amanita1 = new amanita(center - 1000, 100, 150, 180);
let bolete1 = new bolete(center + 700, 600, 200, 220);
let rock1 = new rock(center + 200, 200, 350, 300);
let treeMedium = new tree(50, 400, 1000, 1000);
let treeLarge = new tree(50, 400, 1500, 1500);
let treesmall = new tree(600, 100, 800, 800);
let playerMustard = new player(center - 200, windowHeight -500, 400, 400);
let runningPath1 = new runningPath((center - 1250), 0, 2500, windowHeight);


// making the objects actually appear & move
function preload(){
    //bg = loadImage("./images/background.png") // placeholder image until I get my own background items
    rockImg = loadImage("../images/rock.png")
    amanitaImg = loadImage("../images/amanita.png")
    boleteImg = loadImage("../images/bolete.png")
    treeImg = loadImage("../images/tree.png")
    squirrelImg = loadImage("../images/squirrel.png")
  }


function setup (){
    createCanvas(windowWidht, windowHeight);
 
    for(let i = 0; i < 6 ; i++){
            treeLeftY = random(windowHeight);
            treeLeftX = random(center - 1600);
        //10 + 200 * i;
       
       // 40 + 100 * i;
       treesLeft[i] = new tree(treeLeftX, treeLeftY, 400, 800);
    }

    for(let j = 0; j < 6 ; j++){
        treeRightY = random(windowHeight);
        treeRightX = (center + 1300) + 300 * j;
    //10 + 200 * i;
   
   
   treesRight[j] = new tree(treeRightX, treeRightY, 400, 800);
}

}

/* a mess
    //let overlapping = false;
    //for(let j = 0; j <trees.length; i ++){
       // let newTreeObj = trees[j];
        //let distance = dist(treeArrayX, treeArrayY, newTreeObj.x, newTreeObj.y);
        //if(distance < circle.r + newTreeObj){
          //  overlapping = true;
            //break;
   //     }
   // }
    
  //  if(!overlapping){
    //    trees.push(tree);
    //}

//}
*/

function draw (){
    background('#6C4408');
    runningPath1.drawRunningPath();
    amanita1.drawAmanita();
    bolete1.drawBolete();
    rock1.drawRock();

    for(let i = 0; i < treesLeft.length; i++){
    treesLeft[i].drawtree();
    }
    for(let j = 0; j < treesRight.length; j++){
    treesRight[j].drawtree();
    }


    //treeMedium.drawtree();
    //treeLarge.drawtree();
    //treesmall.drawtree();
    playerMustard.drawPlayer();
}

function keyPressed(){
    if((keyIsPressed) && (keyCode === LEFT_ARROW) && (playerMustard.playerX >= center - 1230)) {
        playerMustard.playerX -= 100
    }
    if((keyIsPressed) && (keyCode === RIGHT_ARROW) && (playerMustard.playerX + playerMustard.playerWidht + 30 <= center + 1250)) {
        playerMustard.playerX += 100
    }
    if((keyIsPressed) && (keyCode === UP_ARROW) && (playerMustard.playerY >= 100)) {
        playerMustard.playerY -= 100
    }
    if((keyIsPressed) && (keyCode === DOWN_ARROW) && (playerMustard.playerY + playerMustard.playerHeigth <= windowHeight - 60)) {
        playerMustard.playerY += 100
    }
  }


// start screen and end screen buttons
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    document.getElementById("restart-button").onclick = () => {
        startGame();
    };
  
    function startGame (){
    const splashScreen = document.querySelector('.game-intro-container');
      splashScreen.style.display = 'none'
    const gameOverScreen = document.querySelector('.game-end-container');
        gameOverScreen.style.display = 'none'
      };
  };
  