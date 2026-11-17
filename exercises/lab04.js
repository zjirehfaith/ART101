let count = 0;

// description of fluffycat + arrays that describe my creature's different moods.
let fluffycatButton = {
    name: "Iris",
    species: "interface kitty",
    favoriteFood: "clicky treats",
    moods: ["neutral", "hungry", "scared", "playful", "sleepy", "annoyed"]
};

// clickable button that increases the count, and provides describing messages of my creature. 
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;
    let currentMood = fluffycatButton.moods[arrayPosition];
    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + fluffycatButton.name + ".</p>";
    message = message + "<p>I am an " + fluffycatButton.species + ".</p>";
    message = message + "<p>My favorite food is " + fluffycatButton.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});