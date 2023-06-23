import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
   <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <ul class = "navbar-nav">
        <li class = "nav-item">
            <a routerLink="employees" routerLinkActive="active" class="nav-link" >Employee List</a>
        </li>
        <li class = "nav-item">
            <a routerLink="add-employee" routerLinkActive="active" class="nav-link" >Add Employee</a>
        </li>
    </ul>
</nav>

<h1 class="text-center"> {{title}} </h1>
<div class = "container">
    <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'EmployeeManagementApp';
  constructor(private route: ActivatedRoute) { }
}
