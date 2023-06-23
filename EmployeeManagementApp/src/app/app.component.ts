import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>

<div class = "container">
<h1 class="text-center"> {{title}} </h1>
    <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'EmployeeManagementApp';
  constructor(private route: ActivatedRoute) { }
}
