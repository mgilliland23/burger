var mysql = require("mysql");

console.log("connecting....");
console.log(PROCESS.ENV.DB_PW);

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.ENV.DB_PW,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;