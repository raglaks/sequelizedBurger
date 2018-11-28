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

        db.burgers.update({

            devoured: true,

        }, {

                where: {

                    id: bId

                }

            }).then(function (bId) {

                db.burgers.findAll({

                    where: {

                        id: bId

                    }

                }).then(function (data) {

                    res.json(data[0].name);

                });

            });

    });

    app.post("/customer/add/", function (req, res) {

        db.customers.create({

            cname: req.body.custName,
            bname: req.body.burgName,

        }).then(function(data) {

            res.json(data);

        })

    });

}