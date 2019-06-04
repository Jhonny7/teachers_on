(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~crud-patrocinadores-crud-patrocinadores-module~patrocinadores-patrocinadores-module"],{

/***/ "./src/app/crud-patrocinadores/crud-patrocinadores.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/crud-patrocinadores/crud-patrocinadores.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"icon\">\n    <ion-title>{{operation}} Patrocinador</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"!plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\">\n        <span color=\"secundary\" showWhen=\"ios\">Cancel</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\" slot=\"end\">\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"categoriaFoto\">\n    <img src=\"assets/imgs/patrocinadores/patrocinadores.png\" alt=\"\" *ngIf=\"patrocinador === null && imgBase64 === null\"\n      (click)=\"openOptionsSelect()\">\n    <img src=\"{{imgBase64}}\" alt=\"\" *ngIf=\"imgBase64 !== null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{patrocinador.img_base64}}\" alt=\"\" *ngIf=\"imgBase64 === null && patrocinador !== null && patrocinador.img_base64 !== null\"\n      (click)=\"openOptionsSelect()\">\n    <img src=\"{{patrocinador.img_url}}\" alt=\"\" *ngIf=\"imgBase64 === null && patrocinador !== null && patrocinador.img_base64 === null && patrocinador.img_url !== null\"\n      (click)=\"openOptionsSelect()\">\n  </div>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <div>\n      <p class=\"parrafo\">Nombre del Patrocinador*</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"create\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"descripcion\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.descripcion\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Url de imagen</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"code\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"Puedes seleccionar una imagen de galería\" name=\"usrnm\"\n          formControlName=\"imgUrl\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.imgUrl\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Url de la página web*</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"code-working\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"url\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.url\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Información adicional*</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"construct\" class=\"icon\"></ion-icon>\n        <textarea rows=\"2\" cols=\"50\" class=\"input-field\" formControlName=\"informacion\" required>\n            </textarea>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.informacion\"></app-error-messages>\n    <div *ngIf=\"patrocinador !== null\">\n      <ion-item class=\"itemSelect\">\n        <ion-label>Estatus</ion-label>\n        <ion-select formControlName=\"idStatus\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\">\n          <ion-select-option value=\"1\">Activo</ion-select-option>\n          <ion-select-option value=\"2\">Inactivo</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-error-messages [control]=\"formGroup.controls.idStatus\"></app-error-messages>\n    </div>\n\n  </form>\n\n\n</ion-content>\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/crud-patrocinadores/crud-patrocinadores.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/crud-patrocinadores/crud-patrocinadores.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categoriaFoto {\n  width: 100%;\n  text-align: center; }\n  .categoriaFoto img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n  .botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n  ion-item {\n  border: 0.6px solid #dbdcdc; }\n  .title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n  .boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n  .parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n  .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n  .icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n  .input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n  .input-field:focus {\n  border: 2px solid #f35858; }\n  /* Set a style for the submit button */\n  .btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n  .btn:hover {\n  opacity: 1; }\n  .itemSelect {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NydWQtcGF0cm9jaW5hZG9yZXMvY3J1ZC1wYXRyb2NpbmFkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGcEI7SUFJSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTtFQUVkO0VBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDd0IsU0FBQTtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCLEVBQUE7RUFHaEM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDhCQUE4QixFQUFBO0VBR2hDO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0Isc0NBQUE7RUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsVUFBVSxFQUFBO0VBR1o7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NydWQtcGF0cm9jaW5hZG9yZXMvY3J1ZC1wYXRyb2NpbmFkb3Jlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmlhRm90byB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG4uYm90b25Gb290ZXIge1xuICB3aWR0aDogMTAxJTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDAuNnB4IHNvbGlkICNkYmRjZGM7XG59XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5ib3RvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHdpZHRoOiAxMDAuMiU7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuXG4ucGFycmFmbyB7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMzU4NTg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xufVxuXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjM1ODU4O1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaXRlbVNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/crud-patrocinadores/crud-patrocinadores.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/crud-patrocinadores/crud-patrocinadores.page.ts ***!
  \*****************************************************************/
/*! exports provided: CrudPatrocinadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPatrocinadoresPage", function() { return CrudPatrocinadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








var CrudPatrocinadoresPage = /** @class */ (function () {
    function CrudPatrocinadoresPage(navParms, modalCtrl, platform, formBuilder, alertaService, genericService, loadingService, camera, actionSheetController) {
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertaService = alertaService;
        this.genericService = genericService;
        this.loadingService = loadingService;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.operation = "";
        this.patrocinador = null;
        this.render = false;
        this.imgBase64 = null;
        this.user = null;
        this.clicked = false;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.plataforma = platform.is("android");
        this.operation = navParms.get("type");
        if (this.operation != "Crear") {
            this.render = true;
        }
        this.formGroup = this.formBuilder.group({
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imgUrl: [''],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            informacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.operation != "Crear") {
            this.patrocinador = navParms.get("patrocinador");
            this.formGroup.patchValue({
                descripcion: this.patrocinador.descripcion,
                imgUrl: this.patrocinador.img_url,
                url: this.patrocinador.url,
                informacion: this.patrocinador.informacion,
                idStatus: this.patrocinador.idStatus
            });
            console.log(this.patrocinador);
            if (this.patrocinador !== null && this.patrocinador.img_base64 !== null) {
                this.imgBase64 = this.patrocinador.img_base64;
            }
        }
    }
    CrudPatrocinadoresPage.prototype.ngOnInit = function () {
    };
    CrudPatrocinadoresPage.prototype.cancelar = function (data) {
        if (data === void 0) { data = null; }
        console.log(data);
        this.clicked = false;
        this.modalCtrl.dismiss({ data: data });
    };
    CrudPatrocinadoresPage.prototype.validacion = function () {
        var _this = this;
        if (!this.clicked) {
            this.loadingService.show().then(function () {
                var valid = _this.formGroup.dirty && _this.formGroup.valid;
                var valid2 = false;
                if (_this.imgBase64 !== null && _this.formGroup.value.imgUrl === null
                    && _this.formGroup.value.descripcion !== null
                    && _this.formGroup.value.url !== null
                    && _this.formGroup.value.informacion !== null) {
                    valid2 = true;
                }
                else if (_this.imgBase64 === null && _this.formGroup.value.imgUrl !== null
                    && _this.formGroup.value.descripcion !== null
                    && _this.formGroup.value.url !== null
                    && _this.formGroup.value.informacion !== null) {
                    valid2 = true;
                }
                if (_this.imgBase64 === null && _this.formGroup.value.imgUrl === null || _this.formGroup.value.imgUrl.length <= 0) {
                    valid2 = false;
                }
                if (valid) {
                    if (_this.render) {
                        _this.editarPatrocinador();
                    }
                    else {
                        _this.crearPatrocinador();
                    }
                }
                else if (valid === false && valid2 && _this.formGroup.value.descripcion !== null) {
                    if (_this.render) {
                        _this.editarPatrocinador();
                    }
                    else {
                        _this.crearPatrocinador();
                    }
                }
                else {
                    _this.loadingService.hide();
                    _this.alertaService.warnAlert(_this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
                }
            });
        }
    };
    CrudPatrocinadoresPage.prototype.editarPatrocinador = function () {
        var _this = this;
        var params = {
            "idUsuario": this.user.id,
            "idStatus": this.formGroup.value.idStatus,
            "descripcion": this.formGroup.value.descripcion,
            "id": this.patrocinador.id,
            "urlImage": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
            "base64Image": this.imgBase64,
            "url": this.formGroup.value.url,
            "informacion": this.formGroup.value.informacion
        };
        console.log(params);
        this.genericService.post("patrocinadores/updatePatrocinador", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El patrocinador se ha actualizado correctamente", null);
                _this.cancelar(1);
            }
            else {
                _this.clicked = false;
                _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
            }
        }, function (err) {
            console.log(err);
            console.log(err.error.description);
            _this.clicked = false;
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    CrudPatrocinadoresPage.prototype.crearPatrocinador = function () {
        var _this = this;
        var params = {
            "descripcion": this.formGroup.value.descripcion,
            "idUsuario": this.user.id,
            "urlImage": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
            "base64Image": this.imgBase64,
            "url": this.formGroup.value.url,
            "informacion": this.formGroup.value.informacion
        };
        console.log(params);
        this.genericService.post("patrocinadores/createPatrocinador", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El patrocinador se ha creado correctamente", null);
                _this.loadingService.hide();
                _this.cancelar(1);
            }
            else {
                _this.loadingService.hide();
                _this.clicked = false;
                _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
            }
            //
        }, function (err) {
            console.log(err);
            console.log(err.error.description);
            _this.clicked = false;
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    CrudPatrocinadoresPage.prototype.getPicture = function (photo) {
        var _this = this;
        console.log(photo);
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: photo ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.imgBase64 = "data:image/png;base64," + imageData;
            console.log(_this.imgBase64);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CrudPatrocinadoresPage.prototype.eliminarFoto = function () {
        if (this.imgBase64 != null) {
            this.imgBase64 = null;
        }
        else {
            this.alertaService.warnAlert("Espera!", "Aún no has seleccionado una imagen", null);
        }
    };
    CrudPatrocinadoresPage.prototype.openOptionsSelect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            //header: 'Selecciona',
                            buttons: [{
                                    text: 'Borrar',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.eliminarFoto();
                                    }
                                }, {
                                    text: 'Imagen',
                                    icon: 'image',
                                    handler: function () {
                                        _this.getPicture(false);
                                    }
                                }, {
                                    text: 'Cancelar',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CrudPatrocinadoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-patrocinadores',
            template: __webpack_require__(/*! ./crud-patrocinadores.page.html */ "./src/app/crud-patrocinadores/crud-patrocinadores.page.html"),
            styles: [__webpack_require__(/*! ./crud-patrocinadores.page.scss */ "./src/app/crud-patrocinadores/crud-patrocinadores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], CrudPatrocinadoresPage);
    return CrudPatrocinadoresPage;
}());



/***/ }),

/***/ "./src/services/generic-service/generic-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/services/generic-service/generic-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: GenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericService", function() { return GenericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GenericService = /** @class */ (function () {
    function GenericService(http) {
        this.http = http;
        //public pathService: String = "http://localhost:8080/api_teacher_on/"; //dev
        this.pathService = "http://www.soyluzradio.com/api_teacher_on/";
        //public pathService: String = "http://eikox.com.mx/api_deportes/"; //prod
        this.headerError = "Error!";
        this.mensajeError = "Verifica tu conexión y datos ó contacte al administrador";
        this.headerValidacion = "Advertencia!";
        this.headerExito = "Bien!";
        this.mensajeValidacionAdmin = "Ha ocurrido un error en el servidor, contacte al administrador";
        this.mensajeValidacionLogin = "Verifica tus credenciales";
        this.timeOver = 10000; // 10 segundos de espera en servicios
    }
    /** Peticiones GET */
    GenericService.prototype.get = function (path, params) {
        console.log("**Petición GET**");
        var p = {
            params: params
        };
        return this.http.get(this.pathService + path, p);
    };
    GenericService.prototype.put = function (path, params) {
        console.log("**Petición PUT**");
        return this.http.put(this.pathService + path, { params: params });
    };
    GenericService.prototype.post = function (path, params) {
        console.log("**Petición POST**");
        return this.http.post(this.pathService + path, params);
    };
    GenericService.prototype.delete = function (path, params) {
        console.log("**Petición DELETE**");
        return this.http.delete(this.pathService + path, params);
    };
    GenericService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GenericService);
    return GenericService;
}());



/***/ }),

/***/ "./src/services/loading-service/loading.service.ts":
/*!*********************************************************!*\
  !*** ./src/services/loading-service/loading.service.ts ***!
  \*********************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoadingService = /** @class */ (function () {
    function LoadingService(loadingController) {
        this.loadingController = loadingController;
    }
    LoadingService.prototype.show = function (message) {
        if (message === void 0) { message = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = {};
                        if (message) {
                            params.message = message;
                        }
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create(params)];
                    case 1:
                        _a.loading = _b.sent();
                        console.log(this.loading);
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingService.prototype.hide = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        else {
            console.log("sin refer");
            console.log(this.loading);
        }
    };
    LoadingService.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 5000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ })

}]);
//# sourceMappingURL=default~crud-patrocinadores-crud-patrocinadores-module~patrocinadores-patrocinadores-module.js.map