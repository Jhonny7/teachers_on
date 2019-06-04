import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { NavController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cambio-contrasenia',
  templateUrl: './cambio-contrasenia.page.html',
  styleUrls: ['./cambio-contrasenia.page.scss'],
})
export class CambioContraseniaPage implements OnInit {

  public formGroup: FormGroup;
  public verPassword: string = "password";
  public verPassword2: string = "password";
  private user: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private genericService: GenericService,
    private alertaService: AlertaService,
    private loadingService: LoadingService,
    private navCtrl: NavController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.formGroup = this.formBuilder.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      password3: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  verifyShields() {
    if (this.formGroup.value.password2 !== this.formGroup.value.password3) {
      this.alertaService.warnAlert(this.genericService.headerValidacion, "Las nuevas contraseñas ingresadas no coinciden, favor de verificar.", null);
    } else if (this.formGroup.valid) {
      this.loadingService.show().then(() => {
        this.cambioPassword();
      });
    } else {
      this.alertaService.warnAlert(this.genericService.headerValidacion, "Todos los campos son requeridos.", null);
    }
  }

  cambioPassword() {
    let params = {
      "password": this.formGroup.value.password1,
      "idUsuario": this.user.id,
      "newPassword": this.formGroup.value.password2
    }
    this.genericService.post("usuarios/changePassword", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "Tus datos han sido actualizados", null);
        this.navCtrl.pop();
      } else {
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
      this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      if (err.status == 400) {
        this.alertaService.alertaBasica(this.genericService.headerExito, "Tus datos han sido actualizados", null);
        this.navCtrl.pop();
      } else {
        console.log(err.error.description);
        console.log(err.error);
        this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
      }
      this.loadingService.hide();
    });
  }
}
