##      An REST API Project. 
####    Library/Framework: Express.js 
####    Database: MySQL

<details>
  <summary>Employee Management API Documentation</summary>
  
    This API allows you to manage employee data.

    Base URL: /api/employee

### Get All Employees
    Endpoint: GET /
    Description: Retrieve a list of all employees.

    Request:

    Method: GET
    URL: /api/employee/
    Response:

    Status Code: 200 OK

  ### Response Body: 
  ```
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
</details>