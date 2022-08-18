import { Component } from '@angular/core';
import { NavbarItem } from './uranus/components/navbar/navbar-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: NavbarItem[] = [
    {
      name: "People",
      link: "people"
    },
    {
      name: "Publications",
      link: "publications"
    },
    {
      name: "Fundings",
      link: "fundings"
    }
  ]
}
