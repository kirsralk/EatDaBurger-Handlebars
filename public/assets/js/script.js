// AJAX call to run on click, after DOM is loaded
// $(".devour-burger").click(function() {
//     console.log("this button ran");
// });

$(document).ready(function () {
  alert("hello");

  $(".devour-burger").on("click", function (event) {
    alert("this button worked");
  });
}); //end entire call
