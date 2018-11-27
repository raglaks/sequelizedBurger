$(document).ready(function () {

    $(".btn-danger").on("click", function (event) {

        event.preventDefault();

        $.ajax({



        });

    });

    $(".btn-primary").on("click", function (event) {

        event.preventDefault();

        let resObj = {

            name: $("#text").val().trim()

        }

        $.ajax("/add/", {

            type: "POST",
            data: resObj

        }).then(function (result) {

            console.log(`Successfully added burger.`);

            console.log(result);

        });

    });

});