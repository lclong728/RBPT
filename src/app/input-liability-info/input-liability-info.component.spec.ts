import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLiabilityInfoComponent } from './input-liability-info.component';

describe('InputLiabilityInfoComponent', () => {
  let component: InputLiabilityInfoComponent;
  let fixture: ComponentFixture<InputLiabilityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLiabilityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLiabilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
