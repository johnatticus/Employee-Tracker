const { prompt } = require("inquirer");
// const db = require("./db");
// const connection = require("connection");
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
        if (choices = "VIEW EMPLOYEES") {
            viewEmployees()
        }
        // now we call the appriopriate function depending on what the user chooses
        // how would we organize this?
        // if conditional?
        // switch/case?
        // when?
    })
}

function addDepartment() {
    prompt([
                {
                    type: "input",
                    name: "newDepartmentName",
                    message: "Enter name of new department:"
                }
    ]).then(res => {
        let choices = res.choices;
        // now we call the appriopriate function depending on what the user chooses
        // how would we organize this?
        // if conditional?
        // switch/case?
        // when?
    })

    function addRole() {
        prompt([
                    {
                        type: "input",
                        message: "Enter name of new role:",
                        name: "newRoleName"
                    },
                    {
                        type: "input",
                        message: "Enter salary of this role:",
                        name: "newRoleSalary"
                    },
                    {
                        type: "input",
                        message: "Enter the department this role belongs to:",
                        name: "newRoleDepartment"
                    }
        ]).then(res => {
            let choices = res.choices;
            // now we call the appriopriate function depending on what the user chooses
            // how would we organize this?
            // if conditional?
            // switch/case?
            // when?
        })
    }}

    function addEmployee() {
        prompt([
                    {
                        type: "input",
                        message: "Enter first name:",
                        name: "newEmployeeFirstName"
                    },
                    {
                        type: "input",
                        message: "Enter last name:",
                        name: "newEmployeeLastName"
                    },
                    {
                        type: "input",
                        message: "Enter the employee's role:",
                        name: "newEmployeeRole"
                    },
                    {
                        type: "input",
                        message: "Enter the employee's manager:",
                        name: "newEmployeeManager"
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

    function updateRole() {
        prompt([
                    {
                        type: "input",
                        message: "Enter first name:",
                        name: "newEmployeeFirstName"
                    },
                    {
                        type: "input",
                        message: "Enter last name:",
                        name: "newEmployeeLastName"
                    },
                    {
                        type: "input",
                        message: "Enter the employee's role:",
                        name: "newEmployeeRole"
                    },
                    {
                        type: "input",
                        message: "Enter the employee's manager:",
                        name: "newEmployeeManager"
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

// async function viewEmployees() {
//     let employees = await db.findAllEmployees();
//     console.table(employees);
// }

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
})
.then(() => mainMenu());
}

function init() {
    console.log(" _______ _______  _____          _____  __   __ _______ _______\r\n |______ |  |  | |_____] |      |     |   \\_\/   |______ |______\r\n |______ |  |  | |       |_____ |_____|    |    |______ |______\r\n                                                               \r\n _______  ______ _______ _______ _     _ _______  ______       \r\n    |    |_____\/ |_____| |       |____\/  |______ |_____\/       \r\n    |    |    \\_ |     | |_____  |    \\_ |______ |    \\_");
    console.log("Welcome to Employee Tracker. Enjoy tracking your employees.");
    mainMenu();
}

function quit() {
    console.log("Thank you tracking your employees.");
    process.exit();
}

init();