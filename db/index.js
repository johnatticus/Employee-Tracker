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
                {
                    name: "View ALL Employees",
                    value: "VIEW_EMPLOYEES"
                },
                // view Employees
                // view Departments
                // view Roles
                // add Employee
                // add Department
                // update a employee role
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
    })
}