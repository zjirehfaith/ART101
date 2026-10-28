// this is for lab 4

let scene1Title = "The Vessel";

let scene1Elements = ["the passenger" , " old boat", " compass", " rope", " birds", " the sea"];

let scene1Mood = ["hushed", " liminal", " deceptively tranquil"];

$('#title').click(function() {
  
    $('#environment-output').html('<button id="title">Title</button><p>The Vessel</p>');

});

$('#mood').click(function() {

    let moodText = scene1Mood 

    $('#environment-output').html('<button id="mood">Mood</button><p>' + moodText + '</p>');

});

$('#thepassenger').click(function() {
  
    $('#environment-output').html('<button id="thepassenger">The Passenger</button><p>A solitary traveler venturing into unfamiliar waters, uncertain of what lies ahead or what has brought them here.</p>');

});

$('#oldboat').click(function() {
  
    $('#environment-output').html('<button id="oldboat">The Old Boat</button><p>A weathered, creaking vessel with splintered wood, uneven planks, and boards coming loose at the seams. Its worn structure groans against the restless water, barely concealing its age.</p>');

});

$('#spinningcompass').click(function() {
  
    $('#environment-output').html('<button id="spinningcompass">The Compass</button><p>An aged, tarnished compass with a scratched glass face, a dulled metal casing, and a needle that trembles with every shift of the boat. Its worn markings offer direction, though its reliability remains uncertain.</p>');

});

$('#tangledrope').click(function() {
  
    $('#environment-output').html('<button id="tangledrope">Tangled Rope</button><p>A frayed, knotted rope trailing into the water, its end lost to the depths below. Its original purpose is unclear, leaving you to wonder what it was meant to hold, secure, or pull from the sea.</p>');

});

$('#birdsflying').click(function() {
  
    $('#environment-output').html('<button id="birdsflying">Birds</button><p>Distant seabirds circling above the water, their silhouettes faint against the overcast sky. They drift in and out of the mist, their calls carrying across the otherwise quiet sea.</p>');

});

$('#thevastsea').click(function() {
  
    $('#environment-output').html('<button id="thevastsea">The Sea</button><p>Dark, restless waters stretch endlessly toward the horizon, their surface rippling beneath the weight of the overcast sky. Patches of mist drift low across the waves, obscuring the distance and leaving the sea to face into an indistinguishable gray.</p>');

});

// this is for lab 5

function askFeeling(whatFeeling) {
    let userFeeling = prompt("What is The Passenger feeling? Type: contentment, indifference, excitement, or unease.");

    if (userFeeling == 'unease') {
        $("#output").html ("Perhaps you can sense what the passenger cannot yet name.");
    }
    else {
        $("#output").html("Perhaps the passenger feels something else. Or perhaps you have mistaken the stillness for peace.");
    }
}

$("#sitting-main").click(function() {
    askFeeling('unease')
});