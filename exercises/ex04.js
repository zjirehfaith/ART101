// the clicker button program

// we create a variable named "count", the initial value is 0

let count=0;
let colorsCount = 0;

// an indexed array of data
let colors=["green","orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";


// we listened for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){

    // what to do when the button is clicked
    // first, set a new value for "count," which the current value + 1

    count = count + 1;

    console.log(count);
    console.log(colors[colorsCount]);


    // now let's find our button and set a new text for it

    buttonText="I ate " + count + " chicken pancakes and color is " + colors[colorsCount]; 
   
    $("#needy-button").html(buttonText);

    $("body").css( "background-color", colors[colorsCount] );

    // $("body").append("<img width='50' src='" +colors[count-1] +".jpeg'>");

    if ( count >= 20) { $("#needy-button").after("<p>my mood is... so tired...</p>"); }
    else if (count >=12) { $("#needy-button").after("<p>my mood is... keep pushing!</p>"); }
    else if (count >= 4) { $("#needy-button").after("<p>my mood is... neutral</p>"); }

    //if ( (count >= 5) && (count < 10) ) { $("#needy-button").after("<p>my mood is... neutral</p>"); }
    //if(count >= 10) { $("#needy-button").after("<p>my mood is... keep pushing!</p>"); }

    // if we run out of colors, start from the first one anew

    colorsCount = colorsCount + 1;

    if (colorsCount >= 8) { colorsCount = 0; }


});