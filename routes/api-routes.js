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

    app.put("/update/", function (req,res) {

        console.log(req.body);

        db.burgers.update({

            devoured: true,

        }, {

            where: {

                id: req.body.clickID

            }

        }).then(function (data) {

            res.json("OK");

        });

    });

}