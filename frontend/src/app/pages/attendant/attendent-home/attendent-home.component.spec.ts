import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendentHomeComponent } from './attendent-home.component';

describe('AttendentHomeComponent', () => {
  let component: AttendentHomeComponent;
  let fixture: ComponentFixture<AttendentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
