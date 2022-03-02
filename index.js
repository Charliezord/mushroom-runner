//backlog, have screen blur when eating amanita and then you still have a chance to run on but it is harder

//globals
let windowwidth = window.innerWidth;
let windowHeight = window.innerHeight;
let myCenter = windowwidth / 2;
let twentyPer = windowwidth * 0.2;
let gameIsOver = false;
let hitAmanita = false;

const splashScreen = document.querySelector('.game-intro-container');
const gamePlayScreen = document.querySelector('.play-container');
const gameOverScreen = document.querySelector('.game-end-container');

let scoreElem = document.querySelector('#score');
let score = 0;
let highScore = document.querySelector('#high-score');


treesLeft = [];
treesRight = [];
amanitaArray = [];
boleteArray = [];
rockArray = [];

// classes
/* potentioal refactoring for later, but figure out how to do the images then
class mushroom {
    constructor(mushroomX, mushroomY, mushroomwidth, mushroomHeigth){
        this.mushroomX = mushroomX 
        this.mushroomY = mushroomY
        this.mushroomwidth = mushroomwidth
        this.mushroomHeigth =mushroomHeigth
    }

    drawMushroom() {
        image(mushroomImg, this.mushroomX, this.mushroomY, this.mushroomwidth, this.mushroomHeigth);
      
        this.mushroomY = this.mushroomY + 3;

        if(this.mushroomY > windowHeight ){
            this.mushroomY =- 0;
    }
}
}*/

class amanita {
    constructor(amanitaX, amanitaY, amanitawidth, amanitaHeigth){
        this.amanitaX = amanitaX 
        this.amanitaY = amanitaY
        this.amanitawidth = amanitawidth
        this.amanitaHeigth =amanitaHeigth
    }

    drawAmanita() {
        image(amanitaImg, this.amanitaX, this.amanitaY, this.amanitawidth, this.amanitaHeigth);
      
        this.amanitaY = this.amanitaY + 3;

        if(this.amanitaY > windowHeight ){
            this.amanitaY =- 500;
        }
    }

}

class bolete {
    constructor(boleteX, boleteY, boletewidth, boleteHeigth){
        this.boleteX = boleteX 
        this.boleteY = boleteY
        this.boletewidth = boletewidth
        this.boleteHeigth = boleteHeigth
    }

    drawBolete() {
        image(boleteImg, this.boleteX, this.boleteY, this.boletewidth, this.boleteHeigth);
      
        this.boleteY = this.boleteY + 3;

        if(this.boleteY > windowHeight ){
            this.boleteY =- 500;
    }
}
}

class rock {
    constructor(rockX, rockY, rockwidth, rockHeigth){
        this.rockX = rockX 
        this.rockY = rockY
        this.rockwidth = rockwidth
        this.rockHeigth = rockHeigth
    }

    drawRock() {
        image(rockImg, this.rockX, this.rockY, this.rockwidth, this.rockHeigth);
      
        this.rockY = this.rockY + 3;

        if(this.rockY > windowHeight ){
            this.rockY =- 1000;
    }
}
}

class tree {
    constructor(treeX, treeY, treewidth, treeHeigth){
        this.treeX = treeX 
        this.treeY = treeY
        this.treewidth = treewidth
        this.treeHeigth = treeHeigth
    }

    drawtree() {
        image(treeImg, this.treeX, this.treeY, this.treewidth, this.treeHeigth);
      
        this.treeY = this.treeY + 3;

        if(this.treeY > windowHeight ){
            this.treeY  =- 150;
    }
}
}

class player {
    constructor(playerX, playerY, playerwidth, playerHeigth){
        this.playerX = playerX 
        this.playerY = playerY
        this.playerwidth = playerwidth
        this.playerHeigth = playerHeigth
    }

    drawPlayer() {
        image(squirrelImg, this.playerX, this.playerY, this.playerwidth, this.playerHeigth);
    }
}

class runningPath {
    constructor(runningPathX, runningPathY, runningPathwidth, runningPathHeigth){
        this.runningPathX = runningPathX 
        this.runningPathY = runningPathY
        this.runningPathwidth =runningPathwidth
        this.runningPathHeigth = runningPathHeigth
    }

    drawRunningPath() {
        fill('#B77835');
        stroke("#B77835");
        rect(this.runningPathX, this.runningPathY, this.runningPathwidth, this.runningPathHeigth); 
    }
}

// calling some instances of classes
let runningPath1 = new runningPath((myCenter - twentyPer), 0, twentyPer * 2, windowHeight);
let playerMustard = new player(myCenter - 20, windowHeight -90, 70, 80);


// all images
function preload(){
    rockImg = loadImage("../images/rock.png")
    amanitaImg = loadImage("../images/amanita.png")
    boleteImg = loadImage("../images/bolete.png")
    treeImg = loadImage("../images/tree.png")
    squirrelImg = loadImage("../images/squirrel.png")
  }

