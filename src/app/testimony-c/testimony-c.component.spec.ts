import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyCComponent } from './testimony-c.component';

describe('TestimonyCComponent', () => {
  let component: TestimonyCComponent;
  let fixture: ComponentFixture<TestimonyCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonyCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
