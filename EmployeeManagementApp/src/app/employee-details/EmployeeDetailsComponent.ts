import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router'; // Fix import typo
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h3>View Employee Details</h3>
    <div *ngIf="employee">
    <div>
        <label><b> Employee-ID:   </b></label> {{ employee.employee_ID }}
      </div>
      <div>
        <label><b> First Name:   </b></label> {{ employee.employee_Firstname }}
      </div>
      <div>
        <label><b> Last Name:   </b></label> {{ employee.employee_Lastname }}
      </div>
      <div>
        <label><b> Email Id:   </b></label> {{ employee.employee_Email }}
      </div>
    </div>
  `,
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
     
      this.employee = data;
      console.log(this.employee);
    });
  }
}
