const db = require("../models");

module.exports = function (app) {

    app.get("/index", function (req, res) {

        let resObj = {

            eaten: [],
    
            safe: []
    
        }

        db.burgers.findAll({

            raw: true,

            where: {

                devoured: 0

            }

        }).then(function (data) {

            data.forEach(element => {

                resObj.safe.push(element);

            });

            db.customers.findAll({raw: true}).then(function (cusData) {

                cusData.forEach(element => {
    
                    resObj.eaten.push(element);
    
                });
    
            });
    
            console.log(resObj);
            
            res.render("index", resObj);

        });

    });

}