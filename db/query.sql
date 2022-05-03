-- VIEW ALL EMPLOYEES
SELECT employee.id AS ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS Title, department.name AS Department, role.salary AS Salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id

-- VIEW DEPARTMENTS
SELECT department.id AS "Dept ID", department.name AS "Dept Name" FROM department

-- VIEW ROLES
