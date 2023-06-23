# HostBook_Assignment

# SPRINGBOOT + ANGULAR (CRUD)
developing a backend API  and Integrating it with Angular for Basic CRUD Operation using Java Spring Boot and Angular. 

# Problem Statement.

This API allows users to perform CRUD operations on Employee entity Class.

## Requirements

- Create an Employee entity with the following attributes:
  - employee_ID (auto-generated)
  - employee_FirstName
  - employee_LastName
  - employee_Email
 
- Implement CRUD (Create, Read, Update, Delete) operations for the Employee entity using RESTful endpoints.


# Technology and Tools used 

- Java
- MySQL
- Spring Boot
- Spring Data JPA
- Hibernate
- Lombok
- Swagger
- Maven
- Git & GitHub
- Spring tool suite
- Angular
- Node Package Manager
- BootStrap


## Installation & Run

* Before running the API server, you should update the database config inside the [application.properties]([https://github.com/avanishmani/HostBook_Assignment/blob/main/HostBook/src/main/resources/application.properties) file. 
* Update the port number, username and password as per your local database config.

```
    server.port=8888
    spring.datasource.url=jdbc:mysql://localhost:3306/hostbook;
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.datasource.username=root
    spring.datasource.password=root
```


# Features (http://localhost:8888/swagger-ui/#/)


# Angular_Portion


## Installation & Run
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.   to know in your system (ng version)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Author

- [Avanish Mani Tripathi](https://github.com/avanishmani)

