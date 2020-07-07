import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomerInfoComponent } from './input-customer-info.component';

describe('InputCustomerInfoComponent', () => {
  let component: InputCustomerInfoComponent;
  let fixture: ComponentFixture<InputCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
