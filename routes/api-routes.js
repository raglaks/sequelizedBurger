const db = require("../models");

module.exports = function (app) {

    app.get("/api/burgers/", function (req, res) {

        db.burgers.findAll({}).then(function (data) {

            res.json(data);

        });

    });

    app.post("/add/", function (req, res) {

        db.burgers.create({

            name: req.body.name

        }).then(function (data) {

            res.json(data);

        });

    });

    app.put("/update/", function (req, res) {

        let bId = req.body.clickID

        console.log(bId);

        db.burgers.update({

            devoured: true,

        }, {

                raw: true,

                where: {

                    id: bId

                }

            }).then(function () {

                console.log(bId);

                db.burgers.findAll({

                    raw: true,

                    where: {

                        id: bId

                    }

                }).then(function (data) {

                    console.log(bId);

                    res.json(data);

                });

            });

    });

    app.post("/customer/add/", function (req, res) {

        db.customers.create({

            cname: req.body.custName,
            bname: req.body.burgName,

        }).then(function (data) {

            res.json(data);

        })

    });

}