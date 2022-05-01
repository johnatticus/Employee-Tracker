const { Prompt } = require("inquirer");
const db = require("./db");
require("console.table");

// inquirer here
function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            choices: [
                // view Employees

                {
                    name: "View ALL Employees",
                    value: "VIEW_EMPLOYEES"
                },
                // view Departments
                {
                    name: "View Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                // view Roles
                {
                    name: "View Roles",
                    value: "VIEW_ROLES"
                },
                // add Employee
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                // add Department
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                // update a employee role
                {
                    name: "Update Employee Role",
                    value: "UPDATE_ROLE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        // now we call the appriopriate function depending on what the user chooses
        // how would we organize this?
        // if conditional?
        // switch/case?
        // when?
    })
}

// conditional statements here - call cooresponding function

async function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
})
.then(() => mainMenu());
}