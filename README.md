# Mean-Employees
Mean Stack Crud EmployeesApp




###

GET http://localhost:3100/api/employees HTTP/1.1

###

POST http://localhost:3100/api/employees HTTP/1.1
Content-Type: application/json

{
    "name": "Ryan Ray",
    "position": "Snr. Developer",
    "office": "Rome",
    "salary": "22000"
}

### 

GET http://localhost:3100/api/employees/5b0624a7abcb202a3af189b6 HTTP/1.1

###

PUT http://localhost:3100/api/employees/5b0624a7abcb202a3af189b6
Content-Type: application/json

{
    "name": "Joe McMillan",
    "position": "Digital Marketing Manager",
    "office": "California",
    "salary": "20000"
}

###
DELETE http://localhost:3100/api/employees/5b0627e6edb8f82dcc1486ff
