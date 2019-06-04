$(document).ready(function() {
    var wins = 0;
    $("#wScore").text("Wins: " + winCount);
    var lossCount = 0; // counter for game losses
    $("#lScore").text("Losses: " + lossCount);
    var userScore = 0; // counter for user score
    var gameScore = Math.floor(Math.random() * 102) + 19; // creates game score, a random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12
  