//setup: looping the trees, the mushrooms, and the rocks down the screen
function setup (){
    createCanvas(windowwidth, windowHeight);
 // loopdieloop the trees
    for(let i = 0; i < 10 ; i++){

        //it's looping the same random pattern over & over, change later?
        treeLeftY = random(windowHeight);
        treeLeftX = random(0, windowwidth * 0.20);   
        treesLeft[i] = new tree(treeLeftX, treeLeftY, 70, 140);
    }

    for(let j = 0; j < 10 ; j++){
        treeRightY = random(windowHeight);
        treeRightX = random(myCenter + twentyPer, windowwidth);
        treesRight[j] = new tree(treeRightX, treeRightY, 70, 140);
    }

    //loopdieloop the shrooms
    for(let k = 0; k < 3 ; k++){
        amanitaArrayY= random(windowHeight);
        amanitaArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
        amanitaArray[k] = new amanita(amanitaArrayX, -amanitaArrayY, 25, 30);
      }

    for(let z = 0; z < 5 ; z++){
        boleteArrayY = random(windowHeight);
        boleteArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
        boleteArray[z] = new bolete(boleteArrayX, -boleteArrayY, 25, 30);
      }

    // loopdielopp the rocks
    for(let r = 0; r < 4 ; r++){
        rockArrayY = random(windowHeight);
        rockArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
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
// the basics
    background('#6C4408');
    runningPath1.drawRunningPath(); 
    playerMustard.drawPlayer();
    

// drawing the amanita and collision statement
    for(let k = 0; k < amanitaArray.length; k++){
        amanitaArray[k].drawAmanita();
        let currentAmanita = amanitaArray[k]
     
        if(currentAmanita.amanitaY + 30 >= playerMustard.playerY 
            && currentAmanita.amanitaY + 30 <= playerMustard.playerY + 80
         && playerMustard.playerX <= currentAmanita.amanitaX + 25 
         && playerMustard.playerX + 70 >= currentAmanita.amanitaX
         ){
            currentAmanita.amanitaY = -1000
            // hitAmanita = true;
        }
    }

// drawing the bolete and collision statement
    for(let z = 0; z < boleteArray.length; z++){
        boleteArray[z].drawBolete();
        let currentBolete = boleteArray[z]

        if(currentBolete.boleteY + 30 >= playerMustard.playerY 
            && currentBolete.boleteY + 30 <= playerMustard.playerY + 80
            && playerMustard.playerX <= currentBolete.boleteX + 25 
            && playerMustard.playerX + 70 >= currentBolete.boleteX
            ){
               currentBolete.boleteY = -1000;
               score ++;
               scoreElem.innerText = score;
        }
    }

// drawing the rock and collision statement
    for(let r = 0; r < rockArray.length; r++){
        rockArray[r].drawRock();
        let currentRock = rockArray[r]

        if(currentRock.rockY + 60 >= playerMustard.playerY 
            && currentRock.rockY + 60 <= playerMustard.playerY + 80
            && playerMustard.playerX <= currentRock.rockX + 65 
            && playerMustard.playerX + 70 >= currentRock.rockX
            ){
                gameIsOver = true;
        }
    }

// drawing the trees
    for(let i = 0; i < treesLeft.length; i++){
    treesLeft[i].drawtree();
    }
    for(let j = 0; j < treesRight.length; j++){
    treesRight[j].drawtree();
    }
   

    if (gameIsOver){
        gameOver();
    }

 //   if(hitAmanita){
 //       blurScreen();
 ///   }

}


//making Mustard move
function keyPressed(){
    if((keyIsPressed) && (keyCode === LEFT_ARROW) && (playerMustard.playerX >= myCenter - twentyPer)) {
        playerMustard.playerX -= 20
    }
    if((keyIsPressed) && (keyCode === RIGHT_ARROW) && (playerMustard.playerX + playerMustard.playerwidth <= myCenter + twentyPer)) {
        playerMustard.playerX += 20
    }
    if((keyIsPressed) && (keyCode === UP_ARROW) && (playerMustard.playerY >= 100)) {
        playerMustard.playerY -= 20
    }
    if((keyIsPressed) && (keyCode === DOWN_ARROW) && (playerMustard.playerY + playerMustard.playerHeigth + 40 <= windowHeight)) {
        playerMustard.playerY += 20
    }
  }


function gameOver(){
    splashScreen.style.display = 'none';
    gamePlayScreen.style.display = 'none';
    gameOverScreen.style.display = 'flex';
    highScore.innerText = score;
    noLoop();
  };



//   function blurScreen(){
    
//   };


// start screen and end screen buttons

window.addEventListener("load", () => {
    noLoop();
    gamePlayScreen.style.display = 'none'
    gameOverScreen.style.display = 'none'

    document.getElementById('start-button').onclick = () => {
        startGame();
        loop();
    };

    document.getElementById("restart-button").onclick = () => {
        startGame();
        gameIsOver = false;

        playerMustard = new player(myCenter - 20, windowHeight -90, 70, 80);

        for(let k = 0; k < 3 ; k++){
            amanitaArrayY= random(windowHeight);
            amanitaArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
            amanitaArray[k] = new amanita(amanitaArrayX, -amanitaArrayY, 25, 30);
          }
    
        for(let z = 0; z < 5 ; z++){
            boleteArrayY = random(windowHeight);
            boleteArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
            boleteArray[z] = new bolete(boleteArrayX, -boleteArrayY, 25, 30);
          }
    
        // loopdielopp the rocks
        for(let r = 0; r < 4 ; r++){
            rockArrayY = random(windowHeight);
            rockArrayX = random(runningPath1.runningPathX, runningPath1.runningPathwidth * 1.5);
            rockArray[r] = new rock(rockArrayX, -rockArrayY, 65, 60);
    
        }
       
        score = 0;
        scoreElem.innerText = " ";
        loop();
    
    };
  
    function startGame() {
      splashScreen.style.display = 'none';
      gamePlayScreen.style.display = 'flex';
        gameOverScreen.style.display = 'none';
      };


     
});
  