//globals
let windowWidht = window.innerWidth;
let windowHeight =window.innerHeight;

// CLASSES to be created:

// class PLAYER

// BACKGROUND :
// consists of ->  class ground --> class tree big
//  optional:
// class tree small - class tree medium 

// OBSTACLES: 
// consists of ->  class amanita -->  class bolete --> class rock

function preload(){
    bg = loadImage("../images/k5ja_pdgw_180216.jpg") // placeholder image until I get my own background items
  }



function setup (){
    createCanvas(windowWidht, windowHeight);
    background(bg);
}

function draw (){
    console.log('test')
    rect(30, 30, 100, 100);
    fill('blue');
}



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
  