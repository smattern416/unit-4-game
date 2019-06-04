var counter = 0;

$(".crystal-image").on("click", function() {
    alert("You clicked a crystal!");

    // When the user clicks the crystal, the score goes up by 1
counter += 1;

alert("You click this crystal " + counter + " times!");
});
