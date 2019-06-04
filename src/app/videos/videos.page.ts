import { GenericService } from 'src/services/generic-service/generic-service.service';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoModel } from 'src/models/VideoModel';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  private id: number;
  public videos: VideoModel[] = [];
  public categoria: string = "";

  public search: boolean = false;

  public buscar: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertaService: AlertaService,
    private genericService: GenericService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.chargeVideosByCategory();
    });
  }

  ngOnInit() {

  }

  chargeVideosByCategory() {
    //let params = new HttpParams();
    //params = params.append('idCategoria', this.id.toString());
    this.videos=[];
    let params = {
      'idCategoria': this.id
    };
    this.genericService.post("cursos/getVideosByCategory", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        let cont = 0;
        res.parameters.forEach(video => {
          if (cont === 0) {
            this.categoria = video.descripcion_categoria;
          }
          this.videos.push(new VideoModel(
            video.id,
            video.descripcion,
            video.url,
            video.descripcion_categoria,
            this.returnUrlImage(video.url),
            video.like,
            video.no_like
          ));
          cont++;
        });
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
      console.log(err.error.description);
      console.log(err.error);
      //this.loadingService.hide();
      this.navCtrl.pop();
      this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  returnUrlImage(url: string) {
    let returnUrl: string = "";
    let obtenerYoutube: string[] = url.split("youtube");
    if (obtenerYoutube[1]) {
      let splitPage: string[] = url.split("v=");
      let splitPage2: string[] = splitPage[1].split("&");
      if (splitPage2) {
        returnUrl = splitPage2[0];
      } else {
        returnUrl = splitPage[1];
      }
    } else {
      //Es sacado de celular
      let splitPage: string[] = url.split(".be/");
      if (splitPage) {
        returnUrl = splitPage[1];
      } else {
        //links que no son de youtube
        returnUrl = "";
        return returnUrl;
      }
    }
    //console.log(returnUrl + "  " + video.id);

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${returnUrl}/0.jpg`);
  }

  returnUrl(url: string) {
    //console.log(video);
    //let url = video.url;
    let returnUrl: string = "";
    let obtenerYoutube: string[] = url.split("youtube");
    if (obtenerYoutube[1]) {
      let splitPage: string[] = url.split("v=");
      let splitPage2: string[] = splitPage[1].split("&");
      if (splitPage2) {
        returnUrl = splitPage2[0];
      } else {
        returnUrl = splitPage[1];
      }
    } else {
      //Es sacado de celular
      let splitPage: string[] = url.split(".be/");
      if (splitPage) {
        returnUrl = splitPage[1];
      } else {
        //links que no son de youtube
        returnUrl = url;
        return returnUrl;
      }
    }
    //console.log(returnUrl + "  " + video.id);

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${returnUrl}?controls=0`);
  }

  habilitarBusqueda() {
    this.search = !this.search;
  }

  busqueda(){
    console.log(this.buscar);
  }

  openVideo(video:VideoModel){
    console.log("-.-.-.-.-.-.-.-..-.-.-.-.-.");
    console.log(video);
    this.router.navigate(['video-info',{video:JSON.stringify(video)}]);
  }
}
