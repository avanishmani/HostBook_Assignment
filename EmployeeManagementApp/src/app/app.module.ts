import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeComponent } from './Add-employee/Add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/UpdateEmployeeComponent';
import { EmployeeDetailsComponent } from './employee-details/EmployeeDetailsComponent';


import { EmployeeService } from './employee.service';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, EmployeeTableComponent, AddEmployeeComponent, UpdateEmployeeComponent, EmployeeDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
