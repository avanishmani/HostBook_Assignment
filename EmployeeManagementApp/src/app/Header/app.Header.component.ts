import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    template:`
    <div class="navbar navbar-expand navbar-dark bg-dark text-light">
        <h1>Employee Management App</h1>
    </div>`
})
export class HeaderComponent{
    backgroundColor: string = 'Black';
    textColor: string = 'white';
    marginValue: string = '20px';
    paddingValue: string = '2px';
}