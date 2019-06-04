$(document).ready(function() {
    var wins = 0;
    $("#wScore").text("Wins: " + winCount);
    var lossCount = 0; // counter for game losses
    $("#lScore").text("Losses: " + lossCount);
    var userScore = 0; // counter for user score
    var gameScore = Math.floor(Math.random() * 102) + 19; 
    var crystalOne = Math.floor(Math.random() * 12) + 1; 
    var crystalTwo = Math.floor(Math.random() * 12) + 1; 
    var crystalThree = Math.floor(Math.random() * 12) + 1; 
    var crystalFour = Math.floor(Math.random() * 12) + 1;

    $("#gScore").text("Game Score: " + gameScore);
    $("#uScore").text("User Score: " + userScore);

    //  What happens when you click on the purple crystal
 

//   What happens when you click on the pink crystal


//   What happens when you click on the orange crystal


//   What happens when you click on the yellow crystal
 
//   What happens when you win the game
 
//   What happens when you lose the game

// Reset the game
});