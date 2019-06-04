import { ExternalUrlService } from './../../services/external-url-service/external-url.service';
import { CrudPatrocinadoresPage } from './../crud-patrocinadores/crud-patrocinadores.page';
import { PatrocinadorModel } from './../../models/Patrocinador';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.page.html',
  styleUrls: ['./patrocinadores.page.scss'],
})
export class PatrocinadoresPage implements OnInit {

  public user: any = null;
  public patrocinadores: PatrocinadorModel[] = [];
  public patrocinador: PatrocinadorModel;

  constructor(
    private loadingService: LoadingService,
    private genericService: GenericService,
    private alertaService: AlertaService,
    private modalController: ModalController,
    public alertCtrl: AlertController,
    private actionSheetController: ActionSheetController,
    private externalUrlService: ExternalUrlService
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.chargePatrocinadores();
  }

  ngOnInit() {
  }

  ionRefresh(event) {
    setTimeout(() => {
      //complete()  signify that the refreshing has completed and to close the refresher
      this.patrocinadores = [];
      event.target.complete();
      this.chargePatrocinadores();
    }, 3000);
  }

  openLink(link: string) {
    this.externalUrlService.openUrl(link);
  }

  chargePatrocinadores() {
    this.patrocinadores = [];
    let path = "patrocinadores/getPatrocinadores";
    if (this.user.id_rol != 1) {
      path = "patrocinadores/getPatrocinadoresActivos";
    }
    this.genericService.post(path, JSON.stringify({})).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        res.parameters.forEach(patrocinador => {
          this.patrocinadores.push(new PatrocinadorModel(
            patrocinador.id,
            patrocinador.descripcion,
            patrocinador.url_image,
            patrocinador.base64_image,
            patrocinador.url,
            patrocinador.informacion,
            patrocinador.id_status
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

  //1 = crear, 0 = editar
  async openCrud(type: number) {
    let modal;
    if (type == 1) {
      modal = await this.modalController.create({
        component: CrudPatrocinadoresPage,
        componentProps: {
          type: "Crear"
        }
      });
      modal.onDidDismiss().then((data) => {
        let num: number = data.data.data;
        console.log(num);
        if (num == 1) {
          //this.loadingService.show().then(() => {
          this.chargePatrocinadores();
          //});
        } else {
          console.log("Data null");
          this.loadingService.hide();
        }
      });
      return await modal.present();
    } else {
      this.openModalEdit(this.patrocinador);
    }
  }

  async openModalEdit(patrocinador: any) {
    let modal;
    modal = await this.modalController.create({
      component: CrudPatrocinadoresPage,
      componentProps: {
        type: "Editar",
        patrocinador: patrocinador
      }
    });
    modal.onDidDismiss().then((data) => {
      let num: number = data.data.data;
      console.log(num);
      if (num == 1) {
        //this.loadingService.show().then(() => {
        this.chargePatrocinadores();
        //});
      } else {
        console.log("Data null");
        this.loadingService.hide();
      }
    });
    return await modal.present();
  }

  async openOptionsSelect(patrocinador: PatrocinadorModel) {
    if (this.user.id_rol == 1) {
      const actionSheet = await this.actionSheetController.create({
        //header: 'Selecciona',
        buttons: [{
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminar(patrocinador);
          }
        }, {
          text: 'Editar',
          icon: 'build',
          handler: () => {
            this.patrocinador = patrocinador;
            this.openCrud(2);
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
  }

  /**Lógica de eliminado */
  async eliminar(patrocinador: PatrocinadorModel) {
    const confirm = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Estás seguro de eliminar el patrocinador?, recuerda que tus usuarios ya no podrán verlo nuevamente",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarPatrocinador(patrocinador);
          }
        }
      ]
    });
    return await confirm.present();
  }

  async eliminarPatrocinador(patrocinador: PatrocinadorModel) {
    //this.categoria = categoria;
    let params = {
      id: patrocinador.id
    };
    this.loadingService.show().then(() => {
      this.genericService.post("patrocinadores/deletePatrocinador", JSON.stringify(params)).subscribe((res: any) => {
        console.log(res);
        if (res.status == "A") {
          return this.removeitem(patrocinador).then(() => {
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

  async removeitem(n: PatrocinadorModel) {
    const index = this.patrocinadores.findIndex(nivel => nivel.id == n.id);
    this.patrocinadores = [
      ...this.patrocinadores.slice(0,index),
      ...this.patrocinadores.slice(index+1)
    ];
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
