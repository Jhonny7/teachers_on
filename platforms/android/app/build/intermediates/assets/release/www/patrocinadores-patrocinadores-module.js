(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patrocinadores-patrocinadores-module"],{

/***/ "./src/app/patrocinadores/patrocinadores.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/patrocinadores/patrocinadores.module.ts ***!
  \*********************************************************/
/*! exports provided: PatrocinadoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresPageModule", function() { return PatrocinadoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-patrocinadores/crud-patrocinadores.page */ "./src/app/crud-patrocinadores/crud-patrocinadores.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patrocinadores_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patrocinadores.page */ "./src/app/patrocinadores/patrocinadores.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _patrocinadores_page__WEBPACK_IMPORTED_MODULE_7__["PatrocinadoresPage"]
    }
];
var PatrocinadoresPageModule = /** @class */ (function () {
    function PatrocinadoresPageModule() {
    }
    PatrocinadoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_patrocinadores_page__WEBPACK_IMPORTED_MODULE_7__["PatrocinadoresPage"], _crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_1__["CrudPatrocinadoresPage"]],
            entryComponents: [_crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_1__["CrudPatrocinadoresPage"]]
        })
    ], PatrocinadoresPageModule);
    return PatrocinadoresPageModule;
}());



/***/ }),

/***/ "./src/app/patrocinadores/patrocinadores.page.html":
/*!*********************************************************!*\
  !*** ./src/app/patrocinadores/patrocinadores.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Patrocinadores\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"contenedorSpinner\" *ngIf=\"patrocinadores == null || patrocinadores.length == 0\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <!-- <div class=\"cardPatrocinador\">\n    <div class=\"imagen\">\n      <img src=\"assets/imgs/categoria/categoria.png\">\n    </div>\n    <div class=\"contenido\">\n      <h2>Ejemplo de Titulo</h2>\n      <h3>Ejemplo de texto</h3>\n      <a href=\"\">www.youtube.com</a>\n    </div>\n  </div> -->\n\n  <ion-card *ngFor=\"let patrocinador of patrocinadores\" class=\"animated pulse\">\n    <img src=\"{{patrocinador.img_url}}\" class=\"imagenCard\" alt=\"\" *ngIf=\"patrocinador.img_url !== null\" (click)=\"openOptionsSelect(patrocinador)\">\n    <img src=\"{{patrocinador.img_base64}}\" class=\"imagenCard\" alt=\"\" *ngIf=\"patrocinador.img_base64 !== null\" (click)=\"openOptionsSelect(patrocinador)\">\n    <img src=\"assets/imgs/patrocinadores/patrocinadores.png\" class=\"imagenCard\" alt=\"\" \n    *ngIf=\"patrocinador.img_base64 === null && patrocinador.img_url === null\" (click)=\"openOptionsSelect(patrocinador)\">\n    <ion-card-header>\n      <ion-card-subtitle (click)=\"openLink(patrocinador.url)\"><a href=\"\">{{patrocinador.url}}</a></ion-card-subtitle>\n      <ion-card-title (click)=\"openOptionsSelect(patrocinador)\">{{patrocinador.descripcion}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content style=\"text-align: justify;\" (click)=\"openOptionsSelect(patrocinador)\">\n        {{patrocinador.informacion}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"user.id_rol == 1 && patrocinadores !== null && patrocinadores.length > 0\"\n      class=\"animated swing\">\n      <ion-fab-button color=\"dark\" (click)=\"openCrud(1)\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/patrocinadores/patrocinadores.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/patrocinadores/patrocinadores.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardPatrocinador {\n  padding: 8px;\n  border-bottom: 1px solid #e2e2e2; }\n  .cardPatrocinador .imagen {\n    display: inline-block;\n    width: 25%;\n    vertical-align: super; }\n  .cardPatrocinador .imagen img {\n      width: 80px;\n      height: 80px; }\n  .cardPatrocinador .contenido {\n    display: inline-block;\n    width: 70%;\n    margin-left: 5%; }\n  .cardPatrocinador .contenido h2 {\n      margin-top: 0px;\n      margin-bottom: -9px; }\n  .imagenCard {\n  width: 150px;\n  height: 150px;\n  /* margin-left: 18px; */\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3BhdHJvY2luYWRvcmVzL3BhdHJvY2luYWRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0MsRUFBQTtFQUZsQztJQUlJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YscUJBQXFCLEVBQUE7RUFOekI7TUFRTSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBVGxCO0lBYUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlLEVBQUE7RUFmbkI7TUFpQk0sZUFBZTtNQUNmLG1CQUFtQixFQUFBO0VBU3pCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBQTtFQUNBLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhdHJvY2luYWRvcmVzL3BhdHJvY2luYWRvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkUGF0cm9jaW5hZG9yIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgLmltYWdlbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gIH1cbiAgLmNvbnRlbmlkbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGgyIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC05cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICB9XG4gICAgYSB7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZW5DYXJke1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxOHB4OyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/patrocinadores/patrocinadores.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/patrocinadores/patrocinadores.page.ts ***!
  \*******************************************************/
