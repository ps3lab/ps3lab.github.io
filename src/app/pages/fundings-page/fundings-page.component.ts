import { Component, OnInit } from '@angular/core';


interface Funding {
  imgSrc: string;
}

@Component({
  selector: 'app-fundings-page',
  templateUrl: './fundings-page.component.html',
  styleUrls: ['./fundings-page.component.scss']
})
export class FundingsPageComponent implements OnInit {

  fundings: Funding[] = [
    {
      imgSrc:"/assets/nsf.png"
    },
    {
      imgSrc:"/assets/darpa.png"
    },
    {
      imgSrc:"/assets/ef.png"
    },
    {
      imgSrc:"/assets/mozilla.png"
    },
    {
      imgSrc:"/assets/otf.png"
    },
    {
      imgSrc:"/assets/w3.png"
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
