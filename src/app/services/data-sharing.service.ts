import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private dataSource = new BehaviorSubject<any>('RBPT')
  shareData = this.dataSource.asObservable();

  constructor() { }

  changeData(newData){
    this.dataSource.next(newData)
  }

  
}
