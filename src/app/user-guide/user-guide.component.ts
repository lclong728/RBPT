import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {

  input_cust_table = INPUT_CUST;
  input_fc_table = INPUT_FAC;

  constructor() { }

  ngOnInit(): void {
  }

}


export interface IGuideInfo {
  field: string;
  defin: string;
  remark: string;
}

const INPUT_CUST: IGuideInfo[] = [
  {field: "Obligor Name", defin: "Borrower denomination", remark: ""},
  {field: "Customer ID", defin: "Customer ID", remark: "It can be omitted only when it is a prospective customer/guarantor"},
  {field: "Customer type", defin: "Type of customer according to provided list", remark: "When the remarked option is 'holding company' then (k) applies"},
  {field: "Internal Rating", defin: "Obligor Internal Rating, according to CNCBI Master Scale from 1 to 11, from EJM Model, Large Corporate Model or mapped Agency External Rating if the former two are not feasible.", remark: "In case none of these ratings can be provided, RM can either propose judgmental rating to be reviewed by Credit Risk or input as 'UR' (only applicable when the rating of guarantor exists)"},
  {field: "Turnover", defin: "Customer's turnover", remark: "In any case where the corporate concerned is a member of a group of companies, the consolidated total annual revenue of the group of companies of which the corporate is a member; or"},
  {field: "External Rating (Local)", defin: "External rating of the obligor (issuer) applicable to local currency", remark: "In any case where the corporate concerned is consolidated with other corporate by the institution for risk management purposes, the aggregate of the total annual revenue of the corporate and other corporate which are so consolidated"},
  {field: "External Rating (Foreign)", defin: "External rating of the obligor (issuer) applicable to foreign currency", remark: "If the borrower is not rated by External Agency, UR should be provided. Please see Use of ECAI ratings session in RBPT Guidelines."},
  {field: "Sovereign Currency", defin: "Currency in Country of Incorporation", remark: "If the borrower is not rated by External Agency, UR should be provided. Please see Use of ECAI ratings session in RBPT Guidelines."},
  {field: "Sovereign Rating (Local)", defin: "Sovereign rating applicable to local currency", remark: "Please see Use of ECAI ratings session in RBPT Guidelines."},
  {field: "Sovereign Rating (Foreign)", defin: "Sovereign rating applicable to foreign currency", remark: "Please see Use of ECAI ratings session in RBPT Guidelines."},
  {field: "Total Debt/ Total Asset", defin: "Ratio to be calculated with customer information", remark: "Required only for Holding companies, please see Annex 1 of Risk Based Pricing Guidelines for further explanation"},
  {field: "Risk Country", defin: "Same definition as in CA", remark: ""}
]

const INPUT_FAC: IGuideInfo[] = [
  {field: "Facility Type", defin: "Type of facility according to provided list", remark: ""},
  {field: "Currency", defin: "Currency in which the exposure is denominated", remark: ""},
  {field: "Proposed Limit", defin: "Limit for the facility in HKD 000'", remark: "If a sub limit is under a global line to a single borrower, select the code of the group line. For the allocation of a same facility to different obligors, proceed manually according to inputer best estimation effort for limit allocation. For expected utilization please go to destinated field. * For FX&D, only the sub-line limit need to be inputted. Global line of FX&D should not be inputted."},
  {field: "Allocation under Global Line", defin: "Allocate specific amount to a facility under global line", remark: "The sum of Allocated Amount of Global line should be equal or less than the Projected Utilization of Global Line"},
  {field: "Tenor", defin: "Average Residual Maturity", remark: "In Months, If less than 1 month, input 0.25 if 1 week; 0.5 if 2 weeks/half month; 0.75 if 3 weeks"},
  {field: "Sub Limit to Facility", defin: "Choice of main facility, if there is one", remark: "In Months, If less than 1 month, input 0.25 if 1 week; 0.5 if 2 weeks/half month; 0.75 if 3 weeks"},
  {field: "To Borrower", defin: "Choice of Borrower", remark: ""},
  {field: "Margin Over Reference Index", defin: "Spread in basis points, between reference index for funding, and price", remark: "Please refer to the 'Considerations on Funding Cost and Margin Inputting' in the RBPT Guidelines"},
  {field: "Fees Annualized", defin: "Fees per annum, in HKD 000'", remark: "If the fees are receive in other currency than HKD, it should be converted into HKD by user\n(The Fees should not be reflected in global line)\ne.g. If the tenor of that facility is 6-month and total fee is $100, the 'Fees Annualized' should be = $100 x 12 / 6 = $200\ne.g. If the tenor of that facility is 24-month and total fee is $300, the 'Fees Annualized' should be = $300 x 12 / 24 = $150"},
  {field: "Principal amount for OTC", defin: "Notional amount for OTC in HKD' 000", remark: "Notional value without timing by any risk factor should be inputted in this cell"},
  {field: "Original Maturity (Months)", defin: "Original Maturity of the facility in months", remark: ""},
  {field: "% Utilization", defin: "Expected utilization of the facility", remark: "In the case of committed lines, the Utilization should be inputted as 100%; \nIn the case of  uncommitted lines, the proposed limits will be multiplied by the utilization %\n (Assumption is Treasury and Trade are uncommitted in RBPT)"},
  {field: "Issue Specific Rating(Bonds only", defin: "Issue specific rating for the bond", remark: ""},
  {field: "New/Review/Amendment", defin: "Indicate the state of facility", remark: ""},
  {field: "% of Unfunded Portion", defin: "The percentage of unfunded Portion", remark: ""},
  {field: "Funding Period", defin: "Funding Period to allocate appropriate LP according to FTP framework", remark: ""},
  {field: "Month of Drawdown", defin: "The drawdown month of facility", remark: ""},
  {field: "Only for MGL?", defin: "This facility is only for MGL calculation but not ROAC calculation", remark: ""},
  {field: "Interest Period", defin: "This re-pricing period of facility", remark: ""},
]