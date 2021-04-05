var canvas, backgroundImage;
var track,car1ing,car2ing,car3ing,car4ing;

function preload(){
track = loadImage("images/track.jpg");
car1ing = loadImage("images/car1.png");
car2ing = loadImage("images/car2.png");
car3ing = loadImage("images/car3.png");
car4ing = loadImage("images/car4.png")
}

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
