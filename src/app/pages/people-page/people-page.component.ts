import { Component, OnInit } from '@angular/core';
import { PEOPLE } from "src/generated/uranus-bibtex"
import { Person } from '@theogonic/uranus';
@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {

  people!: Person[];

  groupsConfig = {
    Alumni: "text-only"
  }

  constructor() { }

  ngOnInit(): void {
    this.people = PEOPLE;
  }

}
