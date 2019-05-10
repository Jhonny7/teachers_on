import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { GenericService } from '../services/generic-service/generic-service.service';
import { AlertaService } from '../services/alerta-service/alerta.service';
import { Router } from '@angular/router';
//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    //private spinnerDialog: SpinnerDialog
  ) { 
    //this.spinnerDialog.show();
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      sesionActiva: [false]
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
