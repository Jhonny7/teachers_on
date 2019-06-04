import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: any;
  constructor(private loadingController: LoadingController) { }

  async show(message: any = null) {
    let params: any = {

    };
    if (message) {
      params.message = message;
    }
    this.loading = await this.loadingController.create(params);
    console.log(this.loading);
    await this.loading.present();
  }

  hide() {
    if (this.loading) {
      this.loading.dismiss();
    } else {
      console.log("sin refer");
      console.log(this.loading);
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
