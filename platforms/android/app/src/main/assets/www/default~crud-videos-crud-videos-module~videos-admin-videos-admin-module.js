(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~crud-videos-crud-videos-module~videos-admin-videos-admin-module"],{

/***/ "./src/app/crud-videos/crud-videos.page.html":
/*!***************************************************!*\
  !*** ./src/app/crud-videos/crud-videos.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"icon\">\n    <ion-title>{{operation}} Curso</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"!plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\">\n        <span color=\"secundary\" showWhen=\"ios\">Cancel</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\" slot=\"end\">\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <div>\n      <p class=\"parrafo\">Descripción</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"create\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"descripcion\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.descripcion\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Url de curso</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"code\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"Añade el link del video aquí\" name=\"usrnm\" \n        formControlName=\"url\"\n          required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.url\"></app-error-messages>\n\n    <ion-item class=\"itemSelect\">\n      <ion-label>Categoría</ion-label>\n      <ion-select formControlName=\"idCategoria\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\">\n        <ion-select-option *ngFor=\"let categoria of categorias\" [value]=\"categoria.id\">{{categoria.descripcion}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <app-error-messages [control]=\"formGroup.controls.idCategoria\"></app-error-messages>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/crud-videos/crud-videos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/crud-videos/crud-videos.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemSelect {\n  border: none !important; }\n\n.botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n\nion-item {\n  border: 0.6px solid #dbdcdc; }\n\n.title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n\n.boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n\n.parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n\n.input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n\n.icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n\n.input-field:focus {\n  border: 2px solid #f35858; }\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\n.btn:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NydWQtdmlkZW9zL2NydWQtdmlkZW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDd0IsU0FBQTtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCLHNDQUFBOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3J1ZC12aWRlb3MvY3J1ZC12aWRlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1TZWxlY3Qge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5ib3RvbkZvb3RlciB7XG4gIHdpZHRoOiAxMDElO1xuICBtYXJnaW4tbGVmdDogLTElO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5pb24taXRlbSB7XG4gIGJvcmRlcjogMC42cHggc29saWQgI2RiZGNkYztcbn1cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMTAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJvdG9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgd2lkdGg6IDEwMC4yJTtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5wYXJyYWZvIHtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2YzNTg1ODtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG59XG5cbi5pbnB1dC1maWVsZDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMzU4NTg7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/crud-videos/crud-videos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/crud-videos/crud-videos.page.ts ***!
  \*************************************************/
/*! exports provided: CrudVideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudVideosPage", function() { return CrudVideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");







var CrudVideosPage = /** @class */ (function () {
    function CrudVideosPage(navParms, modalCtrl, platform, formBuilder, alertaService, genericService, loadingService) {
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertaService = alertaService;
        this.genericService = genericService;
        this.loadingService = loadingService;
        this.clicked = false;
        this.user = null;
        this.operation = "";
        this.video = null;
        this.render = false;
        this.categorias = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.plataforma = platform.is("android");
        this.operation = navParms.get("type");
        if (this.operation != "Crear") {
            this.render = true;
        }
        this.formGroup = this.formBuilder.group({
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idCategoria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
    CrudVideosPage.prototype.ngOnInit = function () {
    };
    CrudVideosPage.prototype.cancelar = function (data) {
        if (data === void 0) { data = null; }
        console.log(data);
        this.clicked = false;
        this.modalCtrl.dismiss({ data: data });
    };
    CrudVideosPage.prototype.validacion = function () {
        var _this = this;
        if (!this.clicked) {
            this.loadingService.show().then(function () {
                if (_this.formGroup.valid) {
                    if (_this.render) {
                        _this.editarVideo();
                    }
                    else {
                        _this.crearVideo();
                    }
                }
                else {
                    _this.loadingService.hide();
                    _this.alertaService.warnAlert(_this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
                }
            });
        }
    };
    CrudVideosPage.prototype.editarVideo = function () {
        var _this = this;
        var params = {
            "idUsuario": this.user.id,
            "descripcion": this.formGroup.value.descripcion,
            "url": this.formGroup.value.url,
            "idCategoria": this.formGroup.value.idCategoria,
            "id": this.video.id
        };
        console.log(params);
        this.genericService.post("cursos/updateCurso", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El curso se ha actualizado correctamente", null);
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
    CrudVideosPage.prototype.crearVideo = function () {
        var _this = this;
        var params = {
            "idUsuario": this.user.id,
            "descripcion": this.formGroup.value.descripcion,
            "url": this.formGroup.value.url,
            "idCategoria": this.formGroup.value.idCategoria
        };
        console.log(params);
        this.genericService.post("cursos/createCurso", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El curso se ha creado correctamente", null);
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
    CrudVideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-videos',
            template: __webpack_require__(/*! ./crud-videos.page.html */ "./src/app/crud-videos/crud-videos.page.html"),
            styles: [__webpack_require__(/*! ./crud-videos.page.scss */ "./src/app/crud-videos/crud-videos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
    ], CrudVideosPage);
    return CrudVideosPage;
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
//# sourceMappingURL=default~crud-videos-crud-videos-module~videos-admin-videos-admin-module.js.map