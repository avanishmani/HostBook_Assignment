import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  template: `
    <div class="row">
      <div class="card col-md-6 offset-md-3 offset-md-3">
        <div class="row">
          <h3 class="text-center"> Create Employee </h3>
          <hr />
          <div class="card-body">
            <form (ngSubmit)="onSubmit()">

              <div class="form-group">
                <label> First Name</label>
                <input type="text" class="form-control" [(ngModel)]="employee.Employee_FirstName" name="employee_FirstName">
              </div>

              <div class="form-group">
                <label> Last Name</label>
                <input type="text" class="form-control" [(ngModel)]="employee.Employee_LastName" name="employee_LastName">
              </div>

              <div class="form-group">
                <label> Email Id</label>
                <input type="text" class="form-control" [(ngModel)]="employee.Employee_Email" name="employee_Email">
              </div>

              <br />
              <button class="btn btn-success" type="submit">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {}

  saveEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data: Employee) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    this.saveEmployee();
  }
}
