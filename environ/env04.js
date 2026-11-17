// this is for lab 4

let scene1Title = "The Vessel";

let scene1Elements = ["the passenger" , " old boat", " compass", " rope", " birds", " the sea"];

let scene1Mood = ["hushed", " liminal", " deceptively tranquil"];

// clickable button that shares the title of the scene
$('#title').click(function() {
  
    $('#environment-output').html('<button id="title">Title</button><p>The Vessel</p>');

});

// clickable button that calls to the scene1Mood array
$('#mood').click(function() {

    let moodText = scene1Mood 

    $('#environment-output').html('<button id="mood">Mood</button><p>' + moodText + '</p>');

});

// clickable button that gives the description of the passenger
$('#thepassenger').click(function() {
  
    $('#environment-output').html('<button id="thepassenger">The Passenger</button><p>A solitary traveler venturing into unfamiliar waters, uncertain of what lies ahead or what has brought them here.</p>');

});

// clickable button that gives the description of the old boat
$('#oldboat').click(function() {
  
    $('#environment-output').html('<button id="oldboat">The Old Boat</button><p>A weathered, creaking vessel with splintered wood, uneven planks, and boards coming loose at the seams. Its worn structure groans against the restless water, barely concealing its age.</p>');

});

// clickable button that gives the description of the compass
$('#spinningcompass').click(function() {
  
    $('#environment-output').html('<button id="spinningcompass">The Compass</button><p>An aged, tarnished compass with a scratched glass face, a dulled metal casing, and a needle that trembles with every shift of the boat. Its worn markings offer direction, though its reliability remains uncertain.</p>');

});

// clickable button that gives the tangled rope
$('#tangledrope').click(function() {
  
    $('#environment-output').html('<button id="tangledrope">Tangled Rope</button><p>A frayed, knotted rope trailing into the water, its end lost to the depths below. Its original purpose is unclear, leaving you to wonder what it was meant to hold, secure, or pull from the sea.</p>');

});

// clickable button that gives the description of the birds
$('#birdsflying').click(function() {
  
    $('#environment-output').html('<button id="birdsflying">Birds</button><p>Distant seabirds circling above the water, their silhouettes faint against the overcast sky. They drift in and out of the mist, their calls carrying across the otherwise quiet sea.</p>');

});

// clickable button that gives the description of the sea
$('#thevastsea').click(function() {
  
    $('#environment-output').html('<button id="thevastsea">The Sea</button><p>Dark, restless waters stretch endlessly toward the horizon, their surface rippling beneath the weight of the overcast sky. Patches of mist drift low across the waves, obscuring the distance and leaving the sea to face into an indistinguishable gray.</p>');

});

// this function prompts the viewer to choose out of the choices it gives you to guess what the passenger might be feeling. There is one right answer, that being 'unease' each guessed answer will give a different output, depending on whether or not the answer is true or false (according to the passenger's feeling)
function askFeeling(whatFeeling) {
    let userFeeling = prompt("What is The Passenger feeling? Type: contentment, indifference, excitement, or unease.");

    if (userFeeling == 'unease') {
        $("#output").html ("Perhaps you can sense what the passenger cannot yet name.");
    }
    else {
        $("#output").html("Perhaps the passenger feels something else. Or perhaps you have mistaken the stillness for peace.");
    }
}

// this function allows the viewer to click on the passenger and ask what they might be feeling
$("#sitting-main").click(function() {
    askFeeling('unease')
});