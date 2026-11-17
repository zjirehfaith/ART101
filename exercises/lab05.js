// this functon provides the viewer with a prompt once button is clicked; provides a different message depending on whether or not the answer inputted is correct or not.
function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Noooooope");
    }
}

// this function allows the viewer to click on the button, which then provides a prompt with a question (the code above this describes the options)
$("#good-button").click(function () {
    askNumber(4);
});