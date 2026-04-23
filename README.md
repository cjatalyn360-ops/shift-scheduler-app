# Shift Scheduling Web App

## Current Status
This project is currently in development.

### Planned Features
- Full calendar UI integration
- Add/edit/delete shifts connected to MySQL
- Employee management system
- Improved scheduling visualization

## Description
A full-stack web application for managing employee work schedules. Users can add, edit, and remove shifts, with data stored in a MySQL database.

## Features
- Add, edit, and delete employee shifts
- Store shift data (date, start time, end time)
- Connects to MySQL database for persistent storage
- Dynamic front-end interface for viewing schedules

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- MySQL
- MySQL Workbench

## How to Run the Project

## Installation

1. Clone the repository
2. Open the project in VS Code
3. Install Live Server extension
4. Install dependencies, run this in VS CODE project terminal:
   npm install mysql2
5. run command 'node Server.js' to initialize connection with the server
6. On Dashboard.html, right click to open with Live Server extension


### 1. Set Up Database
- Open MySQL Workbench
- Create a database (e.g., `shift_scheduler`)
- Create required tables (`employees`, `shifts`)
- Import or run provided SQL script below

## Script Setup

create and execute the following SQL commands in MySQL Workbench:

1. CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  date_of_birth DATE,
  position VARCHAR(100),
  hourly_wage DECIMAL(10,2),
  email VARCHAR(100),
  phone_number VARCHAR(20)
);

2. CREATE TABLE shifts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT,
  shift_date DATE,
  start_time TIME,
  end_time TIME,
  FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

3. INSERT INTO employees 
(first_name, last_name, date_of_birth, position, hourly_wage, email, phone_number)
VALUES
('John','Doe','1997-03-15','Server','14.30','john.doe@tasktopus.com','123-456-7890'),
('Jane','Doe','1999-07-19','Host','13.60','jane.doe@tasktopus.com','123-456-7891');



## Notes
- Ensure MySQL server is running before starting the app
- Backend must be running for the app to function

## Author
Connor Prout (Group Project)
