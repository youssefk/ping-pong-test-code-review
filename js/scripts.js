$(document).ready(function() {

  var userInput = prompt("Please enter any positive number to see a Ping Pong list up to that number, starting from 1.");

  for (var numCount = 1; numCount <= userInput; numCount += 1) {

    if (numCount % 3 === 0) {

      if (numCount % 5 === 0) {

        $("#pingponglist").append("<li>" + "Ping-Pong" + "</li>");

      }

      else $("#pingponglist").append("<li>" + "Ping" + "</li>");

    } else if (numCount % 5 === 0) {

      $("#pingponglist").append("<li>" + "Pong" + "</li>");

    } else {

      $("#pingponglist").append("<li>" + numCount + "</li>");

    }
  }
});


