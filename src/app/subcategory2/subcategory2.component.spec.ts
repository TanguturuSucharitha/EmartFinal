import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcategory2Component } from './subcategory2.component';

describe('Subcategory2Component', () => {
  let component: Subcategory2Component;
  let fixture: ComponentFixture<Subcategory2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcategory2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
