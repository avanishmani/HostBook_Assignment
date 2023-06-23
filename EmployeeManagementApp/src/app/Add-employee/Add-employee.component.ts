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
                        <input type="text" class="form-control" id="employee_FirstName" [(ngModel)]="employee.Employee_FirstName"
                            name="employee_FirstName">
                    </div>

                    <div class="form-group">
                        <label> Last Name</label>
                        <input type="text" class="form-control" id="employee_LastName" [(ngModel)]="employee.Employee_LastName"
                            name="employee_LastName">
                    </div>

                    <div class="form-group">
                        <label> Email Id</label>
                        <input type="text" class="form-control" id="employee_Email" [(ngModel)]="employee.Employee_Email"
                            name="employee_Email">
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
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}