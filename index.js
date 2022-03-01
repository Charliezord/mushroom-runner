//backlog, have screen blur when eating amanita and then you still have a chance to run on but it is harder

//globals
let windowWidht = window.innerWidth;
let windowHeight = window.innerHeight;
let center = windowWidht / 2;
let twentyPer = windowWidht * 0.2;

treesLeft = [];
treesRight = [];
amanitaArray = [];
boleteArray = [];
rockArray = [];

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
      
        this.amanitaY = this.amanitaY + 3;

        if(this.amanitaY > windowHeight ){
            this.amanitaY =- 200;
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
            this.boleteY =- 200;
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
      
        this.treeY = this.treeY + 3;

        if(this.treeY > windowHeight ){
            this.treeY  =- 150;
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
        rect(this.runningPathX, this.runningPathY, this.runningPathWidht, this.runningPathHeigth); 
        fill('#B77835');
        stroke("#B77835");
    }
}

// calling some instances of classes
let playerMustard = new player(center - 20, windowHeight -90, 70, 80);
let runningPath1 = new runningPath((center - twentyPer), 0, twentyPer * 2, windowHeight);

/* old classes , remove later , keep for now for references
let amanita1 = new amanita(center - 1000, 100, 150, 180);
let bolete1 = new bolete(center + 700, 600, 200, 220);
let treeMedium = new tree(50, 400, 1000, 1000);
let treeLarge = new tree(50, 400, 1500, 1500);
let treesmall = new tree(600, 100, 800, 800);
*/

// all images
function preload(){
    //bg = loadImage("./images/background.png") // placeholder image until I get my own background items
    rockImg = loadImage("../images/rock.png")
    amanitaImg = loadImage("../images/amanita.png")
    boleteImg = loadImage("../images/bolete.png")
    treeImg = loadImage("../images/tree.png")
    squirrelImg = loadImage("../images/squirrel.png")
  }

//setup: looping the trees, the mushrooms, and the rocks down the screen
function setup (){
    createCanvas(windowWidht, windowHeight);
 // loopdieloop the trees
    for(let i = 0; i < 10 ; i++){

        //it's looping the same random pattern over & over, change later?
            treeLeftY = random(windowHeight);
            //10 + 500 * i;
            treeLeftX = random(0, windowWidht * 0.20);
             //40 + 100 * i;

       treesLeft[i] = new tree(treeLeftX, treeLeftY, 70, 140);
    }

    for(let j = 0; j < 10 ; j++){
        treeRightY = random(windowHeight);
        treeRightX = random(center + twentyPer, windowWidht);
        //(center + 1300) + 300 * j;
        
        treesRight[j] = new tree(treeRightX, treeRightY, 70, 140);
    }

    //loopdieloop the shrooms
    for(let k = 0; k < 3 ; k++){
        amanitaArrayY= random(windowHeight);
        amanitaArrayX = random(runningPath1.runningPathX, runningPath1.runningPathWidht * 1.5);
        amanitaArray[k] = new amanita(amanitaArrayX, -amanitaArrayY, 25, 30);
      }

    for(let z = 0; z < 5 ; z++){
        boleteArrayY = random(windowHeight);
        boleteArrayX = random(runningPath1.runningPathX, runningPath1.runningPathWidht * 1.5);
        boleteArray[z] = new bolete(boleteArrayX, -boleteArrayY, 25, 30);
      }

    // loopdielopp the rocks
    for(let r = 0; r < 5 ; r++){
        rockArrayY = random(windowHeight);
        rockArrayX = random(runningPath1.runningPathX, runningPath1.runningPathWidht * 1.5);
        rockArray[r] = new rock(rockArrayX, -rockArrayY, 65, 60);

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

// drawing stuff
function draw (){
    background('#6C4408');
    runningPath1.drawRunningPath();

// drawing the amanita and collision statement
    for(let k = 0; k < amanitaArray.length; k++){
        amanitaArray[k].drawAmanita();
        let currentAmanita = amanitaArray[k]

     /*   if(amanitaArray.amanitaArrayY < playerMustard.playerX + playerMustard.playerWidht 
            && amanitaArrayX + amanitaArrayX.amanitaWidht > playerMustard.playerX 
            && amanitaArrayY < playerMustard.playerY + playerMustard.playerHeigth 
            && amanitaArrayY + amanitaArrayY.amanitaWidht > playerMustard.playerY ){
                console.log('collide')
           }     */    
     
        if(currentAmanita.amanitaY + 30 >= playerMustard.playerY 
         && playerMustard.playerX <= currentAmanita.amanitaX + 25 
         && playerMustard.playerX + 70 >= currentAmanita.amanitaX
         ){
            currentAmanita.amanitaY = -1000
            // define  --> score die 
            console.log('touching amanita')
        }
    }

// drawing the bolete and collision statement
    for(let z = 0; z < boleteArray.length; z++){
        boleteArray[z].drawBolete();
        let currentBolete = boleteArray[z]

        if(currentBolete.boleteY + 30 >= playerMustard.playerY 
            && playerMustard.playerX <= currentBolete.boleteX + 25 
            && playerMustard.playerX + 70 >= currentBolete.boleteX
            ){
               currentBolete.boleteY = -1000
               // define  --> score ++ 
               console.log('touching bolete')
        }
    }

// drawing the rock and collision statement
    for(let r = 0; r < rockArray.length; r++){
        rockArray[r].drawRock();
        let currentRock = rockArray[r]

        if(currentRock.rockY + 30 >= playerMustard.playerY 
            && playerMustard.playerX <= currentRock.rockX + 25 
            && playerMustard.playerX + 70 >= currentRock.rockX
            ){
               gameOverScreen
               // define  --> score ++ 
               console.log('touching rock')
        }
    }

// drawing the trees
    for(let i = 0; i < treesLeft.length; i++){
    treesLeft[i].drawtree();
    }
    for(let j = 0; j < treesRight.length; j++){
    treesRight[j].drawtree();
    }

// drawing the player - a squirrel called mustard
    playerMustard.drawPlayer();


}


//making Mustard move
function keyPressed(){
    if((keyIsPressed) && (keyCode === LEFT_ARROW) && (playerMustard.playerX - 30 >= center - twentyPer)) {
        playerMustard.playerX -= 20
    }
    if((keyIsPressed) && (keyCode === RIGHT_ARROW) && (playerMustard.playerX + playerMustard.playerWidht + 30 <= center + twentyPer)) {
        playerMustard.playerX += 20
    }
    if((keyIsPressed) && (keyCode === UP_ARROW) && (playerMustard.playerY >= 100)) {
        playerMustard.playerY -= 20
    }
    if((keyIsPressed) && (keyCode === DOWN_ARROW) && (playerMustard.playerY + playerMustard.playerHeigth + 40 <= windowHeight)) {
        playerMustard.playerY += 20
    }
  }


// start screen and end screen buttons
window.addEventListener("load", () => {
    noLoop();
    document.getElementById('start-button').onclick = () => {
        startGame();
        loop();
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
  });
  