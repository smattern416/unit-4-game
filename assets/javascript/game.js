$(document).ready(function() {

    var random=Math.floor(Math.random()*102+19)
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
    $(".purple").on("click", function(){
        userTotal = userTotal + purple;
        $("#totalScore").text(userTotal);
        
        if (userTotal == Random){
            winning();
        }
        else if (userTotal > Random){
            losing();
        }
    })

//   What happens when you click on the pink crystal
$(".pink").on("click", function(){
    userTotal = userTotal + pink;
    $("#totalScore").text(userTotal);
    
    if (userTotal == Random){
        winning();
    }
    else if (userTotal > Random){
        losing();
    }
})

//   What happens when you click on the orange crystal
$(".orange").on("click", function(){
    userTotal = userTotal + orange;
    $("#totalScore").text(userTotal);
    
    if (userTotal == Random){
        winning();
    }
    else if (userTotal > Random){
        losing();
    }
})

//   What happens when you click on the yellow crystal

$(".yellow").on("click", function(){
    userTotal = userTotal + yellow;
    $("#totalScore").text(userTotal);
    
    if (userTotal == Random){
        winning();
    }
    else if (userTotal > Random){
        losing();
    }
});

});