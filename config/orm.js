var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    insertOne: function (burgerName, callback) {
        var queryString = "INSERT INTO burgers (??, False)";
        console.log(queryString);
        connection.query(queryString, [burgerName],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                callback(result);
            });
    },
    updateOne: function (burgerName, callback) {
        var queryString =
            "UPDATE burgers SET devoured = TRUE WHERE burgerName = ??";

        connection.query(
            queryString, [burgerName],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                callback(result);
            }
        );
    }
};

module.exports = orm;