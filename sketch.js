var database,form,game,player
var gameState=0
var playerCount=0
var bgimg
function preload(){
    bgimg=loadImage("images/bg.jpg.crdownload")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background(bgimg);
  
}
