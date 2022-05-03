const mysql = require("mysql2");

// connection to the local host
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees"
});

// set up error handling in case the connection fails/breaks
connection.connect(function (err) {
    if (err) throw (err);
});


module.exports = connection;