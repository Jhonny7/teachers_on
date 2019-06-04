import { CrudVideosPage } from './../crud-videos/crud-videos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideosAdminPage } from './videos-admin.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VideosAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [VideosAdminPage, CrudVideosPage],
  entryComponents: [CrudVideosPage]
})
export class VideosAdminPageModule { }
