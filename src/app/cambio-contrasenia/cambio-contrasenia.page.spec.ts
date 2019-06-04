import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioContraseniaPage } from './cambio-contrasenia.page';

describe('CambioContraseniaPage', () => {
  let component: CambioContraseniaPage;
  let fixture: ComponentFixture<CambioContraseniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioContraseniaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
