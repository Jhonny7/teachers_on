import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrudCategoriaPage } from './crud-categoria.page';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CrudCategoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: []
})
export class CrudCategoriaPageModule {}
