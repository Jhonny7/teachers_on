import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f00');
      //Router to user
      let usuario: any = localStorage.getItem("user");
      let sessionActive: any = localStorage.getItem("sessionActive");
      if (sessionActive != null) {
        usuario = JSON.parse(usuario);
        if (usuario.id_rol === 1) {
          this.router.navigateByUrl("/home");
        } else {
          //this.openData(usuario);
        }
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }
}
