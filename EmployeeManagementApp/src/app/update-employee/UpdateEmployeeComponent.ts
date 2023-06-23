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
                        <input type="text" class="form-control" id="Employee_FirstName" [(ngModel)]="employee.Employee_FirstName"
                            name="Employee_FirstName">
                    </div>

                    <div class="form-group">
                        <label> Last Name</label>
                        <input type="text" class="form-control" id="Employee_LastName" [(ngModel)]="employee.Employee_LastName"
                            name="Employee_LastName">
                    </div>

                    <div class="form-group">
                        <label> Email Id</label>
                        <input type="text" class="form-control" id="Employee_Email" [(ngModel)]="employee.Employee_Email"
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

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}