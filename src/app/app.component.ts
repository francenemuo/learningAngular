import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar-brand-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Course List</a></li>
      </ul>
     </nav>
     <section class='container'>
      <router-outlet></router-outlet>
     </section>
  `
})
//here is the name of our database
export class AppComponent{
  pageTitle: string = 'Embtec Konzultz  Eputu, Lagos'
}