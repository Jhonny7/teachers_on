import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ComentarioModel } from './../../models/ComentarioModel';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { VideoModel } from 'src/models/VideoModel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { NavController, Events } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.page.html',
  styleUrls: ['./video-info.page.scss'],
})
export class VideoInfoPage implements OnInit, OnDestroy {

  public video: VideoModel;
  public comentario: string = "";
  public comentarios: ComentarioModel[] = null;
  public user: any;
  public clickeable: boolean = false;

  public blueLike: boolean = false;
  public blueNoLike: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertaService: AlertaService,
    private genericService: GenericService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private loadingService: LoadingService,
    private event: Events,
    private socialSharing: SocialSharing
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));


    this.route.params.subscribe((params: any) => {
      this.video = JSON.parse(params.video);
      this.video.like = parseInt(this.video.like.toString());
      this.video.no_like = parseInt(this.video.like.toString());
      this.video.temporal = this.cambioTemporal();

      if (localStorage.getItem(`video${this.video.id}`) !== null) {
        this.blueLike = true;
      }

      if (localStorage.getItem(`rmvideo${this.video.id}`) !== null) {
        this.blueNoLike = true;
      }
      console.log(this.video);
      this.cargarComentarios();
    });

    this.event.subscribe('newMessage', data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.event.unsubscribe('newMessage');
  }

  cargarComentarios(): any {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("comentarios/comentariosByVideo", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.comentarios = [];
        res.parameters.forEach(comentario => {
          this.comentarios.push(new ComentarioModel(
            comentario.id,
            comentario.comentario,
            comentario.fecha_alta,
            comentario.img_base64,
            comentario.nombre,
            comentario.like,
            comentario.no_like
          ));
        });
        console.log(this.comentarios);
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
      console.log(err.error.description);
      console.log(err.error);
      this.comentarios = [];
      //this.loadingService.hide();
      //this.navCtrl.pop();
      //this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  ngOnInit() {
  }

  cambioTemporal() {
    let url = this.video.url;
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

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${returnUrl}`);
  }

  sendComment() {
    if (this.comentario !== null && this.comentario.length > 0) {
      let params = {
        'idUsuario': this.user.id,
        'descripcion': this.comentario,
        'idVideo': this.video.id
      };
      this.genericService.post("comentarios/createComentario", JSON.stringify(params)).subscribe((res: any) => {
        console.log(res);
        if (res.parameters) {
          this.comentario = "";
          this.cargarComentarios();
        }
        //this.loadingService.hide();
      }, (err: HttpErrorResponse) => {
        console.log(err.error.description);
        console.log(err.error);
        this.comentarios = [];
        //this.loadingService.hide();
        //this.navCtrl.pop();
        //this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
      });
    }
  }

  addAsc() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/like", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueLike = true;
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  addAsc2() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/like", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueLike = true;
        this.rmDesc();
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  rmAsc() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueNoLike = true;
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  rmAsc2() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueNoLike = true;
        this.addDesc();
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  addDesc() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueLike = false;
        this.rmAsc();
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  rmDesc() {
    let params = {
      'id': this.video.id
    };
    this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      if (res.parameters) {
        this.blueNoLike = false;
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/like", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueLike = true;
          }
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
        });
      }
      //this.loadingService.hide();
    }, (err: HttpErrorResponse) => {
    });
  }

  addLikeVideo() {
    if (!this.clickeable) {
      if (this.blueLike && !this.blueNoLike) {
        console.log("like false");

        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueLike = false;
            localStorage.removeItem(`video${this.video.id}`);
            //localStorage.setItem(`video${this.video.id}`,"1");
            console.log("like false 2");
          }
          this.clickeable = false;
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      } if (!this.blueLike && !this.blueNoLike) {
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/like", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueLike = true;
            //localStorage.removeItem(`video${this.video.id}`);
            localStorage.setItem(`video${this.video.id}`, "1");
          }
          this.clickeable = false;
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      } else {
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueNoLike = false;
            localStorage.removeItem(`rmvideo${this.video.id}`);
            //localStorage.setItem(`video${this.video.id}`,"1");
            let params = {
              'id': this.video.id
            };
            this.genericService.post("cursos/like", JSON.stringify(params)).subscribe((res: any) => {
              console.log(res);
              if (res.parameters) {
                this.blueLike = true;
                //    localStorage.removeItem(`video${this.video.id}`);
                localStorage.setItem(`video${this.video.id}`, "1");
              }
              this.clickeable = false;
              //this.loadingService.hide();
            }, (err: HttpErrorResponse) => {
              this.clickeable = false;
            });
          }
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      }
    }
  }

  removeLikeVideo() {
    if (!this.clickeable) {
      this.clickeable = true;
      if (this.blueNoLike && !this.blueLike) {
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueNoLike = false;
            localStorage.removeItem(`rmvideo${this.video.id}`);
            //localStorage.setItem(`video${this.video.id}`,"1");
          }
          this.clickeable = false;
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      } if (!this.blueNoLike && !this.blueLike) {
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueNoLike = true;
            //localStorage.removeItem(`video${this.video.id}`);
            localStorage.setItem(`rmvideo${this.video.id}`, "1");
          }
          this.clickeable = false;
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      } else {
        let params = {
          'id': this.video.id
        };
        this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe((res: any) => {
          console.log(res);
          if (res.parameters) {
            this.blueLike = false;
            localStorage.removeItem(`rmvideo${this.video.id}`);
            //localStorage.setItem(`rmvideo${this.video.id}`,"1");
            let params = {
              'id': this.video.id
            };
            this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe((res: any) => {
              console.log(res);
              if (res.parameters) {
                this.blueNoLike = true;
                localStorage.setItem(`rmvideo${this.video.id}`, "1");
              }
              this.clickeable = false;
              //this.loadingService.hide();
            }, (err: HttpErrorResponse) => {
              this.clickeable = false;
            });
          }
          //this.loadingService.hide();
        }, (err: HttpErrorResponse) => {
          this.clickeable = false;
        });
        return;
      }
    }
  }

  compartir() {
    this.socialSharing.share("Hey! te comparto este video que me ayudó mucho en mi aprendizaje", null, null, this.video.url)
      .then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log("error");
        console.log(error);
      });
  }
}
