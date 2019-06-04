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
  $("#crystal1").click(function() {
    userScore = userScore + crystalOne; 
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

//   What happens when you click on the pink crystal
  $("#crystal2").click(function() {
    userScore = userScore + crystalTwo; 
    console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

//   What happens when you click on the orange crystal
  $("#crystal3").click(function() {
    userScore = userScore + crystalThree; 
    console.log("User Score: " + userScore);
      $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });

//   What happens when you click on the yellow crystal
  $("#crystal4").click(function() {
    userScore = userScore + crystalFour; 
    console.log("User Score: " + userScore);
    $("#uScore").text("User Score: " + userScore);
      if (userScore === gameScore) {
        winGame();
      } else if (userScore > gameScore) {
        loseGame();
      }
  });
//   What happens when you win the game
  function winGame() {
    winCount = winCount + 1;
    $("#wScore").text("Wins: " + winCount);
    resetGame();
  }
//   What happens when you lose the game
function loseGame() {
    lossCount = lossCount + 1;
    $("#lScore").text("Losses: " + lossCount);
    resetGame();
  }

// Reset the game
});