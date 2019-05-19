import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1PrincipalPage } from './v1-principal.page';

describe('V1PrincipalPage', () => {
  let component: V1PrincipalPage;
  let fixture: ComponentFixture<V1PrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1PrincipalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1PrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
