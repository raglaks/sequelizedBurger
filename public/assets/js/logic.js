$(document).ready(function() {

    $(".btn-danger").on("click", function (event) {

        event.preventDefault();

        let ID = this.id;

        $.ajax("/api/burgers/" + ID, {

            type: "PUT",
            data: true

        }).then(function () {

            console.log("tasty");

            location.reload();

        });

    });

    $(".btn-primary").on("click", function (event) {

        event.preventDefault();

        let newBurg = {

            burger_name: $("#text").val().trim()

        }

        $.ajax("/api/burgers", {

            type: "POST",

            data: newBurg

        }).then(function () {

            console.log("Added new burger.");

            location.reload();
        });

    });

});