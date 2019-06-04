import { UsuarioModel } from './../../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParams, ModalController, Platform, ActionSheetController } from '@ionic/angular';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ValidationServiceService } from 'src/services/validation-service/validation-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
})
export class CrudUsuariosPage implements OnInit {
  public operation: string = "";
  public plataforma: boolean;
  public formGroup: FormGroup;

  public usuario: UsuarioModel = null;

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
    if (this.operation != "Crear") {
      this.usuario = navParms.get("usuario");
      this.formGroup = this.formBuilder.group({
        nombre: [this.usuario.nombre, Validators.required],
        apellidoPaterno: [this.usuario.apellidoPaterno, Validators.required],
        apellidoMaterno: [this.usuario.apellidoMaterno],
        email: [this.usuario.email, [Validators.required, ValidationServiceService.emailValidator]],
        idStatus: [this.usuario.idStatus, Validators.required]
      });
      console.log(this.usuario);
      if (this.usuario !== null && this.usuario.img !== null) {
        this.imgBase64 = this.usuario.img;
      }
    } else {
      this.formGroup = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: [''],
        email: ['', [Validators.required, ValidationServiceService.emailValidator]],
        password: ['', [Validators.required, ValidationServiceService.passwordValidator]],
        passwordConfirm: ['', Validators.required],
        username: ['', Validators.required]
      });
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
        if (this.formGroup.valid) {
          if (this.render) {
            this.editarUsuario();
          } else {
            this.crearUsuario();
          }
        } else {
          this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos.", null);
        }
      });
      //
    }
  }

  editarUsuario() {
    let params = {
      "idStatus": this.formGroup.value.idStatus,
      "nombre": this.formGroup.value.nombre,
      "apellido_paterno": this.formGroup.value.apellidoPaterno,
      "apellido_materno": this.formGroup.value.apellidoMaterno,
      "email": this.formGroup.value.email,
      "imgBase64": this.imgBase64,
      "id":this.usuario.id
    }
    console.log(params);
    this.genericService.post("usuarios/updateUsuario", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El usuario se ha actualizado correctamente", null);
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

  crearUsuario() {
    let params = {
      "idRol": 2,
      "userName": this.formGroup.value.username,
      "password": this.formGroup.value.password,
      "nombre": this.formGroup.value.nombre,
      "apellidoPaterno": this.formGroup.value.apellidoPaterno,
      "apellidoMaterno": this.formGroup.value.apellidoMaterno,
      "email": this.formGroup.value.email,
      "imgBase64": this.imgBase64
    }
    console.log(params);
    this.genericService.post("usuarios/createUsuario", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El usuario se ha creado correctamente", null);
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
