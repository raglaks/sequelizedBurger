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

            let burgC = data[0].name;

            $("#results-modal").modal("toggle");

            $("#custSubmit").on("click", function (event) {

                event.preventDefault();

                let resObj = {

                    custName: $("#custName").val().trim(),
                    burgName: burgC

                }

                $.ajax("/customer/add/", {

                    type: "POST",
                    data: resObj
        
                }).then(function (result) {

                    //$("#results-modal").modal("toggle");
        
                    location.reload();
        
                });

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

