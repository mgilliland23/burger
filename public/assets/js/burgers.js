$(function () {
    $(".burger").on("click", function (event) {
        var id = $(this).data("id");
        var state = $(this).data("devoured");
        console.log("state", state);


        var updateSelectedBurger = {
            id: id,
            devoured: state
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateSelectedBurger
        }).then(
            function () {
                console.log("selected burger id:", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
