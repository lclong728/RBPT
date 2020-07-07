import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

  private isCheckedConfirmBtn;

  constructor(private _dataService: DataSharingService) { }

  ngOnInit(): void {
    this._dataService.shareData.subscribe(data => this.isCheckedConfirmBtn = data);
  }

}
