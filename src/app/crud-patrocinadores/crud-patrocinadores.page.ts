import { PatrocinadorModel } from './../../models/Patrocinador';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams, ModalController, Platform, ActionSheetController } from '@ionic/angular';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-patrocinadores',
  templateUrl: './crud-patrocinadores.page.html',
  styleUrls: ['./crud-patrocinadores.page.scss'],
})
export class CrudPatrocinadoresPage implements OnInit {

  public operation: string = "";
  public plataforma: boolean;
  public formGroup: FormGroup;

  public patrocinador: PatrocinadorModel = null;

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
      url: ['', Validators.required],
      informacion: ['', Validators.required],
      idStatus: ['', Validators.required]
    });

    if (this.operation != "Crear") {
      this.patrocinador = navParms.get("patrocinador");
      this.formGroup.patchValue({
        descripcion: this.patrocinador.descripcion,
        imgUrl: this.patrocinador.img_url,
        url: this.patrocinador.url,
        informacion: this.patrocinador.informacion,
        idStatus: this.patrocinador.idStatus
      });
      console.log(this.patrocinador);
      if (this.patrocinador !== null && this.patrocinador.img_base64 !== null) {
        this.imgBase64 = this.patrocinador.img_base64;
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
          && this.formGroup.value.url !== null
          && this.formGroup.value.informacion !== null) {
          valid2 = true;
        }else if(this.imgBase64 === null && this.formGroup.value.imgUrl !== null
          && this.formGroup.value.descripcion !== null
          && this.formGroup.value.url !== null
          && this.formGroup.value.informacion !== null){
            valid2 = true;
        }
        if(this.imgBase64 === null && this.formGroup.value.imgUrl === null || this.formGroup.value.imgUrl.length <= 0){
          valid2 = false;
        }
        if (valid) {
          if (this.render) {
            this.editarPatrocinador();
          } else {
            this.crearPatrocinador();
          }
        } else if (valid === false && valid2 && this.formGroup.value.descripcion !== null) {
          if (this.render) {
            this.editarPatrocinador();
          } else {
            this.crearPatrocinador();
          }
        } else {

          this.loadingService.hide();
          this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
        }
      });
    }
  }

  editarPatrocinador() {
    let params = {
      "idUsuario": this.user.id,
      "idStatus": this.formGroup.value.idStatus,
      "descripcion": this.formGroup.value.descripcion,
      "id": this.patrocinador.id,
      "urlImage": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
      "base64Image": this.imgBase64,
      "url": this.formGroup.value.url,
      "informacion": this.formGroup.value.informacion
    };
    console.log(params);
    this.genericService.post("patrocinadores/updatePatrocinador", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El patrocinador se ha actualizado correctamente", null);
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

  crearPatrocinador() {
    let params = {
      "descripcion": this.formGroup.value.descripcion,
      "idUsuario": this.user.id,
      "urlImage": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
      "base64Image": this.imgBase64,
      "url": this.formGroup.value.url,
      "informacion": this.formGroup.value.informacion
    };
    console.log(params);
    this.genericService.post("patrocinadores/createPatrocinador", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El patrocinador se ha creado correctamente", null);
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
