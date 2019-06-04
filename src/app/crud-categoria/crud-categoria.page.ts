import { CategoriaModel } from './../../models/CategoriaModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { Platform, ModalController, NavParams, ActionSheetController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-categoria',
  templateUrl: './crud-categoria.page.html',
  styleUrls: ['./crud-categoria.page.scss'],
})
export class CrudCategoriaPage implements OnInit {

  public operation: string = "";
  public plataforma: boolean;
  public formGroup: FormGroup;

  public categoria: CategoriaModel = null;

  public render: boolean = false;
  public imgBase64: string = null;
  private user: any = null;

  private clicked: boolean = false;

  constructor(
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private genericService: GenericService,
    private loadingService: LoadingService,
    private camera: Camera,
    private actionSheetController: ActionSheetController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.plataforma = platform.is("android");
    this.operation = navParms.get("type");
    if (this.operation != "Crear") {
      this.render = true;
    }
    this.formGroup = this.formBuilder.group({
      descripcion: ['', Validators.required],
      imgUrl: [''],
      color: ['#ff0000', Validators.required]
    });

    if (this.operation != "Crear") {
      this.categoria = navParms.get("categoria");
      this.formGroup.patchValue({
        descripcion: this.categoria.descripcion,
        imgUrl: this.categoria.img_url,
        color: this.categoria.color
      });
      console.log(this.categoria);
      if (this.categoria !== null && this.categoria.img_base64 !== null) {
        this.imgBase64 = this.categoria.img_base64;
      }
    }
  }

  ngOnInit() {
  }

  cancelar(data: any = null) {
    console.log(data);
    this.clicked = false;
    this.modalCtrl.dismiss({ data });
  }

  validacion() {
    if (!this.clicked) {
      this.loadingService.show().then(() => {
        let valid: boolean = this.formGroup.dirty && this.formGroup.valid;
        let valid2: boolean = false;


        if (this.imgBase64 !== null && this.formGroup.value.imgUrl === null
          && this.formGroup.value.descripcion !== null
          && this.formGroup.value.color !== null) {
          valid2 = true;
        }else if(this.imgBase64 === null && this.formGroup.value.imgUrl !== null
          && this.formGroup.value.descripcion !== null
          && this.formGroup.value.color !== null){
            valid2 = true;
        }
        if(this.imgBase64 === null && this.formGroup.value.imgUrl === null || this.formGroup.value.imgUrl.length <= 0){
          valid2 = false;
        }


        if (valid) {
          if (this.render) {
            this.editarCategoria();
          } else {
            this.crearCategoria();
          }
        } else if (!valid && valid2 && this.formGroup.value.descripcion !== null) {
          if (this.render) {
            this.editarCategoria();
          } else {
            this.crearCategoria();
          }
        } else {
          this.loadingService.hide();
          this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
        }
      });
    }
  }

  editarCategoria() {
    let params = {
      "idUsuario": this.user.id,
      "descripcion": this.formGroup.value.descripcion,
      "id": this.categoria.id,
      "img_url": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
      "img_base64": this.imgBase64,
      "color": this.formGroup.value.color,
    };
    console.log(params);
    this.genericService.post("categorias/updateCategoria", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "La categoría se ha actualizado correctamente", null);
        this.cancelar(1);
      } else {
        this.clicked = false;
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
      this.clicked = false;
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  crearCategoria() {
    let params = {
      "descripcion": this.formGroup.value.descripcion,
      "idUsuario": this.user.id,
      "img_url": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
      "img_base64": this.imgBase64,
      "color": this.formGroup.value.color,
    };
    console.log(params);
    this.genericService.post("categorias/createCategoria", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "La categoría se ha creado correctamente", null);
        this.loadingService.hide();
        this.cancelar(1);
      } else {
        this.loadingService.hide();
        this.clicked = false;
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
      //
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
      this.clicked = false;
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  getPicture(photo: boolean) {
    console.log(photo);
    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      sourceType: photo ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.imgBase64 = `data:image/png;base64,${imageData}`;
        console.log(this.imgBase64);
      })
      .catch(error => {
        console.error(error);
      });
  }

  eliminarFoto() {
    if (this.imgBase64 != null) {
      this.imgBase64 = null;
    } else {
      this.alertaService.warnAlert("Espera!", "Aún no has seleccionado una imagen", null);
    }
  }

  async openOptionsSelect() {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Selecciona',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminarFoto();
        }
      }, {
        text: 'Imagen',
        icon: 'image',
        handler: () => {
          this.getPicture(false);
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
