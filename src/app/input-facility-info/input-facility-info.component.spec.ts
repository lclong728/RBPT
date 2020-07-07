import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFacilityInfoComponent } from './input-facility-info.component';

describe('InputFacilityInfoComponent', () => {
  let component: InputFacilityInfoComponent;
  let fixture: ComponentFixture<InputFacilityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFacilityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFacilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
