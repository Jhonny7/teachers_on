import { Component, OnInit } from '@angular/core';
import { ExternalUrlService } from 'src/services/external-url-service/external-url.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(
    private externalUrlService: ExternalUrlService
  ) { }

  ngOnInit() {
  }

  goTo(){
    this.externalUrlService.openUrl("https://www.facebook.com/TeachersSeries/");
  }
}
