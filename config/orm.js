const connection = require("./connection");

const orm = {

    selectAll: function (tableName, cb) {

        let queryString = "SELECT * FROM ??;";

        connection.query(queryString, tableName, function (err, result) {

            if (err) throw err;

            cb(result);

        });

    },

    insertOne: function (tableName, col1, col2, name, devoured, cb) {

        let queryString = "INSERT INTO ??(??, ??) VALUES (?, ?);";

        connection.query(queryString, [tableName, col1, col2, name, devoured], function (err, result) {

            if (err) throw err;

            cb(result);

        });

    },

    updateOne: function (tableName, col1, val1, idVal, cb) {

        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";

        connection.query(queryString, [tableName, col1, val1, idVal], function (err, result) {

            if (err) throw err;

            cb(result);

        });
        
    }

}

module.exports = orm;

