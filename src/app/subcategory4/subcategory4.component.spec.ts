import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcategory4Component } from './subcategory4.component';

describe('Subcategory4Component', () => {
  let component: Subcategory4Component;
  let fixture: ComponentFixture<Subcategory4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcategory4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcategory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
