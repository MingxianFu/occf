import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCComponent } from './links-c.component';

describe('LinksCComponent', () => {
  let component: LinksCComponent;
  let fixture: ComponentFixture<LinksCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
