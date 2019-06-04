import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  public nameApp:string = "Teachers On";
  public version:any = "1.0.0";

  constructor(
    private appVersion: AppVersion
  ) { 
    this.appVersion.getAppName().then((data:any)=>{
      console.log(data);
      this.nameApp = data;
    });
    this.appVersion.getVersionNumber().then((data:any)=>{
      this.version = data;
    });
  }

  ngOnInit() {
  }

}
