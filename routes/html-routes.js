const db = require("../models");

module.exports = function(app) {

    app.get("/", function (req, res) {

        db.burgers.findAll({}).then(function(data) {

            res.render("index");

        });

    });

}