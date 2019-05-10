(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn auth-page\" style=\"--background: url(assets/imgs/login/loginFondo.png) no-repeat center center / cover;\">\n  <div class=\"divLogo\">\n    <img src=\"assets/imgs/logo/logoT.png\" alt=\"\">\n  </div>\n  <div class=\"bienvenida\">\n    Bienvenid@\n  </div>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <div class=\"credenciales\">\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\"></ion-icon> Usuario\n        </ion-label>\n        <ion-input formControlName=\"user\" required></ion-input>\n      </ion-item>\n      <app-control-messages [control]=\"formGroup.controls.user\"></app-control-messages>\n      <div class=\"containerMedia\">\n        <ion-item class=\"columnMedia\">\n          <ion-label position=\"floating\">\n            <ion-icon name=\"key\"></ion-icon> Contraseña\n          </ion-label>\n          <ion-input formControlName=\"password\" type=\"{{verPassword}}\" required></ion-input>\n\n        </ion-item>\n        <img src=\"assets/imgs/login/eye.png\" class=\"columnMedia\" alt=\"\" (touchstart)=\"verPasswordMethod($event)\"\n          (touchend)=\"verPasswordMethod($event)\">\n      </div>\n    </div>\n    <div class=\"divCheck\">\n      <ion-item>\n        <ion-label>Mantener Sesión Activa</ion-label>\n        <ion-checkbox color=\"icon\" slot=\"start\" formControlName=\"sesionActiva\"></ion-checkbox>\n      </ion-item>\n\n    </div>\n    <div class=\"credenciales\">\n      <ion-button expand=\"block\" color=\"icon\" type=\"submit\">\n        <ion-icon slot=\"end\" name=\"log-in\"></ion-icon>\n        Ingresar\n      </ion-button>\n    </div>\n    <div class=\"register\">\n      <div>¿Nuevo en Techers On? <a (click)=\"goToRegister()\">Registrate</a></div>\n    </div>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-has-focus.label-floating.sc-ion-label-md-h,\n.item-has-focus .label-floating.sc-ion-label-md-h,\n.item-has-focus.label-stacked.sc-ion-label-md-h,\n.item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #f00; }\n\n.divCheck {\n  width: 80%;\n  margin: auto;\n  margin-top: 5%; }\n\n.divCheck ion-item {\n    --inner-border-width: 0 0 0px 0; }\n\n.divLogo {\n  text-align: center;\n  margin-top: 20%;\n  margin-bottom: 10%; }\n\n.divLogo img {\n    width: 20%;\n    box-shadow: 1px 1px 4px #000;\n    border-radius: 50px; }\n\n.bienvenida {\n  color: black;\n  font-size: 124%;\n  text-align: center;\n  text-shadow: 1px 1px 1px #123; }\n\n.credenciales {\n  text-align: -webkit-center; }\n\n.credenciales ion-item {\n    width: 80%; }\n\n.credenciales ion-item ion-input {\n      --highlight-color-focused: #ffce00;\n      font-weight: 300; }\n\n.credenciales ion-button {\n    margin-top: 15%;\n    width: 80%; }\n\n.credenciales ion-button button {\n      background-color: #ff4849; }\n\n.item-interactive.item-has-focus {\n  --highlight-background: #ff4849; }\n\n.containerMedia {\n  width: 100%; }\n\n.containerMedia img {\n    width: 9%;\n    margin-left: 1%;\n    vertical-align: bottom; }\n\n.containerMedia ion-item {\n    width: 70%; }\n\n.containerMedia ion-item ion-input {\n      --highlight-color-focused: #ffce00;\n      font-weight: 300; }\n\n.containerMedia .columnMedia {\n    display: inline-block; }\n\n.register {\n  text-align: center;\n  margin-top: 15px; }\n\n.register a {\n    text-decoration: underline;\n    color: #f00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUhoQjtJQUtJLCtCQUFxQixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSHBCO0lBS0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSwwQkFBMEIsRUFBQTs7QUFENUI7SUFHSSxVQUFVLEVBQUE7O0FBSGQ7TUFLTSxrQ0FBMEI7TUFDMUIsZ0JBQWdCLEVBQUE7O0FBTnRCO0lBVUksZUFBZTtJQUNmLFVBQVUsRUFBQTs7QUFYZDtNQWFNLHlCQUF5QixFQUFBOztBQUkvQjtFQUNFLCtCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVcsRUFBQTs7QUFEYjtJQUdJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysc0JBQXNCLEVBQUE7O0FBTDFCO0lBUUksVUFBVSxFQUFBOztBQVJkO01BVU0sa0NBQTBCO01BQzFCLGdCQUFnQixFQUFBOztBQVh0QjtJQWVJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFJSSwwQkFBMEI7SUFDMUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taGFzLWZvY3VzLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLFxuLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCxcbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLFxuLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgY29sb3I6ICNmMDA7XG59XG5cbi5kaXZDaGVjayB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGlvbi1pdGVtIHtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICB9XG59XG4uZGl2TG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbn1cblxuLmJpZW52ZW5pZGEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTI0JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzEyMztcbn1cblxuLmNyZWRlbmNpYWxlcyB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBpb24taXRlbSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBpb24taW5wdXQge1xuICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogI2ZmY2UwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ODQ5O1xuICAgIH1cbiAgfVxufVxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXMge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZmY0ODQ5O1xufVxuLmNvbnRhaW5lck1lZGlhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDklO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjZmZjZTAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gIH1cbiAgLmNvbHVtbk1lZGlhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbi5yZWdpc3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2YwMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/generic-service/generic-service.service */ "./src/app/services/generic-service/generic-service.service.ts");
/* harmony import */ var _services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alerta-service/alerta.service */ "./src/app/services/alerta-service/alerta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, genericService, alertaService, formBuilder, router) {
        this.menuCtrl = menuCtrl;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = null;
        this.password = null;
        this.verPassword = "password";
        //this.spinnerDialog.show();
        this.formGroup = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sesionActiva: [false]
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.goToRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_4__["GenericService"],
            _services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_5__["AlertaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/alerta-service/alerta.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/alerta-service/alerta.service.ts ***!
  \***********************************************************/
/*! exports provided: AlertaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaService", function() { return AlertaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertaService = /** @class */ (function () {
    function AlertaService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertaService.prototype.alertaBasica = function (titulo, subtitulo, accion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            message: subtitulo,
                            cssClass: 'alertCustomCss',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        if (accion != null) {
                                            accion();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AlertaService.prototype.warnAlert = function (titulo, subtitulo, accion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            message: subtitulo,
                            cssClass: 'warnAlert',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        if (accion != null) {
                                            accion();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AlertaService.prototype.errorAlert = function (titulo, subtitulo, accion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            message: subtitulo,
                            cssClass: 'errorAlert',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        if (accion != null) {
                                            accion();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AlertaService.prototype.alertaConfirmacion = function (titulo, mensaje, accionAceptar, accionCancelar) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            message: mensaje,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                        if (accionCancelar != null) {
                                            accionCancelar();
                                        }
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        accionAceptar();
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
    AlertaService.prototype.alertaInput = function (titulo, mensaje, accionAceptar, accionCancelar, inputsE) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prompt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: titulo,
                            message: mensaje,
                            inputs: inputsE,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function (data) {
                                        if (accionCancelar != null) {
                                            accionCancelar();
                                        }
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        accionAceptar();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        prompt = _a.sent();
                        return [4 /*yield*/, prompt.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AlertaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertaService);
    return AlertaService;
}());



/***/ }),

/***/ "./src/app/services/generic-service/generic-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/generic-service/generic-service.service.ts ***!
  \*********************************************************************/
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
        //public pathService: String = "http://localhost:8080/api_deportes/"; //dev
        this.pathService = "http://eikox.com.mx/api_deportes/"; //prod
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

/***/ "./src/app/services/validation-service/validation-service.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/validation-service/validation-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: ValidationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationServiceService", function() { return ValidationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationServiceService = /** @class */ (function () {
    function ValidationServiceService() {
    }
    ValidationServiceService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'El campo es requerido',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Contraseña inválida. La contraseña debe contener al menos 6 caracteres, y un valor numérico.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'seleccion': 'El campo es requerido, selecciona al menos uno',
            'invalidNumber': 'Ingrese un número válido'
        };
        return config[validatorName];
    };
    ValidationServiceService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationServiceService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationServiceService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match("^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$")) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationServiceService.numberValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match("^[0-9]*$")) {
            return null;
        }
        else {
            return { 'invalidNumber': true };
        }
    };
    ValidationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationServiceService);
    return ValidationServiceService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/control-messages/control-messages.component */ "./src/components/control-messages/control-messages.component.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_3__["ControlMessagesComponent"]],
            exports: [src_components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_3__["ControlMessagesComponent"]],
            entryComponents: [
                src_components_control_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_3__["ControlMessagesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/components/control-messages/control-messages.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/control-messages/control-messages.component.ts ***!
  \***********************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation-service/validation-service.service */ "./src/app/services/validation-service/validation-service.service.ts");




var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return src_app_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_3__["ValidationServiceService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" class=\"validators\">{{errorMessage}}</div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map