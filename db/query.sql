-- VIEW ALL EMPLOYEES
SELECT employee.id AS ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS Title, department.name AS Department, role.salary AS Salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id

-- VIEW DEPARTMENTS
SELECT department.id AS "Dept ID", department.name AS "Dept Name" FROM department

-- VIEW ROLES


-- UPDATE ROLES
SELECT employee.first_name AS firstname, employee.last_name AS lastname, employee.id AS empId, employee.role_id AS empRoleId, role.title AS role FROM employee JOIN role ON employee.role_id = role.id