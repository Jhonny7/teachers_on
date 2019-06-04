(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-admin-videos-admin-module"],{

/***/ "./src/app/videos-admin/videos-admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/videos-admin/videos-admin.module.ts ***!
  \*****************************************************/
/*! exports provided: VideosAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosAdminPageModule", function() { return VideosAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-videos/crud-videos.page */ "./src/app/crud-videos/crud-videos.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videos_admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos-admin.page */ "./src/app/videos-admin/videos-admin.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _videos_admin_page__WEBPACK_IMPORTED_MODULE_7__["VideosAdminPage"]
    }
];
var VideosAdminPageModule = /** @class */ (function () {
    function VideosAdminPageModule() {
    }
    VideosAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_videos_admin_page__WEBPACK_IMPORTED_MODULE_7__["VideosAdminPage"], _crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_1__["CrudVideosPage"]],
            entryComponents: [_crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_1__["CrudVideosPage"]]
        })
    ], VideosAdminPageModule);
    return VideosAdminPageModule;
}());



/***/ }),

/***/ "./src/app/videos-admin/videos-admin.page.html":
/*!*****************************************************!*\
  !*** ./src/app/videos-admin/videos-admin.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Cursos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"contenedorSpinner\" *ngIf=\"videos == null || videos.length == 0\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list class=\"margin_top_list\">\n    <ion-item-sliding *ngFor=\"let video of videos\" class=\"animated shake\">\n      <ion-item class=\"margin_top\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"returnUrl(video)\" *ngIf=\"video.url !== null\">\n          <img src=\"assets/imgs/videos/videos.png\" *ngIf=\"video.url === null\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{video.descripcion}}</h2>\n          <h3>Categoría: {{video.categoria_descripcion}}</h3>\n          <p>Fecha de creación: {{video.fecha}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\" class=\"margin_top\">\n        <ion-item-option (click)=\"editar(video)\">\n          <div class=\"divText\">\n            <div>Editar</div>\n            <ion-icon name=\"construct\"></ion-icon>\n          </div>\n        </ion-item-option>\n        <ion-item-option (click)=\"eliminar(video)\" color=\"danger\">\n          <div class=\"divText\">\n            <div>Borrar</div>\n            <ion-icon name=\"trash\"></ion-icon>\n          </div>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"user.id_rol == 1 && videos !== null && videos.length > 0\"\n    class=\"animated swing\">\n    <ion-fab-button color=\"dark\" (click)=\"openCrud(1)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/videos-admin/videos-admin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/videos-admin/videos-admin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.margin_top {\n  margin-top: 0px; }\n\n.margin_top_list {\n  margin-top: 4px; }\n\n.divText {\n  margin-top: -5px; }\n\n.divText div {\n    display: inline-block;\n    margin-right: 5px; }\n\n.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios {\n  background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);\n  top: 47px;\n  left: calc(62px - var(--ion-safe-area-right, 0px)) !important;\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  width: 311px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3ZpZGVvcy1hZG1pbi92aWRlb3MtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBR0kscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLHFFQUFnRTtFQUNoRSxTQUFTO0VBQ1QsNkRBQTZEO0VBQzdELG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zLWFkbWluL3ZpZGVvcy1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLm1hcmdpbl90b3B7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5tYXJnaW5fdG9wX2xpc3R7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG4gIC5kaXZUZXh0e1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgZGl2e1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG4gIFxuICAucG9wb3Zlci10cmFuc2x1Y2VudC5zYy1pb24tcG9wb3Zlci1pb3MtaCAucG9wb3Zlci1hcnJvdy5zYy1pb24tcG9wb3Zlci1pb3M6YWZ0ZXIsIC5wb3BvdmVyLXRyYW5zbHVjZW50LnNjLWlvbi1wb3BvdmVyLWlvcy1oIC5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItaW9zIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpO1xuICAgIHRvcDogNDdweDtcbiAgICBsZWZ0OiBjYWxjKDYycHggLSB2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0LCAwcHgpKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICB3aWR0aDogMzExcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/videos-admin/videos-admin.page.ts":
/*!***************************************************!*\
  !*** ./src/app/videos-admin/videos-admin.page.ts ***!
  \***************************************************/
/*! exports provided: VideosAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosAdminPage", function() { return VideosAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_CategoriaModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/CategoriaModel */ "./src/models/CategoriaModel.ts");
/* harmony import */ var _crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../crud-videos/crud-videos.page */ "./src/app/crud-videos/crud-videos.page.ts");
/* harmony import */ var _models_VideoAdminModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/VideoAdminModel */ "./src/models/VideoAdminModel.ts");
/* harmony import */ var _services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










