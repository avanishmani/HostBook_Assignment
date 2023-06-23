import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    template:`
    <h1>Employee Management App</h1>
    <div class="navbar navbar-expand navbar-dark bg-dark text-light navbar-nav">
        
        <!-- <div class="d-flex justify-content-center nav-item">
              <button routerLink="employees" routerLinkActive="active" class="nav-link" class="btn btn-primary mx-auto">Employee List</button>
              <button routerLink="add-employee" routerLinkActive="active" class="btn btn-danger mx-auto">Add Employee</button>
              
            </div> -->
    <ul class = "navbar-nav">
        <li class = "nav-item">
            <a routerLink="employees" routerLinkActive="active" class="nav-link  mx-auto" >Employee List</a>
        </li>
        <li class = "nav-item">
            <a routerLink="add-employee" routerLinkActive="active" class="nav-link  mx-auto" >Add Employee</a>
        </li>
    </ul>
    </div>
   
    <!-- <ul class = "navbar-nav">
        <li class = "nav-item">
            <a routerLink="employees" routerLinkActive="active" class="nav-link" >Employee List</a>
        </li>
        <li class = "nav-item">
            <a routerLink="add-employee" routerLinkActive="active" class="nav-link" >Add Employee</a>
        </li>
    </ul> -->


    `
})
export class HeaderComponent{
    backgroundColor: string = 'Black';
    textColor: string = 'white';
    marginValue: string = '20px';
    paddingValue: string = '2px';
}