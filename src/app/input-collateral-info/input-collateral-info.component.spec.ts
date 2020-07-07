import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCollateralInfoComponent } from './input-collateral-info.component';

describe('InputCollateralInfoComponent', () => {
  let component: InputCollateralInfoComponent;
  let fixture: ComponentFixture<InputCollateralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCollateralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCollateralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
