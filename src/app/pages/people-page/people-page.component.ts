import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/uranus/components/person/person';
import { PEOPLE } from "src/generated/uranus-bibtex";

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
