USE employees;

INSERT INTO department
    (name)
VALUES
("Sales"),
("Marketing"),
("Finance"),
("Legal"),
("Engineering");

INSERT INTO role
(title, salary, department_id)
VALUES
("Senior Developer, 95000, 1"),
("Junior Developer, 60000, 2"),
("HR Business Partner, 150000, 3"),
("Operations Manager, 100000, 4"),
("Lawyer, 90000, 5");

INSERT INTO employee
(first_name, last_name, role_id)
VALUES
("Thad", "Jarvis", 1),
("Dee", "Reynolds", 2),
("Tairy", "Green", 3),
("Jan", "Skylar", 4),
("Barty", "Crouch Jr", 5),
("Chip", "Baskets", 6),
("Bill", "Adama", 7),
("Jack", "Decker", 8),
("Steve", "Mahanahan", 9),
("Steve", "Brule", 10);
