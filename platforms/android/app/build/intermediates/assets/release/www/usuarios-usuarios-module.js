(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-usuarios/crud-usuarios.page */ "./src/app/crud-usuarios/crud-usuarios.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/usuarios/usuarios.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_7__["UsuariosPage"]
    }
];
var UsuariosPageModule = /** @class */ (function () {
    function UsuariosPageModule() {
    }
    UsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_7__["UsuariosPage"], _crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__["CrudUsuariosPage"]],
            entryComponents: [_crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__["CrudUsuariosPage"]]
        })
    ], UsuariosPageModule);
    return UsuariosPageModule;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.page.html":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Usuarios\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"contenedorSpinner\" *ngIf=\"usuarios == null || usuarios.length == 0\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list class=\"margin_top_list\">\n    <ion-item-sliding *ngFor=\"let usuario of usuarios\" class=\"animated tada\">\n      <ion-item class=\"margin_top\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{usuario.img}}\" *ngIf=\"usuario.img !== null\">\n          <img src=\"assets/imgs/usuarios/user.svg\" *ngIf=\"usuario.img === null\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{usuario.nombre}} {{usuario.apellidoPaterno}} {{usuario.apellidoMaterno}}</h2>\n          <h3>{{usuario.email}}</h3>\n          <p>Fecha de creación: {{usuario.fecha}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\" class=\"margin_top\">\n        <ion-item-option (click)=\"editar(usuario)\">\n          <div class=\"divText\">\n            <div>Editar</div>\n            <ion-icon name=\"construct\"></ion-icon>\n          </div>\n        </ion-item-option>\n        <ion-item-option (click)=\"eliminar(usuario)\" color=\"danger\">\n          <div class=\"divText\">\n            <div>Borrar</div>\n            <ion-icon name=\"trash\"></ion-icon>\n          </div>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"user.id_rol == 1 && usuarios !== null && usuarios.length > 0\"\n    class=\"animated swing\">\n    <ion-fab-button color=\"dark\" (click)=\"openCrud(1)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/usuarios/usuarios.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.margin_top {\n  margin-top: 0px; }\n\n.margin_top_list {\n  margin-top: 4px; }\n\n.divText {\n  margin-top: -5px; }\n\n.divText div {\n    display: inline-block;\n    margin-right: 5px; }\n\n.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios {\n  background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);\n  top: 47px;\n  left: calc(62px - var(--ion-safe-area-right, 0px)) !important;\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  width: 311px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQUdJLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxxRUFBZ0U7RUFDaEUsU0FBUztFQUNULDZEQUE2RDtFQUM3RCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAubWFyZ2luX3RvcHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLm1hcmdpbl90b3BfbGlzdHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbiAgLmRpdlRleHR7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBkaXZ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5wb3BvdmVyLXRyYW5zbHVjZW50LnNjLWlvbi1wb3BvdmVyLWlvcy1oIC5wb3BvdmVyLWFycm93LnNjLWlvbi1wb3BvdmVyLWlvczphZnRlciwgLnBvcG92ZXItdHJhbnNsdWNlbnQuc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1pb3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCk7XG4gICAgdG9wOiA0N3B4O1xuICAgIGxlZnQ6IGNhbGMoNjJweCAtIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgIHdpZHRoOiAzMTFweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/usuarios/usuarios.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-usuarios/crud-usuarios.page */ "./src/app/crud-usuarios/crud-usuarios.page.ts");
/* harmony import */ var _models_UsuarioModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/UsuarioModel */ "./src/models/UsuarioModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(genericService, loadingService, alertaService, modalController, alertCtrl) {
        this.genericService = genericService;
        this.loadingService = loadingService;
        this.alertaService = alertaService;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.page = 0;
        this.limit = 10;
        this.usuarios = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.cargarUsuariosByPage();
    }
    UsuariosPage.prototype.ngOnInit = function () {
    };
    UsuariosPage.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            //complete()  signify that the refreshing has completed and to close the refresher
            _this.usuarios = [];
            _this.page = 0;
            event.target.complete();
            _this.cargarUsuariosByPage();
        }, 3000);
    };
    UsuariosPage.prototype.cargarUsuariosByPage = function () {
        var _this = this;
        this.usuarios = [];
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
        this.genericService.post("usuarios/getUsuarios", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                res.parameters.forEach(function (usuario) {
                    _this.usuarios.push(new _models_UsuarioModel__WEBPACK_IMPORTED_MODULE_2__["UsuarioModel"](usuario.id, usuario.id_rol, usuario.nombre, usuario.apellido_paterno, usuario.apellido_materno, usuario.email, usuario.fecha, usuario.img_base64, usuario.id_status));
                });
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
    UsuariosPage.prototype.editar = function (usuario) {
        this.usuario = usuario;
        this.openCrud(2);
    };
    //1 = crear, 0 = editar
    UsuariosPage.prototype.openCrud = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__["CrudUsuariosPage"],
                                componentProps: {
                                    type: "Crear",
                                    usuarios: this.usuarios
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
                                _this.cargarUsuariosByPage();
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
                        this.openModalEdit(this.usuario);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsuariosPage.prototype.openModalEdit = function (usuario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _crud_usuarios_crud_usuarios_page__WEBPACK_IMPORTED_MODULE_1__["CrudUsuariosPage"],
                            componentProps: {
                                type: "Editar",
                                usuario: usuario
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
                                _this.cargarUsuariosByPage();
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
    UsuariosPage.prototype.eliminar = function (usuario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Confirmación",
                            message: "¿Estás seguro de eliminar el usuario?, éste ya no podrá acceder a la plataforma.",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.eliminarUsuario(usuario);
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
    UsuariosPage.prototype.eliminarUsuario = function (usuario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    id: usuario.id
                };
                this.loadingService.show().then(function () {
                    _this.genericService.post("usuarios/deleteUsuario", JSON.stringify(params)).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "A") {
                            return _this.removeitem(usuario).then(function () {
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
    UsuariosPage.prototype.removeitem = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = this.usuarios.findIndex(function (nivel) { return nivel.id == n.id; });
                this.usuarios = this.usuarios.slice(0, index).concat(this.usuarios.slice(index + 1));
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(true);
                    })];
            });
        });
    };
    UsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.page.html */ "./src/app/usuarios/usuarios.page.html"),
            styles: [__webpack_require__(/*! ./usuarios.page.scss */ "./src/app/usuarios/usuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_4__["GenericService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], UsuariosPage);
    return UsuariosPage;
}());



/***/ }),

/***/ "./src/models/UsuarioModel.ts":
/*!************************************!*\
  !*** ./src/models/UsuarioModel.ts ***!
  \************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel(id, idRol, nombre, apellidoPaterno, apellidoMaterno, email, fecha, img, idStatus) {
        this.id = id;
        this.idRol = idRol;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.email = email;
        this.fecha = fecha;
        this.img = img;
        this.idStatus = idStatus;
    }
    return UsuarioModel;
}());



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map