import { VideoAdminModel } from './../../models/VideoAdminModel';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertaService } from 'src/services/alerta-service/alerta.service';
import { GenericService } from 'src/services/generic-service/generic-service.service';
import { LoadingService } from 'src/services/loading-service/loading.service';
import { CategoriaModel } from 'src/models/CategoriaModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-videos',
  templateUrl: './crud-videos.page.html',
  styleUrls: ['./crud-videos.page.scss'],
})
export class CrudVideosPage implements OnInit {
  private clicked: boolean = false;
  private user: any = null;
  public operation: string = "";
  public plataforma: boolean;
  public formGroup: FormGroup;

  public video: VideoAdminModel = null;
  public render: boolean = false;

  public categorias: CategoriaModel[] = [];

  constructor(
    private navParms: NavParams,
    private modalCtrl: ModalController,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private alertaService: AlertaService,
    private genericService: GenericService,
    private loadingService: LoadingService
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.plataforma = platform.is("android");
    this.operation = navParms.get("type");
    if (this.operation != "Crear") {
      this.render = true;
    }
    this.formGroup = this.formBuilder.group({
      descripcion: ['', Validators.required],
      url: ['', Validators.required],
      idCategoria: ['', Validators.required]
    });
    if (this.operation != "Crear") {
      this.video = navParms.get("video");
      this.formGroup.patchValue({
        descripcion: this.video.descripcion,
        url: this.video.url,
        idCategoria: this.video.idCategoria
      });
    }
    this.categorias = navParms.get("categorias");
  }

  ngOnInit() {
  }

  cancelar(data: any = null) {
    console.log(data);
    this.clicked = false;
    this.modalCtrl.dismiss({ data });
  }

  validacion() {
    if (!this.clicked) {
      this.loadingService.show().then(() => {
        if (this.formGroup.valid) {
          if (this.render) {
            this.editarVideo();
          } else {
            this.crearVideo();
          }
        } else {
          this.loadingService.hide();
          this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
        }
      });
    }
  }

  editarVideo() {
    let params = {
      "idUsuario": this.user.id,
      "descripcion": this.formGroup.value.descripcion,
      "url": this.formGroup.value.url,
      "idCategoria": this.formGroup.value.idCategoria,
      "id": this.video.id
    };
    console.log(params);
    this.genericService.post("cursos/updateCurso", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El curso se ha actualizado correctamente", null);
        this.cancelar(1);
      } else {
        this.clicked = false;
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
      this.clicked = false;
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }

  crearVideo() {
    let params = {
      "idUsuario": this.user.id,
      "descripcion": this.formGroup.value.descripcion,
      "url": this.formGroup.value.url,
      "idCategoria": this.formGroup.value.idCategoria
    };
    console.log(params);
    this.genericService.post("cursos/createCurso", JSON.stringify(params)).subscribe((res: any) => {
      console.log(res);
      let parametros = res;
      if (parametros.status === "A") {
        this.alertaService.alertaBasica(this.genericService.headerExito, "El curso se ha creado correctamente", null);
        this.loadingService.hide();
        this.cancelar(1);
      } else {
        this.loadingService.hide();
        this.clicked = false;
        this.alertaService.warnAlert(this.genericService.headerValidacion, res.description, null);
      }
      //
    }, (err: HttpErrorResponse) => {
      console.log(err);
      console.log(err.error.description);
      this.clicked = false;
      this.loadingService.hide();
      this.alertaService.errorAlert(this.genericService.headerError, err.error.description, null);
    });
  }
}
