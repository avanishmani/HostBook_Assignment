import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Serial_NO</th>
          <th scope="col">Employee_First_Name</th>
          <th scope="col">Employee_Last_Name</th>
          <th scope="col">Employee_Email ID</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let employee of employees; index as i">
          <th scope="row">{{ i+1 }}</th>
          <td>{{ employee.employee_FirstName }}</td>
          <td>{{ employee.employee_LastName }}</td>
          <td>{{ employee.employee_Email }}</td>
          <td>
            <div class="d-flex justify-content-center">
              <button (click)="updateEmployee(employee.employee_ID)" class="btn btn-primary mx-auto">Update</button>
              <button (click)="deleteEmployee(employee.employee_ID)" class="btn btn-danger mx-auto">Delete</button>
              <button (click)="employeeDetails(employee.employee_ID)" class="btn btn-primary mx-auto">View</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class EmployeeTableComponent  implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
        console.log(data); // Log the data received from the API
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
 

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
