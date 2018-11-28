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

        let sName = $("#text").val().trim();

        if (sName == "") {

            $("#warn").text("CANNOT SUBMIT EMPTY STRINGS. PLEASE NAME A BURGER.");

        } else {

            $("#warn").text("");

            let resObj = {

                name: sName
    
            }
    
            $.ajax("/add/", {
    
                type: "POST",
                data: resObj
    
            }).then(function (result) {
    
                location.reload();
    
            });

        }

    });

});