/*! exports provided: PatrocinadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresPage", function() { return PatrocinadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_external_url_service_external_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/external-url-service/external-url.service */ "./src/services/external-url-service/external-url.service.ts");
/* harmony import */ var _crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../crud-patrocinadores/crud-patrocinadores.page */ "./src/app/crud-patrocinadores/crud-patrocinadores.page.ts");
/* harmony import */ var _models_Patrocinador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/Patrocinador */ "./src/models/Patrocinador.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var PatrocinadoresPage = /** @class */ (function () {
    function PatrocinadoresPage(loadingService, genericService, alertaService, modalController, alertCtrl, actionSheetController, externalUrlService) {
        this.loadingService = loadingService;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.externalUrlService = externalUrlService;
        this.user = null;
        this.patrocinadores = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.chargePatrocinadores();
    }
    PatrocinadoresPage.prototype.ngOnInit = function () {
    };
    PatrocinadoresPage.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            //complete()  signify that the refreshing has completed and to close the refresher
            _this.patrocinadores = [];
            event.target.complete();
            _this.chargePatrocinadores();
        }, 3000);
    };
    PatrocinadoresPage.prototype.openLink = function (link) {
        this.externalUrlService.openUrl(link);
    };
    PatrocinadoresPage.prototype.chargePatrocinadores = function () {
        var _this = this;
        this.patrocinadores = [];
        var path = "patrocinadores/getPatrocinadores";
        if (this.user.id_rol != 1) {
            path = "patrocinadores/getPatrocinadoresActivos";
        }
        this.genericService.post(path, JSON.stringify({})).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                res.parameters.forEach(function (patrocinador) {
                    _this.patrocinadores.push(new _models_Patrocinador__WEBPACK_IMPORTED_MODULE_3__["PatrocinadorModel"](patrocinador.id, patrocinador.descripcion, patrocinador.url_image, patrocinador.base64_image, patrocinador.url, patrocinador.informacion, patrocinador.id_status));
                });
                _this.loadingService.hide();
            }
        }, function (err) {
            console.log(err.error.description);
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    //1 = crear, 0 = editar
    PatrocinadoresPage.prototype.openCrud = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_2__["CrudPatrocinadoresPage"],
                                componentProps: {
                                    type: "Crear"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                //this.loadingService.show().then(() => {
                                _this.chargePatrocinadores();
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
                        this.openModalEdit(this.patrocinador);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PatrocinadoresPage.prototype.openModalEdit = function (patrocinador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _crud_patrocinadores_crud_patrocinadores_page__WEBPACK_IMPORTED_MODULE_2__["CrudPatrocinadoresPage"],
                            componentProps: {
                                type: "Editar",
                                patrocinador: patrocinador
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                //this.loadingService.show().then(() => {
                                _this.chargePatrocinadores();
                                //});
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
    PatrocinadoresPage.prototype.openOptionsSelect = function (patrocinador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.user.id_rol == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionSheetController.create({
                                //header: 'Selecciona',
                                buttons: [{
                                        text: 'Borrar',
                                        role: 'destructive',
                                        icon: 'trash',
                                        handler: function () {
                                            _this.eliminar(patrocinador);
                                        }
                                    }, {
                                        text: 'Editar',
                                        icon: 'build',
                                        handler: function () {
                                            _this.patrocinador = patrocinador;
                                            _this.openCrud(2);
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
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**Lógica de eliminado */
    PatrocinadoresPage.prototype.eliminar = function (patrocinador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Confirmación",
                            message: "¿Estás seguro de eliminar el patrocinador?, recuerda que tus usuarios ya no podrán verlo nuevamente",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.eliminarPatrocinador(patrocinador);
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
    PatrocinadoresPage.prototype.eliminarPatrocinador = function (patrocinador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    id: patrocinador.id
                };
                this.loadingService.show().then(function () {
                    _this.genericService.post("patrocinadores/deletePatrocinador", JSON.stringify(params)).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "A") {
                            return _this.removeitem(patrocinador).then(function () {
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
    PatrocinadoresPage.prototype.removeitem = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = this.patrocinadores.findIndex(function (nivel) { return nivel.id == n.id; });
                this.patrocinadores = this.patrocinadores.slice(0, index).concat(this.patrocinadores.slice(index + 1));
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(true);
                    })];
            });
        });
    };
    PatrocinadoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-patrocinadores',
            template: __webpack_require__(/*! ./patrocinadores.page.html */ "./src/app/patrocinadores/patrocinadores.page.html"),
            styles: [__webpack_require__(/*! ./patrocinadores.page.scss */ "./src/app/patrocinadores/patrocinadores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_6__["GenericService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_7__["AlertaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _services_external_url_service_external_url_service__WEBPACK_IMPORTED_MODULE_1__["ExternalUrlService"]])
    ], PatrocinadoresPage);
    return PatrocinadoresPage;
}());



/***/ }),

/***/ "./src/models/Patrocinador.ts":
/*!************************************!*\
  !*** ./src/models/Patrocinador.ts ***!
  \************************************/
/*! exports provided: PatrocinadorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadorModel", function() { return PatrocinadorModel; });
var PatrocinadorModel = /** @class */ (function () {
    function PatrocinadorModel(id, descripcion, img_url, img_base64, url, informacion, idStatus) {
        this.id = id;
        this.descripcion = descripcion;
        this.img_url = img_url;
        this.img_base64 = img_base64;
        this.url = url;
        this.informacion = informacion;
        this.idStatus = idStatus;
    }
    return PatrocinadorModel;
}());



/***/ })

}]);
//# sourceMappingURL=patrocinadores-patrocinadores-module.js.map