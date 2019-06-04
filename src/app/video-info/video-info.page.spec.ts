import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInfoPage } from './video-info.page';

describe('VideoInfoPage', () => {
  let component: VideoInfoPage;
  let fixture: ComponentFixture<VideoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
