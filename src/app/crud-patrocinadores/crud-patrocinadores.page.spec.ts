import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPatrocinadoresPage } from './crud-patrocinadores.page';

describe('CrudPatrocinadoresPage', () => {
  let component: CrudPatrocinadoresPage;
  let fixture: ComponentFixture<CrudPatrocinadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPatrocinadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPatrocinadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
