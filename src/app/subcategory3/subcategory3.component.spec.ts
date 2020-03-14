import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcategory3Component } from './subcategory3.component';

describe('Subcategory3Component', () => {
  let component: Subcategory3Component;
  let fixture: ComponentFixture<Subcategory3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcategory3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcategory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