var VideosAdminPage = /** @class */ (function () {
    function VideosAdminPage(genericService, loadingService, alertaService, sanitizer, modalController, alertCtrl) {
        this.genericService = genericService;
        this.loadingService = loadingService;
        this.alertaService = alertaService;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.page = 0;
        this.limit = 10;
        this.videos = [];
        this.categorias = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.chargeCategories();
    }
    VideosAdminPage.prototype.ngOnInit = function () {
    };
    VideosAdminPage.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            //complete()  signify that the refreshing has completed and to close the refresher
            _this.videos = [];
            _this.page = 0;
            event.target.complete();
            _this.cargarVideosByPage();
        }, 3000);
    };
    VideosAdminPage.prototype.cargarVideosByPage = function () {
        var _this = this;
        this.videos = [];
        var params;
        if (this.page !== 0) {
            params = {
                'start': this.page * this.limit + 1,
                'end': this.limit
            };
        }
        else {
            params = {
                'start': this.page,
                'end': this.limit
            };
        }
        this.genericService.post("cursos/getVideosByPage", JSON.stringify(params)).subscribe(function (res) {
            //console.log(res);
            if (res.parameters) {
                res.parameters.forEach(function (video) {
                    _this.videos.push(new _models_VideoAdminModel__WEBPACK_IMPORTED_MODULE_3__["VideoAdminModel"](video.id, video.descripcion, video.url, video.descripcion_categoria, video.fecha, video.idCategoria));
                });
                console.log(_this.videos);
            }
            if (_this.page !== 0) {
            }
            _this.page++;
            _this.loadingService.hide();
        }, function (err) {
            console.log(err.error.description);
            console.log(err.error);
            _this.loadingService.hide();
            _this.alertaService.warnAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    VideosAdminPage.prototype.returnUrl = function (video) {
        //console.log(video);
        var url = video.url;
        var returnUrl = "";
        var obtenerYoutube = url.split("youtube");
        if (obtenerYoutube[1]) {
            var splitPage = url.split("v=");
            var splitPage2 = splitPage[1].split("&");
            if (splitPage2) {
                returnUrl = splitPage2[0];
            }
            else {
                returnUrl = splitPage[1];
            }
        }
        else {
            //Es sacado de celular
            var splitPage = url.split(".be/");
            if (splitPage) {
                returnUrl = splitPage[1];
            }
            else {
                //links que no son de youtube
                returnUrl = "";
                return returnUrl;
            }
        }
        //console.log(returnUrl + "  " + video.id);
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/" + returnUrl + "/0.jpg");
    };
    VideosAdminPage.prototype.editar = function (video) {
        this.video = video;
        this.openCrud(2);
    };
    //1 = crear, 0 = editar
    VideosAdminPage.prototype.openCrud = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_2__["CrudVideosPage"],
                                componentProps: {
                                    type: "Crear",
                                    categorias: this.categorias
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                //this.loadingService.show().then(() => {
                                _this.page = 0;
                                _this.cargarVideosByPage();
                                //});
                            }
                            else {
                                console.log("Data null");
                                _this.loadingService.hide();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        console.log("------------------------------");
                        console.log(this.video);
                        this.openModalEdit(this.video);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VideosAdminPage.prototype.openModalEdit = function (video) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _crud_videos_crud_videos_page__WEBPACK_IMPORTED_MODULE_2__["CrudVideosPage"],
                            componentProps: {
                                type: "Editar",
                                video: video,
                                categorias: this.categorias
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                            console.log(data.data);
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                _this.page = 0;
                                _this.cargarVideosByPage();
                            }
                            else {
                                console.log("Data null");
                                _this.loadingService.hide();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**Lógica de eliminado */
    VideosAdminPage.prototype.eliminar = function (video) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Confirmación",
                            message: "¿Estás seguro de eliminar el video?, recuerda que ya no lo podrán ver tus usuarios.",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.eliminarVideo(video);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VideosAdminPage.prototype.eliminarVideo = function (video) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    id: video.id
                };
                this.loadingService.show().then(function () {
                    _this.genericService.post("cursos/deleteCurso", JSON.stringify(params)).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "A") {
                            return _this.removeitem(video).then(function () {
                                _this.loadingService.hide();
                            });
                        }
                        else {
                            _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
                        }
                        _this.loadingService.hide();
                    }, function (err) {
                        console.log(err);
                        _this.loadingService.hide();
                        _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    VideosAdminPage.prototype.removeitem = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = this.videos.findIndex(function (nivel) { return nivel.id == n.id; });
                this.videos = this.videos.slice(0, index).concat(this.videos.slice(index + 1));
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(true);
                    })];
            });
        });
    };
    VideosAdminPage.prototype.chargeCategories = function () {
        var _this = this;
        this.categorias = [];
        this.genericService.post("categorias/categorias", JSON.stringify({})).subscribe(function (res) {
            //console.log(res);
            if (res.parameters) {
                res.parameters.forEach(function (categoria) {
                    _this.categorias.push(new _models_CategoriaModel__WEBPACK_IMPORTED_MODULE_1__["CategoriaModel"](categoria.id, categoria.descripcion, categoria.img_url, categoria.img_base64, categoria.color));
                });
                _this.cargarVideosByPage();
                //this.loadingService.hide();
            }
        }, function (err) {
            //console.log(err.error.description);
            //this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    VideosAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-videos-admin',
            template: __webpack_require__(/*! ./videos-admin.page.html */ "./src/app/videos-admin/videos-admin.page.html"),
            styles: [__webpack_require__(/*! ./videos-admin.page.scss */ "./src/app/videos-admin/videos-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            _services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]])
    ], VideosAdminPage);
    return VideosAdminPage;
}());



/***/ }),

/***/ "./src/models/VideoAdminModel.ts":
/*!***************************************!*\
  !*** ./src/models/VideoAdminModel.ts ***!
  \***************************************/
/*! exports provided: VideoAdminModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAdminModel", function() { return VideoAdminModel; });
var VideoAdminModel = /** @class */ (function () {
    function VideoAdminModel(id, descripcion, url, categoria_descripcion, fecha, idCategoria) {
        this.id = id;
        this.descripcion = descripcion;
        this.url = url;
        this.categoria_descripcion = categoria_descripcion;
        this.fecha = fecha;
        this.idCategoria = idCategoria;
    }
    return VideoAdminModel;
}());



/***/ })

}]);
//# sourceMappingURL=videos-admin-videos-admin-module.js.map