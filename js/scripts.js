$(document).ready(function() {
  for (var numCount = 1; numCount <= 35; numCount += 1) {

    if (numCount % 3 === 0) {

      $("#pingponglist").append("<li>" + "Ping" + "</li>");

    } else if (numCount % 5 === 0) {

      $("#pingponglist").append("<li>" + "Pong" + "</li>");

    } else {

      $("#pingponglist").append("<li>" + numCount + "</li>");

    }
  }
});


