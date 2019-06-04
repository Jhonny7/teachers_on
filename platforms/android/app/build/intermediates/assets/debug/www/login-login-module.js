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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
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

module.exports = "<ion-content padding class=\"animated fadeIn auth-page\" style=\"--background: url(assets/imgs/login/loginFondo.png) no-repeat center center / cover;\">\n  <div class=\"divLogo\">\n    <img src=\"assets/imgs/logo2.png\" alt=\"\">\n  </div>\n  <div class=\"bienvenida\">\n    Bienvenid@\n  </div>\n  <!-- <input type=\"color\" name=\"favcolor\" value=\"#ff0000\" class=\"colorSelector\"> -->\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"verifyShields()\">\n    <div class=\"credenciales\">\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon name=\"person\"></ion-icon> Usuario\n        </ion-label>\n        <ion-input formControlName=\"user\" required></ion-input>\n      </ion-item>\n      <app-control-messages [control]=\"formGroup.controls.user\"></app-control-messages>\n      <div class=\"containerMedia\">\n        <ion-item class=\"columnMedia\">\n          <ion-label position=\"floating\">\n            <ion-icon name=\"key\"></ion-icon> Contraseña\n          </ion-label>\n          <ion-input formControlName=\"password\" type=\"{{verPassword}}\" required></ion-input>\n\n        </ion-item>\n        <img src=\"assets/imgs/login/eye.png\" class=\"columnMedia\" alt=\"\" (touchstart)=\"verPasswordMethod($event)\"\n          (touchend)=\"verPasswordMethod($event)\">\n      </div>\n    </div>\n    <div class=\"divCheck\">\n      <ion-item>\n        <ion-label>Mantener Sesión Activa</ion-label>\n        <ion-checkbox color=\"icon\" slot=\"start\" formControlName=\"sesionActiva\"></ion-checkbox>\n      </ion-item>\n\n    </div>\n    <div class=\"credenciales\">\n      <ion-button expand=\"block\" color=\"icon\" type=\"submit\">\n        <ion-icon slot=\"end\" name=\"log-in\"></ion-icon>\n        Ingresar\n      </ion-button>\n    </div>\n    <div class=\"register\">\n      <div>¿Nuevo en Techers On? <a (click)=\"goToRegister()\">Registrate</a></div>\n    </div>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-has-focus.label-floating.sc-ion-label-md-h,\n.item-has-focus .label-floating.sc-ion-label-md-h,\n.item-has-focus.label-stacked.sc-ion-label-md-h,\n.item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: #f00; }\n\n.divCheck {\n  width: 80%;\n  margin: auto;\n  margin-top: 5%; }\n\n.divCheck ion-item {\n    --inner-border-width: 0 0 0px 0; }\n\n.divLogo {\n  text-align: center;\n  margin-top: 20%;\n  margin-bottom: 10%; }\n\n.divLogo img {\n    width: 58%; }\n\n.bienvenida {\n  color: black;\n  font-size: 124%;\n  text-align: center;\n  text-shadow: 1px 1px 1px #123; }\n\n.credenciales {\n  text-align: -webkit-center; }\n\n.credenciales ion-item {\n    width: 80%; }\n\n.credenciales ion-item ion-input {\n      --highlight-color-focused: #ffce00;\n      font-weight: 300; }\n\n.credenciales ion-button {\n    margin-top: 15%;\n    width: 80%; }\n\n.credenciales ion-button button {\n      background-color: #ff4849; }\n\n.item-interactive.item-has-focus {\n  --highlight-background: #ff4849; }\n\n.containerMedia {\n  width: 100%; }\n\n.containerMedia img {\n    width: 9%;\n    margin-left: 1%;\n    vertical-align: bottom; }\n\n.containerMedia ion-item {\n    width: 70%; }\n\n.containerMedia ion-item ion-input {\n      --highlight-color-focused: #ffce00;\n      font-weight: 300; }\n\n.containerMedia .columnMedia {\n    display: inline-block; }\n\n.register {\n  text-align: center;\n  margin-top: 15px; }\n\n.register a {\n    text-decoration: underline;\n    color: #f00; }\n\ninput[type=\"color\" i] {\n  -webkit-appearance: square-button;\n  width: 44px;\n  height: 23px;\n  background-color: buttonface;\n  cursor: default;\n  border-width: 1px;\n  border-style: solid;\n  border-color: darkgray;\n  -o-border-image: initial;\n     border-image: initial;\n  padding: 0px; }\n\ninput[type=\"color\"] {\n  -webkit-appearance: none;\n  border: none;\n  width: 55px;\n  height: 55px; }\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n  padding: 0; }\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border: none; }\n\n.colorSelector {\n  -webkit-appearance: none;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  width: 20px;\n  height: 20px; }\n\n.colorSelector::-webkit-color-swatch {\n  border: none;\n  border-radius: 10px;\n  padding: 0; }\n\n.colorSelector::-webkit-color-swatch-wrapper {\n  border: none;\n  border-radius: 10px;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUhoQjtJQUtJLCtCQUFxQixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSHBCO0lBS0ksVUFBVSxFQUFBOztBQUlkO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRDVCO0lBR0ksVUFBVSxFQUFBOztBQUhkO01BS00sa0NBQTBCO01BQzFCLGdCQUFnQixFQUFBOztBQU50QjtJQVVJLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBWGQ7TUFhTSx5QkFBeUIsRUFBQTs7QUFJL0I7RUFDRSwrQkFBdUIsRUFBQTs7QUFFekI7RUFDRSxXQUFXLEVBQUE7O0FBRGI7SUFHSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLHNCQUFzQixFQUFBOztBQUwxQjtJQVFJLFVBQVUsRUFBQTs7QUFSZDtNQVVNLGtDQUEwQjtNQUMxQixnQkFBZ0IsRUFBQTs7QUFYdEI7SUFlSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBSUksMEJBQTBCO0lBQzFCLFdBQVcsRUFBQTs7QUFJZjtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBZ0M7RUFDaEMsd0JBQXFCO0tBQXJCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBRWQ7RUFDQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWI7RUFDQyxVQUFVLEVBQUE7O0FBRVg7RUFDQyxZQUFZLEVBQUE7O0FBRWI7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsXG4uaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLFxuLml0ZW0taGFzLWZvY3VzLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsXG4uaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBjb2xvcjogI2YwMDtcbn1cblxuLmRpdkNoZWNrIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIH1cbn1cbi5kaXZMb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG59XG5cbi5iaWVudmVuaWRhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEyNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxMjM7XG59XG5cbi5jcmVkZW5jaWFsZXMge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICNmZmNlMDA7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgfVxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDg0OTtcbiAgICB9XG4gIH1cbn1cbi5pdGVtLWludGVyYWN0aXZlLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogI2ZmNDg0OTtcbn1cbi5jb250YWluZXJNZWRpYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBpbWcge1xuICAgIHdpZHRoOiA5JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBpb24taW5wdXQge1xuICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogI2ZmY2UwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9XG4gIC5jb2x1bW5NZWRpYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4ucmVnaXN0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNmMDA7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cImNvbG9yXCIgaV0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHNxdWFyZS1idXR0b247XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1dHRvbmZhY2U7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHR3aWR0aDogNTVweDtcblx0aGVpZ2h0OiA1NXB4O1xufVxuaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcblx0cGFkZGluZzogMDtcbn1cbmlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuXHRib3JkZXI6IG5vbmU7XG59XG4uY29sb3JTZWxlY3RvciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmNvbG9yU2VsZWN0b3I6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbG9yU2VsZWN0b3I6Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");








