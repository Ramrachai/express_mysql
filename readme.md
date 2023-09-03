# Project Name: Pudding
# Technologies: Express.js , MySQL 

## Employee Management API Documentation

This API allows you to manage employee data in a MySQL database.

<details>
  <summary><strong>Table of Contents</strong></summary>

  - [Introduction](#introduction)
  - [API Endpoints](#api-endpoints)
    - [1. Get All Employees](#1-get-all-employees)
    - [2. Get Employee by ID](#2-get-employee-by-id)
    - [3. Delete Employee by ID](#3-delete-employee-by-id)
    - [4. Add Employee](#4-add-employee)
    - [5. Update Employee by ID](#5-update-employee-by-id)
  - [Usage](#usage)
  - [Error Handling](#error-handling)
  - [Contributing](#contributing)
  - [License](#license)

</details>


<strong>Introduction</strong>

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records in the database. It provides endpoints to manage employee information, including adding new employees, retrieving employee details, updating employee data, and deleting employees.

<strong>Installation </strong>
  1. Clone the repository: 
      ~~~
      git clone https://github.com/Ramrachai/express_mysql.git
      ~~~
  2. install packages:
     ~~~
     npm install
     ~~~
  3. create .env and set environment variables to connect with database:
     ~~~
      DATABASE_HOST=""
      DATABASE_NAME=""
      DATABASE_USER=""
      DATABASE_PASSWORD=""
      DATABASE_PORT=""
      SERVER_PORT=""
     ~~~
  4. start the server:
     ~~~
     npm start
     ~~~

**Base URL:** `/api/employee`


<strong>API Endpoints</strong>

<details>
  <summary><strong>1. Get All Employees</strong></summary>

  - **Endpoint:** `GET /`

  **Description:** Retrieve a list of all employees.

  **Request:**

  - Method: GET
  - URL: `/api/employee/`

  **Response:**

  - Status Code: 200 OK
  - Response Body:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "employee_code": "EMP001",
        "salary": 50000
      },
      // More employee objects...
    ]
</details>


<details>
  <summary><strong>2. Get Employee by ID</strong></summary>

  - **Endpoint:** `GET /:id`

  **Description:** Retrieve a single employee by their ID.

  **Request:**

  - Method: GET
  - URL: `/api/employee/:id`

  **Response:**

  - Status Code: 200 OK
  - Response Body(if found):
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "employee_code": "EMP001",
        "salary": 50000
      },
      // More employee objects...
    ]
    ```
  - Status Code: 404 Not Found (if employee is not found)
  - Response Body(if not found):
      ```json
      {
        "error": "404! No record found with id: <id>"
      }
      ```
</details>


<details>
  <summary><strong>3. Delete Employee by ID</strong></summary>

  - **Endpoint:** `DELETE /:id`

  **Description:** Delete an employee by their ID.

  **Request:**

  - Method: DELETE
  - URL: `/api/employee/:id`
  - URL Parameters:
    - id (integer): The unique identifier of the employee.

  **Response:**

  - Status Code: 200 OK (if employee is deleted)
  - Response Body(if found):
    ```json
    {
      "Deleted Successfully"
    }
    ```
  - Status Code: 400 Bad Request (if employee is not found)
  - Response Body(if not found):
      ```json
      {
        "error": "Sorry! id: <id> not found to delete"
      }
      ```
</details>


<details>
  <summary><strong>4. Add Employee</strong></summary>

  - **Endpoint:** `POST /`

  **Description:** Add a new employee.

  **Request:**

 - Method: POST
 - URL: `/api/employee/`
 - Request body (JSON): 
   ``` json

    {
      "name": "Jane Smith",
      "employee_code": "EMP002",
      "salary": 60000
    }

   ```
 
  **Response:**

  - Status Code: 201 Created (if employee is added successfully)
  - Response Body(if found):
    ```json
    {
      "Employee Added Successfully"
    }
    ```
  - Status Code: 400 Bad Request (if employee already exists)
  - Response Body:
      ```json
      {
        "Sorry! Employee Creation Failed."
      }
      ```
</details>

<details>
  <summary><strong>5. Update Employee by ID</strong></summary>

  - **Endpoint:** `PUT /:id`

  **Description:** Update an employee's information by their ID.

  **Request:**

  - Method: PUT
  - URL: `/api/employee/:id`
  - URL Parameters:
  - id (integer): The unique identifier of the employee.
  - Request Body (JSON):
   ``` json

    {
      "name": "Updated Name",
      "employee_code": "EMP002",
      "salary": 70000
    }

   ```
 
  **Response:**

  - Status Code: 200 OK (if employee is updated successfully)
  - Response Body:
    ```json
    {
      "Employee Updated Successfully"
    }
    ```
  - Status Code: 400 Bad Request (if employee is not found or update fails)
  - Response Body:
      ```json
      {
        "Sorry! Employee Updating failed"
      }
      ```
</details>


<details>
  <summary><strong>Usage</strong></summary>
  To use this API, make HTTP requests to the provided endpoints. You can use tools like curl, Postman, or write code in your preferred programming language to interact with the API.
</details>


<details>
  <summary><strong>Error Handling</strong></summary>
  The API returns appropriate HTTP status codes and error messages for various scenarios, such as not finding a resource or encountering a validation error.
</details>


<details>
  <summary><strong>Contributing</strong></summary>
  Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.
  </details>

<details>
  <summary><strong>License</strong></summary>
  This project is licensed under the MIT License.
</details>


