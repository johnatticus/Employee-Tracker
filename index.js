const { prompt } = require("inquirer");
const cTable = require('console.table');
const connection = require('./db/connection')
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "rootroot",
//     database: "employees"
// });

// // set up error handling in case the connection fails/breaks
// connection.connect(function (err) {
//     if (err) throw (err);
// });

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
    });
}

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

function addEmployee() {
    connection.query('SELECT role.title FROM employees.role', (err, results) => {
        if (err) throw err;
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
                        type: "list",
                        message: "Enter the employee's role:",
                        name: "newEmployeeRole",
                        choices: results.map(a => a.title)
                    }
        ]).then(res => {
            let choices = res.choices;
            connection.query(
                `INSERT INTO employee (first_name, last_name) VALUES ("${res.newEmployeeFirstName}", ${res.newEmployeeLastName})`, (err, results) => {
                    if (err) {
                        console.log(err);
                    }        
                    console.log(`Successfully added the new employee.`)
                    console.log("\n");    
                    console.table(results);
                    console.log("\n");    
                    mainMenu();
                }
            )
        });
    });
    }

function addDepartment() {
    prompt([
                {
                    type: "input",
                    name: "newDepartmentName",
                    message: "Enter name of new department:"
                }
    ]).then(res => {
        let choices = res.newDepartmentName;
        // console.log(choices)
        connection.query(
            `INSERT INTO department (name) VALUES ("${choices}")`, (err, results) => {
                if (err) {
                    console.log(err);
                }        
                console.log(`Successfully added ${choices} as a new department.`)
                console.log("\n");    
                console.table(results);
                console.log("\n");    
                mainMenu();
            }
        )
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
            // let choices = res.newDepartmentName;
            // console.log(choices)
            connection.query(
                `INSERT INTO role (title, salary, department_id) VALUES ("${res.newRoleName}", ${res.newRoleSalary}, ${res.newRoleDepartment})`, (err, results) => {
                    if (err) {
                        console.log(err);
                    }        
                    console.log(`Successfully added the new role.`)
                    console.log("\n");    
                    console.table(results);
                    console.log("\n");    
                    mainMenu();
                }
            )
            // now we call the appriopriate function depending on what the user chooses
            // how would we organize this?
            // if conditional?
            // switch/case?
            // when?
        })
}}

function updateRole() {
    connection.query('SELECT role.title FROM employees.role', (err, results) => {
        if (err) throw err;
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
                        type: "list",
                        message: "Enter the employee's role:",
                        name: "newEmployeeRole",
                        choices: results.map(a => a.title)
                    }
        ]).then(res => {
            let choices = res.choices;
            connection.query(
                `INSERT INTO employee (first_name, last_name) VALUES ("${res.newEmployeeFirstName}", ${res.newEmployeeLastName}, )`, (err, results) => {
                    if (err) {
                        console.log(err);
                    }        
                    console.log(`Successfully added the new employee.`)
                    console.log("\n");    
                    console.table(results);
                    console.log("\n");    
                    mainMenu();
                }
            )
        });
    });
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