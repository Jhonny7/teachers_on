import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCategoriaPage } from './crud-categoria.page';

describe('CrudCategoriaPage', () => {
  let component: CrudCategoriaPage;
  let fixture: ComponentFixture<CrudCategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCategoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
