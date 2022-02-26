//globals
let windowWidht = window.innerWidth;
let windowHeight =window.innerHeight;

// CLASSES to still be created:

// class PLAYER

// BACKGROUND :
// class ground 


// classes
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
            this.amanitaY =- 0;
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
            this.boleteY =- 0;
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
            this.rockY =- 0;
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
            this.treeY =- 0;
    }
}
}


// defining some objects that are gonna move on the screen
let amanita1 = new amanita(1500, 100, 150, 180);
let bolete1 = new bolete(2000, 600, 200, 220);
let rock1 = new rock(2300, 200, 350, 300);
let treeMedium = new tree(50, 400, 1000, 1000);
let treeLarge = new tree(50, 400, 1500, 1500);
let treesmall = new tree(600, 100, 800, 800);


// making the objects actually appear & move
function preload(){
    bg = loadImage("../images/k5ja_pdgw_180216.jpg") // placeholder image until I get my own background items
    rockImg = loadImage("../images/rock.png")
    amanitaImg = loadImage("../images/amanita.png")
    boleteImg = loadImage("../images/bolete.png")
    treeImg = loadImage("../images/tree.png")
  }


function setup (){
    createCanvas(windowWidht, windowHeight);
    
}

function draw (){
    background(bg);
    amanita1.drawAmanita();
    bolete1.drawBolete();
    rock1.drawRock();
    treeMedium.drawtree();
    treeLarge.drawtree();
    treesmall.drawtree();
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
  