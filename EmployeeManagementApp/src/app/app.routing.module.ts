import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeComponent } from './Add-employee/Add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/UpdateEmployeeComponent';
import { EmployeeDetailsComponent } from './employee-details/EmployeeDetailsComponent';

const routes: Routes = [
  { path: 'employees', component: EmployeeTableComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
