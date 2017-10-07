import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipCComponent } from './fellowship-c.component';

describe('FellowshipCComponent', () => {
  let component: FellowshipCComponent;
  let fixture: ComponentFixture<FellowshipCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowshipCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
