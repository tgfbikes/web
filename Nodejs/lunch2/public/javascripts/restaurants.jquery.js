$(document).ready(function () {
  $.get("/restaurants.json", function (restaurants) {
    $.each(restaurants, function (index, restaurant) {
      $("<div></div>").text(restaurant.name).appendTo("#restaurants");
    });
  });
});
