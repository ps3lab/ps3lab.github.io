import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'uranus-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input()
  person!: Person;

  @Input()
  mode: "simple" | "card" = "card";

  constructor() { }

  ngOnInit(): void {
  }

  openInNewTab(link: string | null | undefined){
    if(link)
    window.open(link);
  }

}
