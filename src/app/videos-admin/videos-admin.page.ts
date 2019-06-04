import { CategoriaModel } from './../../models/CategoriaModel';
import { CrudVideosPage } from './../crud-videos/crud-videos.page';
import { VideoAdminModel } from './../../models/VideoAdminModel';
import { AlertaService } from './../../services/alerta-service/alerta.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-videos-admin',
  templateUrl: './videos-admin.page.html',
  styleUrls: ['./videos-admin.page.scss'],
})
export class VideosAdminPage implements OnInit {

  public page: number = 0;
  public limit: number = 10;
  public user: any;

  public videos: VideoAdminModel[] = [];
  public video: VideoAdminModel;
  public categorias: CategoriaModel[] = [];

  constructor(
    private genericService: GenericService,
    private loadingService: LoadingService,
    private alertaService: AlertaService,
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.chargeCategories();
  }

  ngOnInit() {
  }

  ionRefresh(event) {
    setTimeout(() => {
      //complete()  signify that the refreshing has completed and to close the refresher
      this.videos = [];
      this.page = 0;
      event.target.complete();
      this.cargarVideosByPage();
    }, 3000);
  }

  cargarVideosByPage() {
    this.videos = [];
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
    this.genericService.post("cursos/getVideosByPage", JSON.stringify(params)).subscribe((res: any) => {
      //console.log(res);
      if (res.parameters) {
        res.parameters.forEach(video => {
          this.videos.push(new VideoAdminModel(
            video.id,
            video.descripcion,
            video.url,
            video.descripcion_categoria,
            video.fecha,
            video.idCategoria
          ));

        });

        console.log(this.videos);
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

  returnUrl(video: VideoAdminModel) {
    //console.log(video);
    let url = video.url;
    let returnUrl: string = "";
    let obtenerYoutube: string[] = url.split("youtube");
    if (obtenerYoutube[1]) {
      let splitPage: string[] = url.split("v=");
      let splitPage2: string[] = splitPage[1].split("&");
      if (splitPage2) {
        returnUrl = splitPage2[0];
      } else {
        returnUrl = splitPage[1];
      }
    } else {
      //Es sacado de celular
      let splitPage: string[] = url.split(".be/");
      if (splitPage) {
        returnUrl = splitPage[1];
      } else {
        //links que no son de youtube
        returnUrl = "";
        return returnUrl;
      }
    }
    //console.log(returnUrl + "  " + video.id);

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${returnUrl}/0.jpg`);
  }

  editar(video: VideoAdminModel) {
    this.video = video;
    this.openCrud(2);
  }

  //1 = crear, 0 = editar
  async openCrud(type: number) {
    let modal;
    if (type == 1) {
      modal = await this.modalController.create({
        component: CrudVideosPage,
        componentProps: {
          type: "Crear",
          categorias: this.categorias
        }
      });
      modal.onDidDismiss().then((data) => {
        let num: number = data.data.data;
        console.log(num);
        if (num == 1) {
          //this.loadingService.show().then(() => {
          this.page = 0;
          this.cargarVideosByPage();
          //});
        } else {
          console.log("Data null");
          this.loadingService.hide();
        }
      });
      return await modal.present();
    } else {
      console.log("------------------------------");

      console.log(this.video);

      this.openModalEdit(this.video);
    }
  }

  async openModalEdit(video: any) {
    let modal;
    modal = await this.modalController.create({
      component: CrudVideosPage,
      componentProps: {
        type: "Editar",
        video: video,
        categorias: this.categorias
      }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      console.log(data.data);
      let num: number = data.data.data;
      console.log(num);
      if (num == 1) {
        this.page = 0;
        this.cargarVideosByPage();
      } else {
        console.log("Data null");
        this.loadingService.hide();
      }
    });
    return await modal.present();
  }

  /**Lógica de eliminado */
  async eliminar(video: VideoAdminModel) {
    const confirm = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Estás seguro de eliminar el video?, recuerda que ya no lo podrán ver tus usuarios.",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarVideo(video);
          }
        }
      ]
    });
    return await confirm.present();
  }

  async eliminarVideo(video: VideoAdminModel) {
    //this.categoria = categoria;
    let params = {
      id: video.id
    };
    this.loadingService.show().then(() => {
      this.genericService.post("cursos/deleteCurso", JSON.stringify(params)).subscribe((res: any) => {
        console.log(res);
        if (res.status == "A") {
          return this.removeitem(video).then(() => {
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

  async removeitem(n: VideoAdminModel) {
    const index = this.videos.findIndex(nivel => nivel.id == n.id);
    this.videos = [
      ...this.videos.slice(0, index),
      ...this.videos.slice(index + 1)
    ];
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  chargeCategories() {
    this.categorias = [];
    this.genericService.post("categorias/categorias", JSON.stringify({})).subscribe((res: any) => {
      //console.log(res);
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
        this.cargarVideosByPage();
        //this.loadingService.hide();
      }
    }, (err: HttpErrorResponse) => {
      //console.log(err.error.description);
      //this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }
}
