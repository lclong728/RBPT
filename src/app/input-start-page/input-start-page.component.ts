import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-input-start-page',
  templateUrl: './input-start-page.component.html',
  styleUrls: ['./input-start-page.component.css']
})
export class InputStartPageComponent implements OnInit {

  confirmedPolicy = false;

  constructor(private dataService: DataSharingService) { }

  ngOnInit(): void {
    this.dataService.changeData(this.confirmedPolicy);
  }

  isConfirmedPolicy(event){
    if (event.checked){
      this.confirmedPolicy = true;
    } else {
      this.confirmedPolicy = false;
    }
    this.dataService.changeData(this.confirmedPolicy);
  }



}
