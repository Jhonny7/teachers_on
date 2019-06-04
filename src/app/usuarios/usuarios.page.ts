import { CrudUsuariosPage } from './../crud-usuarios/crud-usuarios.page';
import { UsuarioModel } from './../../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  public page: number = 0;
  public limit: number = 10;
  public user: any;

  public usuarios: UsuarioModel[] = [];
  public usuario: UsuarioModel;

  constructor(
    private genericService: GenericService,
    private loadingService: LoadingService,
    private alertaService: AlertaService,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) { 
    this.user = JSON.parse(localStorage.getItem("user"));
    this.cargarUsuariosByPage();
  }

  ngOnInit() {
  }


  ionRefresh(event) {
    setTimeout(() => {
      //complete()  signify that the refreshing has completed and to close the refresher
      this.usuarios = [];
      this.page = 0;
      event.target.complete();
      this.cargarUsuariosByPage();
    }, 3000);
  }

  cargarUsuariosByPage() {
    this.usuarios = [];
    let params;
    if (this.page !== 0) {
      params = {
        'start': this.page * this.limit + 1,
        'end': this.limit
      };
    } else {
      params = {
        'start': this.page,
        'end': this.limit
      };
    }
    this.genericService.post("usuarios/getUsuarios", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        res.parameters.forEach(usuario => {
          this.usuarios.push(new UsuarioModel(
            usuario.id,
            usuario.id_rol,
            usuario.nombre,
            usuario.apellido_paterno,
            usuario.apellido_materno,
            usuario.email,
            usuario.fecha,
            usuario.img_base64,
            usuario.id_status
          ));
        });
      }
      if (this.page !== 0) {
      }
      this.page++;
      this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
      console.log(err.error.description);
      console.log(err.error);

      this.loadingService.hide();

      this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  editar(usuario: UsuarioModel) {
    this.usuario = usuario;
    this.openCrud(2);
  }

  //1 = crear, 0 = editar
  async openCrud(type: number) {
    let modal;
    if (type == 1) {
      modal = await this.modalController.create({
        component: CrudUsuariosPage,
        componentProps: {
          type: "Crear",
          usuarios: this.usuarios
        }
      });
      modal.onDidDismiss().then((data) => {
        let num: number = data.data.data;
        console.log(num);
        if (num == 1) {
          //this.loadingService.show().then(() => {
          this.page = 0;
          this.cargarUsuariosByPage();
          //});
        } else {
          console.log("Data null");
          this.loadingService.hide();
        }
      });
      return await modal.present();
    } else {
      this.openModalEdit(this.usuario);
    }
  }

  async openModalEdit(usuario: any) {
    let modal;
    modal = await this.modalController.create({
      component: CrudUsuariosPage,
      componentProps: {
        type: "Editar",
        usuario: usuario
      }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      console.log(data.data);
      let num: number = data.data.data;
      console.log(num);
      if (num == 1) {
        this.page = 0;
        this.cargarUsuariosByPage();
      } else {
        console.log("Data null");
        this.loadingService.hide();
      }
    });
    return await modal.present();
  }

  /**Lógica de eliminado */
  async eliminar(usuario: UsuarioModel) {
    const confirm = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Estás seguro de eliminar el usuario?, éste ya no podrá acceder a la plataforma.",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarUsuario(usuario);
          }
        }
      ]
    });
    return await confirm.present();
  }

  async eliminarUsuario(usuario: UsuarioModel) {
    //this.categoria = categoria;
    let params = {
      id: usuario.id
    };
    this.loadingService.show().then(() => {
      this.genericService.post("usuarios/deleteUsuario", JSON.stringify(params)).subscribe((res: any) => {
        console.log(res);
        if (res.status == "A") {
          return this.removeitem(usuario).then(() => {
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

  async removeitem(n: UsuarioModel) {
    const index = this.usuarios.findIndex(nivel => nivel.id == n.id);
    this.usuarios = [
      ...this.usuarios.slice(0,index),
      ...this.usuarios.slice(index+1)
    ];
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  
}