var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, genericService, alertaService, formBuilder, router, loadingService, platform) {
        this.menuCtrl = menuCtrl;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingService = loadingService;
        this.platform = platform;
        this.user = null;
        this.password = null;
        this.verPassword = "password";
        //this.loadingService.show();
        //this.spinnerDialog.show();
        this.formGroup = this.formBuilder.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sesionActiva: [false]
        });
        this.platform.backButton.subscribe(function () {
            // this does work
        });
    }
    LoginPage.prototype.ngOnDestroy = function () {
        this.platform.backButton.unsubscribe();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.verifyShields = function () {
        var _this = this;
        if (this.formGroup.dirty && this.formGroup.valid) {
            this.loadingService.show().then(function () {
                _this.ingresar();
            });
        }
        else {
            this.alertaService.warnAlert(this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
        }
    };
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        //let params = new HttpParams();
        //params = params.append('user', this.formGroup.value.user);
        //params = params.append('password', this.formGroup.value.password);
        var params = {
            "user": this.formGroup.value.user,
            "password": this.formGroup.value.password
        };
        console.log(params);
        this.genericService.post("login/getAuthenticate", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res.parameters;
            _this.alertaService.alertaBasica("Bienvenid@", parametros.nombre, null);
            console.log(parametros);
            //this.router.navigate(['/home',parametros]);
            console.log(_this.formGroup.value.sesionActiva);
            if (_this.formGroup.value.sesionActiva) {
                localStorage.setItem("sessionActive", JSON.stringify(1));
            }
            localStorage.setItem("user", JSON.stringify(parametros));
            var token = localStorage.getItem("token");
            if (token != null) {
                var params2 = {
                    "token": JSON.parse(token),
                    "id": parametros.id
                };
                _this.genericService.post("login/updateToken", JSON.stringify(params2)).subscribe(function (res) {
                    if (parametros.id_rol == 1) {
                        _this.router.navigate(['/home', parametros]);
                    }
                    else {
                        _this.router.navigate(['/home', parametros]);
                    }
                    _this.loadingService.hide();
                }, function (err) {
                    console.log(err);
                    console.log(err.error.description);
                    _this.loadingService.hide();
                    _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
                });
            }
            else {
                if (parametros.id_rol == 1) {
                    _this.router.navigate(['/home', parametros]);
                }
                else {
                    _this.router.navigate(['/home', parametros]);
                }
                _this.loadingService.hide();
            }
        }, function (err) {
            console.log(err);
            console.log(err.error.description);
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    LoginPage.prototype.verPasswordMethod = function (event) {
        if (this.verPassword == "password") {
            this.verPassword = "text";
        }
        else {
            this.verPassword = "password";
        }
    };
    LoginPage.prototype.goToRegister = function () {
        var _this = this;
        this.loadingService.show().then(function () {
            _this.router.navigate(['/register']);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=login-login-module.js.map