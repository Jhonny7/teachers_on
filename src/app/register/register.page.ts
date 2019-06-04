import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController, ActionSheetController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { ValidationServiceService } from 'src/services/validation-service/validation-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formGroup: FormGroup;
  public verPassword: string = "password";
  public verPassword2: string = "password";
  public imgBase64: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private genericService: GenericService,
    private alertaService: AlertaService,
    private loadingService: LoadingService,
    private router: Router,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private camera: Camera
  ) {

    //,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      email: ['', [Validators.required, ValidationServiceService.emailValidator]],
      password: ['', [Validators.required, ValidationServiceService.passwordValidator]],
      passwordConfirm: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
    this.loadingService.hide();
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  verifyShields() {
    if (this.formGroup.value.password !== this.formGroup.value.passwordConfirm) {
      this.alertaService.warnAlert(this.genericService.headerValidacion, "Las contraseñas ingresadas no coinciden, favor de verificar.", null);
    } else if (this.formGroup.dirty && this.formGroup.valid) {
      this.loadingService.show().then(() => {
        this.registrar();
      });
    } else {
      this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos.", null);
    }
  }

  registrar() {
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
    this.genericService.post("usuarios/createUsuario", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "Ahora accesa para empezar a aprender!", null);
        this.navCtrl.pop();
      } else {
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
      this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
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
