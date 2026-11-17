let following = false;

// function allows you to click on the creature + changes the text below the green box based on whether you've clicked the creature or not. 
$("#creature").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The creature changed shape.");
});

// hover function provides a 'thought' from the creature, but only when hovering over the creature. a different message is shown when the cursor isn't hovering over the creature. 
$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The creature revealed a thought.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);

// allows the viewer to let the creature follow their cursor after clicking the space button.
// after clicking the space button, the message shown changes based on it's state/status.
$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#creature").toggleClass("following");

    if (following === true) {
      $("#status").text("The creature is following your cursor.");
    } else {
      $("#status").text("The creature stopped following you.");
    }
  }
});

// allows a space for which the mouse/cursor can move within the div box, if the creature is follow it. 
$(document).mousemove(function (event) {
  if (following === true) {
    $("#creature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});



