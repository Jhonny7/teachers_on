(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~crud-usuarios-crud-usuarios-module~usuarios-usuarios-module"],{

/***/ "./src/app/crud-usuarios/crud-usuarios.page.html":
/*!*******************************************************!*\
  !*** ./src/app/crud-usuarios/crud-usuarios.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"icon\">\n    <ion-title>{{operation}} Usuario</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"!plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\">\n        <span color=\"secundary\" showWhen=\"ios\">Cancel</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\" slot=\"end\">\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"categoriaFoto\">\n    <img src=\"assets/imgs/usuarios/user.svg\" alt=\"\" *ngIf=\"imgBase64 === null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{imgBase64}}\" alt=\"\" *ngIf=\"imgBase64 !== null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{usuario.img}}\" alt=\"\" *ngIf=\"usuario !== null && usuario.img !== null\" (click)=\"openOptionsSelect()\">\n  </div>\n\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <div>\n      <p class=\"parrafo\">Nombre</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"create\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"nombre\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.nombre\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Apellido Paterno</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"male\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"apellidoPaterno\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.apellidoPaterno\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Apellido Materno</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"female\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"apellidoMaterno\">\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.apellidoMaterno\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Correo Electrónico</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"mail\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"email\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.email\"></app-error-messages>\n\n    <div *ngIf=\"!render\">\n      <div>\n        <p class=\"parrafo\">Username</p>\n        <div class=\"input-container\">\n          <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n          <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"username\" required>\n        </div>\n      </div>\n      <app-error-messages [control]=\"formGroup.controls.username\"></app-error-messages>\n    </div>\n\n    <div *ngIf=\"!render\">\n      <div>\n        <p class=\"parrafo\">Contraseña</p>\n        <div class=\"input-container\">\n          <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n          <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"password\" required>\n        </div>\n      </div>\n      <app-error-messages [control]=\"formGroup.controls.password\"></app-error-messages>\n    </div>\n\n\n    <div *ngIf=\"!render\">\n      <div>\n        <p class=\"parrafo\">Confirmar Contraseña</p>\n        <div class=\"input-container\">\n          <ion-icon name=\"finger-print\" class=\"icon\"></ion-icon>\n          <input class=\"input-field\" type=\"password\" placeholder=\"\" name=\"usrnm\" formControlName=\"passwordConfirm\"\n            required>\n        </div>\n      </div>\n      <app-error-messages [control]=\"formGroup.controls.passwordConfirm\"></app-error-messages>\n    </div>\n\n    <div *ngIf=\"render\">\n      <ion-item class=\"itemSelect\">\n        <ion-label>Estatus</ion-label>\n        <ion-select formControlName=\"idStatus\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\">\n          <ion-select-option value=\"1\">Activo</ion-select-option>\n          <ion-select-option value=\"2\">Inactivo</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-error-messages [control]=\"formGroup.controls.idStatus\"></app-error-messages>\n    </div>\n\n  </form>\n\n</ion-content>\n\n\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/crud-usuarios/crud-usuarios.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/crud-usuarios/crud-usuarios.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categoriaFoto {\n  width: 100%;\n  text-align: center; }\n  .categoriaFoto img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n  .botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n  ion-item {\n  border: 0.6px solid #dbdcdc; }\n  .title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n  .boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n  .parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n  .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n  .icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n  .input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n  .input-field:focus {\n  border: 2px solid #f35858; }\n  /* Set a style for the submit button */\n  .btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n  .btn:hover {\n  opacity: 1; }\n  .itemSelect {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NydWQtdXN1YXJpb3MvY3J1ZC11c3Vhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGdEI7SUFJTSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTtFQUVkO0VBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDd0IsU0FBQTtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCLEVBQUE7RUFHaEM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDhCQUE4QixFQUFBO0VBR2hDO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0Isc0NBQUE7RUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsVUFBVSxFQUFBO0VBR1o7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NydWQtdXN1YXJpb3MvY3J1ZC11c3Vhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmlhRm90byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuICAuYm90b25Gb290ZXIge1xuICAgIHdpZHRoOiAxMDElO1xuICAgIG1hcmdpbi1sZWZ0OiAtMSU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCAjZGJkY2RjO1xuICB9XG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuYm90b24ge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgd2lkdGg6IDEwMC4yJTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuICBcbiAgLnBhcnJhZm8ge1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMzU4NTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgfVxuICBcbiAgLmlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbiAgfVxuICBcbiAgLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjM1ODU4O1xuICB9XG4gIFxuICAvKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICAuYnRuOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAuaXRlbVNlbGVjdCB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/crud-usuarios/crud-usuarios.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/crud-usuarios/crud-usuarios.page.ts ***!
  \*****************************************************/
/*! exports provided: CrudUsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudUsuariosPage", function() { return CrudUsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/validation-service/validation-service.service */ "./src/services/validation-service/validation-service.service.ts");









var CrudUsuariosPage = /** @class */ (function () {
    function CrudUsuariosPage(navParms, modalCtrl, platform, formBuilder, alertaService, genericService, loadingService, camera, actionSheetController) {
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
        this.usuario = null;
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
        if (this.operation != "Crear") {
            this.usuario = navParms.get("usuario");
            this.formGroup = this.formBuilder.group({
                nombre: [this.usuario.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                apellidoPaterno: [this.usuario.apellidoPaterno, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                apellidoMaterno: [this.usuario.apellidoMaterno],
                email: [this.usuario.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__["ValidationServiceService"].emailValidator]],
                idStatus: [this.usuario.idStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            console.log(this.usuario);
            if (this.usuario !== null && this.usuario.img !== null) {
                this.imgBase64 = this.usuario.img;
            }
        }
        else {
            this.formGroup = this.formBuilder.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                apellidoPaterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                apellidoMaterno: [''],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__["ValidationServiceService"].emailValidator]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_services_validation_service_validation_service_service__WEBPACK_IMPORTED_MODULE_8__["ValidationServiceService"].passwordValidator]],
                passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    }
    CrudUsuariosPage.prototype.ngOnInit = function () {
    };
    CrudUsuariosPage.prototype.cancelar = function (data) {
        if (data === void 0) { data = null; }
        console.log(data);
        this.clicked = false;
        this.modalCtrl.dismiss({ data: data });
    };
    CrudUsuariosPage.prototype.validacion = function () {
        var _this = this;
        if (!this.clicked) {
            this.loadingService.show().then(function () {
                if (_this.formGroup.valid) {
                    if (_this.render) {
                        _this.editarUsuario();
                    }
                    else {
                        _this.crearUsuario();
                    }
                }
                else {
                    _this.alertaService.warnAlert(_this.genericService.headerValidacion, "Favor de llenar los campos requeridos.", null);
                }
            });
            //
        }
    };
    CrudUsuariosPage.prototype.editarUsuario = function () {
        var _this = this;
        var params = {
            "idStatus": this.formGroup.value.idStatus,
            "nombre": this.formGroup.value.nombre,
            "apellido_paterno": this.formGroup.value.apellidoPaterno,
            "apellido_materno": this.formGroup.value.apellidoMaterno,
            "email": this.formGroup.value.email,
            "imgBase64": this.imgBase64,
            "id": this.usuario.id
        };
        console.log(params);
        this.genericService.post("usuarios/updateUsuario", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El usuario se ha actualizado correctamente", null);
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
    CrudUsuariosPage.prototype.crearUsuario = function () {
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
        console.log(params);
        this.genericService.post("usuarios/createUsuario", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "El usuario se ha creado correctamente", null);
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
    CrudUsuariosPage.prototype.getPicture = function (photo) {
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
    CrudUsuariosPage.prototype.eliminarFoto = function () {
        if (this.imgBase64 != null) {
            this.imgBase64 = null;
        }
        else {
            this.alertaService.warnAlert("Espera!", "Aún no has seleccionado una imagen", null);
        }
    };
    CrudUsuariosPage.prototype.openOptionsSelect = function () {
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
    CrudUsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-usuarios',
            template: __webpack_require__(/*! ./crud-usuarios.page.html */ "./src/app/crud-usuarios/crud-usuarios.page.html"),
            styles: [__webpack_require__(/*! ./crud-usuarios.page.scss */ "./src/app/crud-usuarios/crud-usuarios.page.scss")]
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
    ], CrudUsuariosPage);
    return CrudUsuariosPage;
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
//# sourceMappingURL=default~crud-usuarios-crud-usuarios-module~usuarios-usuarios-module.js.map