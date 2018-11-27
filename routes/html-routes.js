const db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {

        db.burgers.findAll({}).then(function (data) {

            let resObj = {

                eaten: [],

                safe: []

            }

            data.forEach(element => {

                if (element.dataValues.devoured === 1 || element.dataValues.devoured === true) {

                    resObj.eaten.push(element.dataValues);

                } else {

                    resObj.safe.push(element.dataValues);

                }

            });

            console.log(resObj);

            res.render("index", resObj);

        });

    });

}