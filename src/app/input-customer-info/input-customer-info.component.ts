import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Borrower } from '../model/borrower';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-input-customer-info',
  templateUrl: './input-customer-info.component.html',
  styleUrls: ['./input-customer-info.component.css']
})
export class InputCustomerInfoComponent implements OnInit {

  selectedCustomerGroup: String = null;
  customerGroupStatement: String = '';
  customerGroupList = [
    {'name': "0 - General Customer", 'id': 0, 'statement': ""},
    {'name': "1 - Investment Grade", 'id': 1, 'statement': " (i.e. Internal Rating G01 to G10, equivalent to External Rating AAA to BBB-) (i) On a borrowing group basis for general facilities or (ii) On an underlying acquisition target or a borrowing group in a M&A/ Structure Finance transactions, as applicable and subject to case-by-case considerations"},
    {'name': "2 - Non-Investment Grade", 'id': 2, 'statement': " (i.e. Internal Rating G11 to G18, equivalent to External Rating BB+ to CCC) (i) On a borrowing group basis for general facilities or (ii) On an underlying acquisition target  or a borrowing group in a M&A/ Structured Finance transactions, as applicable and subject to case-by-case considerations"},
    {'name': "3 - Restricted to M&A/Structured transactions", 'id': 3, statement: "based on a typical robust financing structure, where (i) Internal Rating G01 to G13, equivalent to External Rating Ba3/ BB-; and (ii) An EBITDA of approximately HKD 3bn (or equivalent) or more in respect of the underlying acquisition target or a borrowing group in a M&A/ Structured Finance transactions, as applicable. The requirement of EBITDA is not applicable to Real Estate Companies"},
  ]

  isBorrowerInit = false;
  borrowerNumber  = 0;
  maxBorrowerId = 0;
  borrowerDataSource: MatTableDataSource<Borrower> = new MatTableDataSource([]);
  borrowerColumns = [
    'id', 'borrowerName', 'customerId', 'customerType', 'turnover', 
    'internalRating','externalRatingLocal', 'externalRatingForeign',
    'sovereignCurrency', 'sovereignRatingLocal', 'sovereignRatingForeign',
    'group', 'totalDebtOverAsset', 'mitigation', 'riskCountry',
    'action'
  ]
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private _dataService: DataSharingService) { }

  ngOnInit(): void {
  }


  public setCustomerGroupStatement(value: string): void {
    console.log(this.customerGroupList[value]["name"]);
    if (value >= '0') {
      this.selectedCustomerGroup = this.customerGroupList[value]["name"];
      this.customerGroupStatement = this.customerGroupList[value]["statement"];
    }
    else {
      this.selectedCustomerGroup = '';
      this.customerGroupStatement = '';
    }
  }

  private initBorrowerTable() {
    let borrowerList: Borrower[] = []
    if (this.borrowerNumber >= 0) {
      for (let i = 0; i < this.borrowerNumber; i++) {
        var newBorrower = this.createNewBorrower(i)
        borrowerList.push(newBorrower);
      };
    }
    this.borrowerDataSource = new MatTableDataSource(borrowerList);
    this.maxBorrowerId = this.borrowerDataSource.data.length - 1;
    this.borrowerDataSource.sort = this.sort;
    this.borrowerDataSource.paginator = this.paginator;
    this.isBorrowerInit = true;
  }

  private addBorrower(){
    var newBorrower = this.createNewBorrower(-1);
    this.borrowerDataSource.data.push(newBorrower);
    this.maxBorrowerId ++;
    this.borrowerNumber ++;
    this.borrowerDataSource = new MatTableDataSource(this.borrowerDataSource.data);
    this.borrowerDataSource.sort = this.sort;
    this.borrowerDataSource.paginator = this.paginator;
  }

  private createNewBorrower(borrowerId): Borrower {
    var newBorrower = new Borrower()
    if (borrowerId == -1){
      borrowerId = this.maxBorrowerId + 1;
    }
    newBorrower.id = 'Borrower_' + borrowerId
    newBorrower.borrowerName = '';
    newBorrower.customerId = '';
    newBorrower.customerType = '';
    newBorrower.turnover = 0;
    newBorrower.internalRating = '';
    newBorrower.externalRatingLocal = '';
    newBorrower.externalRatingForeign = '';
    newBorrower.sovereignCurrency = '';
    newBorrower.sovereignRatingLocal = '';
    newBorrower.group = '';
    newBorrower.totalDebtOverAsset = 0;
    newBorrower.mitigation = '';
    newBorrower.riskCountry = '';
    newBorrower.sovereignRatingForeign = '';
    return newBorrower
  }
}
