const { prompt } = require("inquirer");
// const db = require("./db");
// const connection = require("./db/connection");
// const cTable = require('console.table');
const mysql = require("mysql2");

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
        switch(res.choice) {
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
            case 'UPDATE_ROLE':
                updateRole();
                break;
            case 'QUIT':
                quit();
                break;
        }
        // let choices = res.choices;
        // if (choices = "VIEW_EMPLOYEES") {
        //     viewEmployees();
        // } else if (res.choices = "VIEW_DEPARTMENTS") {
        //     console.log(VIEW_DEPARTMENT);
        //     viewDepartments();
        // } else if (choices = "QUIT") {
        //     console.log(choices)

        //     quit()
        // }
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
    connection.query(
        'SELECT * FROM employees.employee', (err, results) => {
            if (err) {
                console.log(err);
            }        
            console.log("\n");    
            console.table(results);
            console.log("\n");    
            mainMenu();
        }
    )}
//     .then(([rows]) => {
//         let employees = rows;
//         console.log("\n");
//         console.table(employees)
// })
// .then(() => mainMenu());
// }
function viewDepartments() {
    connection.query(
        'SELECT * FROM employees.department', (err, results) => {
            if (err) {
                console.log(err);
            }        
            console.log("\n");    
            console.table(results);
            console.log("\n");    
            mainMenu();
        }
    )}

    function viewRoles() {
        connection.query(
            'SELECT * FROM employees.role', (err, results) => {
                if (err) {
                    console.log(err);
                }        
                console.log("\n");    
                console.table(results);
                mainMenu();
            }
        )}

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