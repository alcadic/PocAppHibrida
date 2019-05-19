import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2AddRegistroPage } from './v2-add-registro.page';

describe('V2AddRegistroPage', () => {
  let component: V2AddRegistroPage;
  let fixture: ComponentFixture<V2AddRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2AddRegistroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2AddRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
