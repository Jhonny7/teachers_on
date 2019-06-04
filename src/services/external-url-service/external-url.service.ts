import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class ExternalUrlService {

  constructor(
    private iab: InAppBrowser
  ) { }

  async openUrl(url) {
    this.iab.create(url, "_system");
  }
}
