import { Component, OnInit } from '@angular/core';
import { PAPERS } from "src/generated/uranus-bibtex"
import { Paper } from '@theogonic/uranus';

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
