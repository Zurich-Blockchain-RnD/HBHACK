import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantVerifyComponent } from './attendant-verify.component';

describe('AttendantVerifyComponent', () => {
  let component: AttendantVerifyComponent;
  let fixture: ComponentFixture<AttendantVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
