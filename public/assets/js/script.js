// AJAX call to run on click, after DOM is loaded
// $(".devour-burger").click(function() {
//     console.log("this button ran");
// });

$(document).ready(function () {
//   alert("hello");

$(".devour-burger").on("click", function (event) {
    alert("this button worked");
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevState = {
        devoured: newDevour
    };

    $.ajax("api/burgers/" + id, {
        type: "PUT",
        data: newDevState
    }).then(
        function() {
            location.reload();
        }
    );
  });

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        name: $("#newBurg").val().trim(),
        devoured: 0
    };
    console.log("value of newBurger = " + newBurger);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
        console.log("created new burger" + newBurger.name)
        location.reload();
        }
    );
});

}); //end entire call

