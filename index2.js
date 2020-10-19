const mysql = require("mysql");
const inquirer = require ("inquirer");
require('dotenv').config();


const connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: process.env.sqlpassword,
    database: "employees" 

 });

 connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    userInput();
  });



async function userInput() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "Show all employees",
            "View all roles",
            "View all departments",
            "Add employee",
            "Add role",
            "Add department",
            "Update employee role",
            "Remove employee",
            "Exit"
        ]
    }).then(function(answer) {
        console.log(answer);
        // Switch statement for user selection 
        switch (answer.choice) {
            case "Show all employees":
                viewEmployee();
                break;

            case "Show employee roles":
                showRoles();
                break;

            case "Show the departments":
                departments();
                break;

          /*  case "Add employee":
                addEmployee();
                break;

           case "Add role":
                addRole();
                break;

            case "Add department":
                addDepartment();
                break;

            case "Update employee role":
                updateRole();
                break;

            case "Remove employee":
                removeEmployee();
                break;
             */
            case "Exit":
                console.log("Done for right now!");
                connection.end();
                break;
        }
    })
};


function viewEmployee(){
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", 
    function (err, res) {
      console.table(res);
      if (err) throw err;
      userInput();
    });
};