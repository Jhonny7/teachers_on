import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAdminPage } from './videos-admin.page';

describe('VideosAdminPage', () => {
  let component: VideosAdminPage;
  let fixture: ComponentFixture<VideosAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
