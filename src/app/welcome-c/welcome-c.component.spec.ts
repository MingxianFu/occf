import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCComponent } from './welcome-c.component';

describe('WelcomeCComponent', () => {
  let component: WelcomeCComponent;
  let fixture: ComponentFixture<WelcomeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
