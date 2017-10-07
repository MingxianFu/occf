import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleStudyCComponent } from './bible-study-c.component';

describe('BibleStudyCComponent', () => {
  let component: BibleStudyCComponent;
  let fixture: ComponentFixture<BibleStudyCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleStudyCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleStudyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
