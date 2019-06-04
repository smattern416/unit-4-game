$(document).ready(function() {
    var wins = 0;
    $("#winScore").text("Wins: " + winCount);
    var lossCount = 0; 
    $("#lossScore").text("Losses: " + lossCount);
    var userScore = 0; 
    var gameScore = Math.floor(Math.random() * 102) + 19; 
    var purpleCrystal = Math.floor(Math.random() * 12) + 1; 
    var pinkCrystal = Math.floor(Math.random() * 12) + 1; 
    var orangeCrystal = Math.floor(Math.random() * 12) + 1; 
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;

    $("#gameScore").text("Game Score: " + gameScore);
    $("#userScore").text("User Score: " + userScore);

    //  What happens when you click on the purple crystal
 

//   What happens when you click on the pink crystal


//   What happens when you click on the orange crystal


//   What happens when you click on the yellow crystal
 
//   What happens when you win the game
 
//   What happens when you lose the game

// Reset the game
});