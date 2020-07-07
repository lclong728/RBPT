import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStartPageComponent } from './input-start-page.component';

describe('InputStartPageComponent', () => {
  let component: InputStartPageComponent;
  let fixture: ComponentFixture<InputStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
