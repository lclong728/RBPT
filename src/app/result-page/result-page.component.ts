import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  key: string;
  value: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {key:'ROAC at Customer Group Relationship Level', value:-0.0202},
  {key:'Regulatory Capital', value:159.03},
  {key:'Group Average LGD (ROAC methodology)', value:7.172},
  {key:'Expected Credit Loss', value:4.86},
  {key:'Economic Capital', value:49.05},
  {key:'RAROC at Coutomer Group Relationship Level', value:-0.0006},
  {key:'Parameters applied to Customer Group Level ROAC', value:'CNCBI'},

];



@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns = ['key', 'value']
  constructor() { }

  ngOnInit(): void {
  }

}
