import { Component, OnInit } from '@angular/core';
import { Paper } from 'src/app/uranus/components/paper/paper';
import { PAPERS } from "src/generated/uranus-bibtex"

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styleUrls: ['./publications-page.component.scss']
})
export class PublicationsPageComponent implements OnInit {

  papers!: Paper[];

  constructor() { }

  ngOnInit(): void {
    this.papers = PAPERS;

  }

}
