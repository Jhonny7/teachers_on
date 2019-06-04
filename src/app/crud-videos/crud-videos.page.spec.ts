import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVideosPage } from './crud-videos.page';

describe('CrudVideosPage', () => {
  let component: CrudVideosPage;
  let fixture: ComponentFixture<CrudVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
