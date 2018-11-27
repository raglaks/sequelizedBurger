$(document).ready(function () {

    $(".btn-danger").on("click", function (event) {

        event.preventDefault();

        let resObj = {

            clickID: this.id

        }

        $.ajax("/update/", {

            type: "PUT",
            data: resObj

        }).then(function (data) {

            location.reload();

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

            location.reload();

        });

    });

});