const orm = require("../config/orm");

const burger = {

    allBurgers: function (cb) {

        orm.selectAll("burgers", function(res) {

            cb(res);

        });

    },

    newBurger: function (name, devoured, cb) {

        orm.insertOne("burgers", "burger_name", "devoured", name, devoured, function (res) {

            cb(res);

        });

    },

    editBurger: function ( val1, idVal, cb) {

        orm.updateOne("burgers", "devoured", val1, idVal, function (res) {

            cb(res);

        });

    }

}

module.exports = burger;