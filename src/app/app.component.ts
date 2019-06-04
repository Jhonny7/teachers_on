import { MenuService } from './../services/menu-service/menu.service';
import { Component } from '@angular/core';

import { Platform, Events, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuModel } from 'src/models/MenuModel';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
})
export class AppComponent {
  public pages: MenuModel[] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private events: Events,
    private menuService: MenuService,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private fcm: FCM,
    private alertaService: AlertaService
  ) {
    this.initializeApp();
    this.events.subscribe('menu:changed', type => {
      console.log(type);
      this.pages = [];
      this.pages = this.menuService.returnMenuByType(type);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f00');
      //Router to user
      if (this.platform.is('ios') || this.platform.is('android')) {
        let user = JSON.parse(localStorage.getItem("user"));
        if (localStorage.getItem("token") != null) {
          this.fcm.onNotification().subscribe(data => {
            console.log(data);
            if (data.wasTapped) {
              if (user !== null) {
                this.router.navigateByUrl(`/${data.page}`);
              }
            } else {
              if (user !== null) {
                this.router.navigateByUrl(`/${data.page}`);
              }
              if (data.title == "comentario") {
                this.events.publish('newMessage', { comentario: data.body });
              } else {
                this.alertaService.alertaBasica(data.title, data.body, null);
              }

            }
          });
          this.fcm.subscribeToTopic('allUsers');
        } else {
          this.fcm.getToken().then(token => {
            console.log(token);
            localStorage.setItem("token", JSON.stringify(token));
          });
          this.fcm.subscribeToTopic('allUsers');
          this.fcm.onNotification().subscribe(data => {
            console.log(data);
            if (data.wasTapped) {
              if (user !== null) {
                this.router.navigateByUrl(`/${data.page}`);
              }
            } else {
              if (user !== null) {
                this.router.navigateByUrl(`/${data.page}`);
              }
              if (data.title == "comentario") {
                this.events.publish('newMessage', { comentario: data.body });
              } else {
                this.alertaService.alertaBasica(data.title, data.body, null);
              }
            }
          });
        }
      }
      //
      let sessionActive: any = localStorage.getItem("sessionActive");
      if (sessionActive != null) {
        this.router.navigateByUrl("/home");
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }

  async exitApp() {
    const confirm = await this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Estás seguro de cerrar sesión?",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.closeSesion();
          }
        }
      ]
    });
    return await confirm.present();
  }

  closeSesion() {
    localStorage.clear();
    //this.router.navigateByUrl('/login');
    this.router.navigate(['login']);
  }

  openPage(p: MenuModel) {
    this.router.navigateByUrl(p.component);
  }
}
