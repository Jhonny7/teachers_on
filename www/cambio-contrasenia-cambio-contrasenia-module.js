(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cambio-contrasenia-cambio-contrasenia-module"],{

/***/ "./src/app/cambio-contrasenia/cambio-contrasenia.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cambio-contrasenia/cambio-contrasenia.module.ts ***!
  \*****************************************************************/
/*! exports provided: CambioContraseniaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioContraseniaPageModule", function() { return CambioContraseniaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cambio_contrasenia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cambio-contrasenia.page */ "./src/app/cambio-contrasenia/cambio-contrasenia.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _cambio_contrasenia_page__WEBPACK_IMPORTED_MODULE_6__["CambioContraseniaPage"]
    }
];
var CambioContraseniaPageModule = /** @class */ (function () {
    function CambioContraseniaPageModule() {
    }
    CambioContraseniaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_cambio_contrasenia_page__WEBPACK_IMPORTED_MODULE_6__["CambioContraseniaPage"]]
        })
    ], CambioContraseniaPageModule);
    return CambioContraseniaPageModule;
}());



/***/ }),

/***/ "./src/app/cambio-contrasenia/cambio-contrasenia.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/cambio-contrasenia/cambio-contrasenia.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"icon\">\n    <ion-title>Cambio de Contraseña</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <div>\n      <p class=\"parrafo\">Contraseña actual</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"password1\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.password1\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Nueva contraseña</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"password2\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.password2\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Confirmar nueva contraseña</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"finger-print\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"password3\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.password3\"></app-error-messages>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/cambio-contrasenia/cambio-contrasenia.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cambio-contrasenia/cambio-contrasenia.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-control-messages .validators {\n  margin-left: 0px; }\n\n.categoriaFoto {\n  width: 100%;\n  text-align: center; }\n\n.categoriaFoto img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n\n.botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n\nion-item {\n  border: 0.6px solid #dbdcdc; }\n\n.title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n\n.boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n\n.parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n\n.input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n\n.icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n\n.input-field:focus {\n  border: 2px solid #f35858; }\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\n.btn:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NhbWJpby1jb250cmFzZW5pYS9jYW1iaW8tY29udHJhc2VuaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUZwQjtJQUlJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUN3QixTQUFBO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0Isc0NBQUE7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYW1iaW8tY29udHJhc2VuaWEvY2FtYmlvLWNvbnRyYXNlbmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb250cm9sLW1lc3NhZ2Vze1xuICAgIC52YWxpZGF0b3Jze1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yaWFGb3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG4gIC5ib3RvbkZvb3RlciB7XG4gICAgd2lkdGg6IDEwMSU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG4gIFxuICBpb24taXRlbSB7XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCAjZGJkY2RjO1xuICB9XG4gIC50aXRsZXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmJvdG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAuMiU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cbiAgXG4gIC5wYXJyYWZvIHtcbiAgICBmb250LXNpemU6IDg1JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAuaWNvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjM1ODU4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG4gIH1cbiAgXG4gIC5pbnB1dC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmOTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dC1maWVsZDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YzNTg1ODtcbiAgfVxuICBcbiAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICBcbiAgLmJ0bjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/cambio-contrasenia/cambio-contrasenia.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/cambio-contrasenia/cambio-contrasenia.page.ts ***!
  \***************************************************************/
/*! exports provided: CambioContraseniaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioContraseniaPage", function() { return CambioContraseniaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var CambioContraseniaPage = /** @class */ (function () {
    function CambioContraseniaPage(formBuilder, genericService, alertaService, loadingService, navCtrl) {
        this.formBuilder = formBuilder;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.verPassword = "password";
        this.verPassword2 = "password";
        this.user = null;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.formGroup = this.formBuilder.group({
            password1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    CambioContraseniaPage.prototype.ngOnInit = function () {
    };
    CambioContraseniaPage.prototype.verifyShields = function () {
        var _this = this;
        if (this.formGroup.value.password2 !== this.formGroup.value.password3) {
            this.alertaService.warnAlert(this.genericService.headerValidacion, "Las nuevas contraseñas ingresadas no coinciden, favor de verificar.", null);
        }
        else if (this.formGroup.valid) {
            this.loadingService.show().then(function () {
                _this.cambioPassword();
            });
        }
        else {
            this.alertaService.warnAlert(this.genericService.headerValidacion, "Todos los campos son requeridos.", null);
        }
    };
    CambioContraseniaPage.prototype.cambioPassword = function () {
        var _this = this;
        var params = {
            "password": this.formGroup.value.password1,
            "idUsuario": this.user.id,
            "newPassword": this.formGroup.value.password2
        };
        this.genericService.post("usuarios/changePassword", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "Tus datos han sido actualizados", null);
                _this.navCtrl.pop();
            }
            else {
                _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
            }
            _this.loadingService.hide();
        }, function (err) {
            console.log(err);
            if (err.status == 400) {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "Tus datos han sido actualizados", null);
                _this.navCtrl.pop();
            }
            else {
                console.log(err.error.description);
                console.log(err.error);
                _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
            }
            _this.loadingService.hide();
        });
    };
    CambioContraseniaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cambio-contrasenia',
            template: __webpack_require__(/*! ./cambio-contrasenia.page.html */ "./src/app/cambio-contrasenia/cambio-contrasenia.page.html"),
            styles: [__webpack_require__(/*! ./cambio-contrasenia.page.scss */ "./src/app/cambio-contrasenia/cambio-contrasenia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_3__["GenericService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__["AlertaService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], CambioContraseniaPage);
    return CambioContraseniaPage;
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
//# sourceMappingURL=cambio-contrasenia-cambio-contrasenia-module.js.map