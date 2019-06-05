$(document).ready(function() {

    var Random= Math.floor(Math.random()*102+19);

    $("#numberMatch").text(Random);

    var purple= Math.floor(Math.random()*12+1);
    var pink= Math.floor(Math.random()*12+1);
    var orange= Math.floor(Math.random()*12+1);
    var yellow= Math.floor(Math.random()*12+1);

    var wins= 0;
    var losses= 0;
    var userTotal= 0;
    $("#wins").text(wins);
    $("#losses").text(losses);

    //  Reset the game
    function reset() {
        Random=Math.floor(Math.random()*102+19);
        $("#numberMatch").text(Random);

        purple=Math.floor(Math.random()*12+1);
        pink=Math.floor(Math.random()*12+1);
        orange=Math.floor(Math.random()*12+1);
        yellow=Math.floor(Math.random()*12+1);
        userTotal= 0;
        $("#totalScore").text(userTotal);
    }
//   What happens when you win the game
function winning() {
    wins++;
    $("#wins").text(wins);
    reset();
}
 
//   What happens when you lose the game
function losing() {
    losses++;
    $("#losses").text(losses);
    reset();
}



    //  What happens when you click on the purple crystal
    $("#purpleCrystal").on ("click", function(){
        userTotal = userTotal + purple;
        console.log("hello" + userTotal);
        $("#userScore").text(userTotal);
        
        if (userTotal == Random){
            winning();
        }
        else if (userTotal > Random){
            losing();
        }
    })

    //   What happens when you click on the pink crystal
    $("#pinkCrystal").on("click", function(){
        userTotal = userTotal + pink;
        $("#userScore").text(userTotal);
        
        if (userTotal == Random){
            winning();
        }
        else if (userTotal > Random){
            losing();
        }
    })

//   What happens when you click on the orange crystal
$("#orangeCrystal").on("click", function(){
    userTotal = userTotal + orange;
    $("#userScore").text(userTotal);
    
    if (userTotal == Random){
        winning();
    }
    else if (userTotal > Random){
        losing();
    }
})

//   What happens when you click on the yellow crystal

$("#yellowCrystal").on("click", function(){
    userTotal = userTotal + yellow;
    $("#userScore").text(userTotal);
    
    if (userTotal == Random){
        winning();
    }
    else if (userTotal > Random){
        losing();
    }
});

});