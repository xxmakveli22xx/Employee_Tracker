const { connection } = require("./db");
const db = require("./db");
const inquirer = require ("inquirer");

// create function in this.index to call from DB file

async function userInput() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "View all employees",
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
    const employees = db.findAllEmployees();
};


