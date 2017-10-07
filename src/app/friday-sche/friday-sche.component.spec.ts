import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridayScheComponent } from './friday-sche.component';

describe('FridayScheComponent', () => {
  let component: FridayScheComponent;
  let fixture: ComponentFixture<FridayScheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridayScheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridayScheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
