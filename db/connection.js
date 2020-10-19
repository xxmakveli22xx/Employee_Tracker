const util = require("util");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "Ryker$12",
    database: "employees" 

    

 });

 connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    userInput();
  });


 connection.query = util.promisify(connection.query);

 module.exports = connection;