import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCComponent } from './schedule-c.component';

describe('ScheduleCComponent', () => {
  let component: ScheduleCComponent;
  let fixture: ComponentFixture<ScheduleCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
