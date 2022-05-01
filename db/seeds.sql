USE employees;

-- insert entries into department --
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
("Senior Developer, 100000, 1"),
("HR Business Partner, 150000, 1"),
("Operations Manager, 100000, 1"),
("Lawyer, 90000, 1");



INSERT INTO employees
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
