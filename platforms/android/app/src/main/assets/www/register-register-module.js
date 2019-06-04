(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn auth-page\" style=\"\">\n  <div class=\"title\">Regístrate en Teachers On</div>\n  <div class=\"separador\"></div>\n  <div class=\"categoriaFoto\">\n    <img src=\"assets/imgs/usuarios/user.svg\" alt=\"\" *ngIf=\"imgBase64 === null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{imgBase64}}\" alt=\"\" *ngIf=\"imgBase64 !== null\" (click)=\"openOptionsSelect()\">\n  </div>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <div>\n      <p class=\"parrafo\">Nombre</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"create\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"nombre\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.nombre\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Apellido Paterno</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"male\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"apellidoPaterno\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.apellidoPaterno\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Apellido Materno</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"female\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"apellidoMaterno\">\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.apellidoMaterno\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Correo Electrónico</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"mail\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"email\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.email\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Username</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"username\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.username\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Contraseña</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"password\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.password\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Confirmar Contraseña</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"finger-print\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"passwordConfirm\"\n          required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.passwordConfirm\"></app-error-messages>\n  </form>\n</ion-content>\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-control-messages .validators {\n  margin-left: 0px; }\n\n.categoriaFoto {\n  width: 100%;\n  text-align: center; }\n\n.categoriaFoto img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n\n.botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n\nion-item {\n  border: 0.6px solid #dbdcdc; }\n\n.title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n\n.boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n\n.parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n\n.input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n\n.icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n\n.input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n\n.input-field:focus {\n  border: 2px solid #f35858; }\n\n/* Set a style for the submit button */\n\n.btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n\n.btn:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFGcEI7SUFJSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDd0IsU0FBQTtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCLHNDQUFBOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbnRyb2wtbWVzc2FnZXN7XG4gIC52YWxpZGF0b3Jze1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLmNhdGVnb3JpYUZvdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuLmJvdG9uRm9vdGVyIHtcbiAgd2lkdGg6IDEwMSU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDAuNnB4IHNvbGlkICNkYmRjZGM7XG59XG4udGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYm90b24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB3aWR0aDogMTAwLjIlO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjM1ODU4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YzNTg1ODtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/validation-service/validation-service.service */ "./src/services/validation-service/validation-service.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");










var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, menuCtrl, genericService, alertaService, loadingService, router, navCtrl, actionSheetController, camera) {
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.loadingService = loadingService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.verPassword = "password";
        this.verPassword2 = "password";
        this.imgBase64 = null;
        //,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        this.formGroup = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            apellidoPaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            apellidoMaterno: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__["ValidationServiceService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__["ValidationServiceService"].passwordValidator]],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.loadingService.hide();
        this.menuCtrl.enable(false);
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.verifyShields = function () {
        var _this = this;
        if (this.formGroup.value.password !== this.formGroup.value.passwordConfirm) {
            this.alertaService.warnAlert(this.genericService.headerValidacion, "Las contraseñas ingresadas no coinciden, favor de verificar.", null);
        }
        else if (this.formGroup.dirty && this.formGroup.valid) {
            this.loadingService.show().then(function () {
                _this.registrar();
            });
        }
        else {
            this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos.", null);
        }
    };
    RegisterPage.prototype.registrar = function () {
        var _this = this;
        var params = {
            "idRol": 2,
            "userName": this.formGroup.value.username,
            "password": this.formGroup.value.password,
            "nombre": this.formGroup.value.nombre,
            "apellidoPaterno": this.formGroup.value.apellidoPaterno,
            "apellidoMaterno": this.formGroup.value.apellidoMaterno,
            "email": this.formGroup.value.email,
            "imgBase64": this.imgBase64
        };
        this.genericService.post("usuarios/createUsuario", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "Ahora accesa para empezar a aprender!", null);
                _this.navCtrl.pop();
            }
            else {
                _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
            }
            _this.loadingService.hide();
        }, function (err) {
            console.log(err);
            console.log(err.error.description);
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    RegisterPage.prototype.getPicture = function (photo) {
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
    RegisterPage.prototype.eliminarFoto = function () {
        if (this.imgBase64 != null) {
            this.imgBase64 = null;
        }
        else {
            this.alertaService.warnAlert("Espera!", "Aún no has seleccionado una imagen", null);
        }
    };
    RegisterPage.prototype.openOptionsSelect = function () {
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]])
    ], RegisterPage);
    return RegisterPage;
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
//# sourceMappingURL=register-register-module.js.map