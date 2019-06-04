import { CrudCategoriaPage } from './../crud-categoria/crud-categoria.page';
import { CategoriaModel } from './../../models/CategoriaModel';
import { Component } from '@angular/core';
import { MenuController, Events, ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user: any = null;
  public categorias: CategoriaModel[] = [];
  public categoria: CategoriaModel;

  constructor(
    private menuCtrl: MenuController,
    private events: Events,
    private loadingService: LoadingService,
    private genericService: GenericService,
    private alertaService: AlertaService,
    private router: Router,
    private modalController: ModalController,
    public alertCtrl: AlertController,
    private actionSheetController: ActionSheetController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.events.publish('menu:changed', this.user.id_rol);
    this.chargeCategories();
  }

  ionRefresh(event) {
    setTimeout(() => {
      //complete()  signify that the refreshing has completed and to close the refresher
      this.categorias = [];
      event.target.complete();
      this.chargeCategories();
    }, 3000);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  chargeCategories() {
    this.categorias = [];
    this.genericService.post("categorias/categorias", JSON.stringify({})).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        res.parameters.forEach(categoria => {
          this.categorias.push(new CategoriaModel(
            categoria.id,
            categoria.descripcion,
            categoria.img_url,
            categoria.img_base64,
            categoria.color
          ));
        });
        this.loadingService.hide();
      }
    }, (err: HttpErrorResponse) => {
      console.log(err.error.description);
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  checkoutCategory(id: number) {
    //console.log(id);
    this.router.navigate(['/videos', { id }]);
    //this.router.navigate(['/home', parametros]);
  }

  //1 = crear, 0 = editar
  async openCrud(type: number) {
    let modal;
    if (type == 1) {
      modal = await this.modalController.create({
        component: CrudCategoriaPage,
        componentProps: {
          type: "Crear"
        }
      });
      modal.onDidDismiss().then((data) => {
        let num: number = data.data.data;
        console.log(num);
        if (num == 1) {
          //this.loadingService.show().then(() => {
          this.chargeCategories();
          //});
        } else {
          console.log("Data null");
          this.loadingService.hide();
        }
      });
      return await modal.present();
    } else {
      this.openModalEdit(this.categoria);
    }
  }

  async openModalEdit(categoria: any) {
    let modal;
    modal = await this.modalController.create({
      component: CrudCategoriaPage,
      componentProps: {
        type: "Editar",
        categoria: categoria
      }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      console.log(data.data);
      let num: number = data.data.data;
      console.log(num);
      if (num == 1) {
        //this.loadingService.show().then(() => {
        this.chargeCategories();
        //});
      } else {
        console.log("Data null");
        this.loadingService.hide();
      }
    });
    return await modal.present();
  }

  async openOptionsSelect(categoria: CategoriaModel) {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Selecciona',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminar(categoria);
        }
      }, {
        text: 'Editar',
        icon: 'build',
        handler: () => {
          this.categoria = categoria;
          this.openCrud(2);
        }
      }, {
        text: 'Ver Videos',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.checkoutCategory(categoria.id);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  /**Lógica de eliminado */
  async eliminar(categoria: CategoriaModel) {
    const confirm = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Estás seguro de eliminar la categoría?, recuerda que si la categoría contiene videos, no podrás eliminarla",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarCategoria(categoria);
          }
        }
      ]
    });
    return await confirm.present();
  }

  async eliminarCategoria(categoria: CategoriaModel) {
    //this.categoria = categoria;
    let params = {
      id: categoria.id
    };
    this.loadingService.show().then(() => {
      this.genericService.post("categorias/deleteCategoria", JSON.stringify(params)).subscribe((res: any) => {
        console.log(res);
        if (res.status == "A") {
          return this.removeitem(categoria).then(() => {
            this.loadingService.hide();
          });
        } else {
          this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
        }
        this.loadingService.hide();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.loadingService.hide();
        this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
      });
    });
  }

  async removeitem(n: CategoriaModel) {
    const index = this.categorias.findIndex(nivel => nivel.id == n.id);

    this.categorias = [
      ...this.categorias.slice(0, index),
      ...this.categorias.slice(index + 1)
    ];
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  cambiarContrasenia() {
    this.router.navigateByUrl("/cambio-contrasenia");
  }
}
