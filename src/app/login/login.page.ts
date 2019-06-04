import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { LoadingService } from 'src/services/loading-service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  public user: string = null;
  public password: string = null;

  public formGroup: FormGroup;
  public verPassword: string = "password";

  constructor(
    private menuCtrl: MenuController,
    private genericService: GenericService,
    private alertaService: AlertaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingService: LoadingService,
    private platform: Platform
  ) {
    //this.loadingService.show();
    //this.spinnerDialog.show();
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      sesionActiva: [false]
    });
    this.platform.backButton.subscribe(() => {
      // this does work
    });
  }

  ngOnDestroy() {
    this.platform.backButton.unsubscribe();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  verifyShields() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.loadingService.show().then(() => {
        this.ingresar();
      });
    } else {
      this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
    }
  }

  ingresar() {
    //let params = new HttpParams();
    //params = params.append('user', this.formGroup.value.user);
    //params = params.append('password', this.formGroup.value.password);
    let params = {
      "user": this.formGroup.value.user,
      "password": this.formGroup.value.password
    };
    console.log(params);

    this.genericService.post("login/getAuthenticate", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res.parameters;
      this.alertaService.alertaBasica("Bienvenid@", parametros.nombre, null);
      console.log(parametros);
      //this.router.navigate(['/home',parametros]);
      console.log(this.formGroup.value.sesionActiva);
      if (this.formGroup.value.sesionActiva) {
        localStorage.setItem("sessionActive", JSON.stringify(1));
      }
      localStorage.setItem("user", JSON.stringify(parametros));

      let token: any = localStorage.getItem("token");

      if (token != null) {
        let params2 = {
          "token": JSON.parse(token),
          "id": parametros.id
        };
        this.genericService.post("login/updateToken", JSON.stringify(params2)).subscribe((res: any) => {
          if (parametros.id_rol == 1) {
            this.router.navigate(['/home', parametros]);
          } else {
            this.router.navigate(['/home', parametros]);
          }
          this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          console.log(err);
          console.log(err.error.description);
          this.loadingService.hide();
          this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
        });
      } else {
        if (parametros.id_rol == 1) {
          this.router.navigate(['/home', parametros]);
        } else {
          this.router.navigate(['/home', parametros]);
        }
        this.loadingService.hide();
      }
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  verPasswordMethod(event) {
    if (this.verPassword == "password") {
      this.verPassword = "text";
    } else {
      this.verPassword = "password";
    }
  }

  goToRegister() {
    this.loadingService.show().then(() => {
      this.router.navigate(['/register']);
    });

  }
}
