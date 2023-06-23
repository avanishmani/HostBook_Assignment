import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  template:`
  <div class="row">
    <div class="card col-md-6 offset-md-3 offset-md-3">
        <div class="row">
            <h3 class="text-center"> Update Employee </h3>
            <hr />
            <div class="card-body">
                <form (ngSubmit)="onSubmit()">

                    <div class="form-group">
                        <label> First Name</label>
                        <input type="text" class="form-control" id="Employee_FirstName" [(ngModel)]="employee.employee_Firstname"
                            name="Employee_FirstName">
                    </div>

                    <div class="form-group">
                        <label> Last Name</label>
                        <input type="text" class="form-control" id="Employee_LastName" [(ngModel)]="employee.employee_Lastname"
                            name="Employee_LastName">
                    </div>

                    <div class="form-group">
                        <label> Email Id</label>
                        <input type="email" class="form-control" id="Employee_Email" [(ngModel)]="employee.employee_Email"
                            name="Employee_Email">
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
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
console.log(this.id+"  is the id that i recievd from url");
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      // console.log(data);
      this.employee = data;
    });
  }

  onSubmit(){
   
    this.employeeService.updateEmployee( this.employee,this.id).subscribe(
      (data: Employee) => {
        console.log(data); // Log the updated employee details received from the backend
        this.goToEmployeeList();
      },
      (error: any) => {
        console.log(error); // Handle any errors that occurred during the API call
      }
    );
   
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}