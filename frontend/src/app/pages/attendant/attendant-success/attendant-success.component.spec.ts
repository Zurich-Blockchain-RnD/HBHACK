import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantSuccessComponent } from './attendant-success.component';

describe('AttendantSuccessComponent', () => {
  let component: AttendantSuccessComponent;
  let fixture: ComponentFixture<AttendantSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
