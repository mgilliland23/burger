// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (burgerName, callback) {
        orm.insertOne(burgerName, function (res) {
            callback(res);
        });
    },
    updateOne: function (burgerID, devoured_state, callback) {
        orm.updateOne(burgerID, devoured_state, function (res) {
            callback(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
