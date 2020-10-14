const { connection } = require("./db");


const db = require("./db");
const inquirer = require ("inquirer");

// create function in this.index to call from DB file

function viewEmployee(){
    const employees = db.findAllEmployees();
}
