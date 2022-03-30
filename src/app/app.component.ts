import { Component } from '@angular/core';
import { NavbarItem } from '@theogonic/uranus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: NavbarItem[] = [
    {
      name: "Home",
      link: ""
    },
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
