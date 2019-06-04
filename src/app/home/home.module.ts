import { CrudCategoriaPage } from './../crud-categoria/crud-categoria.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, CrudCategoriaPage],
  entryComponents: [CrudCategoriaPage]
})
export class HomePageModule {}
