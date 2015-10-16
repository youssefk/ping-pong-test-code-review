$(document).ready(function() {

  var userInput = parseInt(prompt("Please enter any positive number to see a Ping Pong list up to that number, starting from 1."));

  if (userInput >= 1) {

    for (var numCount = 1; numCount <= userInput; numCount += 1) {

      if (numCount % 3 === 0) {

        if (numCount % 5 === 0) {

          $("#list").append("<li>Ping-Pong</li>");

        } else $("#list").append("<li>Ping</li>");

      } else if (numCount % 5 === 0) {

        $("#list").append("<li>Pong</li>");

      } else {

        $("#list").append("<li>" + numCount + "</li>");

      }

    }

  } else $(".container").append("<h2>Invalid input! Please reload the page and try again.</h2>");

});
