import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsuariosPage } from './crud-usuarios.page';

describe('CrudUsuariosPage', () => {
  let component: CrudUsuariosPage;
  let fixture: ComponentFixture<CrudUsuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUsuariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
