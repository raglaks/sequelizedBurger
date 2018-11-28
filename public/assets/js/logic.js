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

            let burgC = data;

            $("#results-modal").modal("toggle");

            $("#custSubmit").on("click", function (event, burgC) {

                event.preventDefault();

                let resObj = {

                    custName: $("#custName").val().trim(),
                    burgName: burgC

                }

                console.log(resObj);

            });

        });

    });

    $("#submitBurg").on("click", function (event) {

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

// $("#custSubmit").on("click", function (event) {

//     event.preventDefault();

//     console.log(this);

//     console.log($("#custName").val().trim());

//     console.log($("#text").val().trim());

// });