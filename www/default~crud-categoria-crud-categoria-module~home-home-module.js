(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~crud-categoria-crud-categoria-module~home-home-module"],{

/***/ "./src/app/crud-categoria/crud-categoria.page.html":
/*!*********************************************************!*\
  !*** ./src/app/crud-categoria/crud-categoria.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"icon\">\n    <ion-title>{{operation}} Categoría</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"!plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\">\n        <span color=\"secundary\" showWhen=\"ios\">Cancel</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"plataforma\">\n      <ion-button (click)=\"cancelar()\" style=\"color:#fff\" slot=\"end\">\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"categoriaFoto\" >\n    <img src=\"assets/imgs/categoria/categoria.png\" alt=\"\" *ngIf=\"categoria === null && imgBase64 === null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{imgBase64}}\" alt=\"\" *ngIf=\"imgBase64 !== null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{categoria.img_base64}}\" alt=\"\" *ngIf=\"imgBase64 === null && categoria !== null && categoria.img_base64 !== null\" (click)=\"openOptionsSelect()\">\n    <img src=\"{{categoria.img_url}}\" alt=\"\" *ngIf=\"imgBase64 === null && categoria !== null && categoria.img_base64 === null && categoria.img_url !== null\" (click)=\"openOptionsSelect()\">\n  </div>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <div>\n      <p class=\"parrafo\">Descripción</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"create\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"\" name=\"usrnm\" formControlName=\"descripcion\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.descripcion\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Url de imagen</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"code\" class=\"icon\"></ion-icon>\n        <input class=\"input-field\" type=\"text\" placeholder=\"Puedes seleccionar una imagen de galería\" name=\"usrnm\"\n          formControlName=\"imgUrl\" required>\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.imgUrl\"></app-error-messages>\n\n    <div>\n      <p class=\"parrafo\">Color</p>\n      <div class=\"input-container\">\n        <ion-icon name=\"brush\" class=\"icon\"></ion-icon>\n        <!-- <input type=\"color\" name=\"favcolor\" value=\"#ff0000\" class=\"colorSelector\"> -->\n        <input type=\"color\" class=\"colorSelector\" placeholder=\"\" name=\"usrnm\" formControlName=\"color\">\n      </div>\n    </div>\n    <app-error-messages [control]=\"formGroup.controls.color\"></app-error-messages>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"validacion()\">\n    <ion-button expand=\"full\" color=\"icon\" type=\"submit\" class=\"botonFooter\">\n      <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n      Aceptar\n    </ion-button>\n  </form>\n</ion-footer>"

/***/ }),

/***/ "./src/app/crud-categoria/crud-categoria.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/crud-categoria/crud-categoria.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categoriaFoto {\n  width: 100%;\n  text-align: center; }\n  .categoriaFoto img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n  .botonFooter {\n  width: 101%;\n  margin-left: -1%;\n  padding: 0px;\n  margin: 0px;\n  height: 44px; }\n  input[type=\"color\" i] {\n  -webkit-appearance: square-button;\n  width: 44px;\n  height: 23px;\n  background-color: buttonface;\n  cursor: default;\n  border-width: 1px;\n  border-style: solid;\n  border-color: darkgray;\n  -o-border-image: initial;\n     border-image: initial;\n  padding: 0px; }\n  input[type=\"color\"] {\n  -webkit-appearance: none;\n  border: none;\n  width: 100%;\n  margin: auto;\n  height: 40px;\n  border-radius: 0px 5px 5px 0px;\n  border: 0.9px solid; }\n  input[type=\"color\"]::-webkit-color-swatch-wrapper {\n  padding: 0; }\n  input[type=\"color\"]::-webkit-color-swatch {\n  border: none; }\n  .colorSelector {\n  -webkit-appearance: none;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  width: 20px;\n  height: 20px; }\n  .colorSelector::-webkit-color-swatch {\n  border: none;\n  -webkit-border-top-right-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-topright: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 0; }\n  .colorSelector::-webkit-color-swatch-wrapper {\n  border: none;\n  -webkit-border-top-right-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-topright: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 0; }\n  ion-item {\n  border: 0.6px solid #dbdcdc; }\n  .title {\n  text-align: center;\n  font-size: 110%;\n  font-weight: 400;\n  font-family: sans-serif; }\n  .boton {\n  margin-top: 24px;\n  width: 100.2%;\n  margin-left: -1px; }\n  .parrafo {\n  font-size: 85%;\n  font-weight: 400; }\n  .input-container {\n  /* IE10 */\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px; }\n  .icon {\n  padding: 10px;\n  background: #f35858;\n  color: white;\n  min-width: 30px;\n  text-align: center;\n  height: auto;\n  border-radius: 5px 0px 0px 5px; }\n  .input-field {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n  border: 1px solid #e4e4e4;\n  background-color: #f4f6f9;\n  border-radius: 0px 5px 5px 0px; }\n  .input-field:focus {\n  border: 2px solid #f35858; }\n  /* Set a style for the submit button */\n  .btn {\n  background-color: dodgerblue;\n  color: white;\n  padding: 15px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9; }\n  .btn:hover {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NydWQtY2F0ZWdvcmlhL2NydWQtY2F0ZWdvcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQUZwQjtJQUlJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBRWQ7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQWdDO0VBQ2hDLHdCQUFxQjtLQUFyQixxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0VBRWQ7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQUVyQjtFQUNFLFVBQVUsRUFBQTtFQUVaO0VBQ0UsWUFBWSxFQUFBO0VBRWQ7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQTtFQUVkO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFVBQVUsRUFBQTtFQUVaO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFVBQVUsRUFBQTtFQUVaO0VBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDd0IsU0FBQTtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCLEVBQUE7RUFHaEM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDhCQUE4QixFQUFBO0VBR2hDO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0Isc0NBQUE7RUFDQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdkO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3J1ZC1jYXRlZ29yaWEvY3J1ZC1jYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpYUZvdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuLmJvdG9uRm9vdGVyIHtcbiAgd2lkdGg6IDEwMSU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDRweDtcbn1cbmlucHV0W3R5cGU9XCJjb2xvclwiIGldIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBzcXVhcmUtYnV0dG9uO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXR0b25mYWNlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigxNjksIDE2OSwgMTY5KTtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICBwYWRkaW5nOiAwcHg7XG59XG5pbnB1dFt0eXBlPVwiY29sb3JcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG4gIGJvcmRlcjogMC45cHggc29saWQ7XG59XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwO1xufVxuaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb2xvclNlbGVjdG9yIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY29sb3JTZWxlY3Rvcjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29sb3JTZWxlY3Rvcjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAwLjZweCBzb2xpZCAjZGJkY2RjO1xufVxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExMCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYm90b24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB3aWR0aDogMTAwLjIlO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLnBhcnJhZm8ge1xuICBmb250LXNpemU6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjM1ODU4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cblxuLmlucHV0LWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YzNTg1ODtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/crud-categoria/crud-categoria.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/crud-categoria/crud-categoria.page.ts ***!
  \*******************************************************/
/*! exports provided: CrudCategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudCategoriaPage", function() { return CrudCategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var CrudCategoriaPage = /** @class */ (function () {
    function CrudCategoriaPage(navParms, modalCtrl, platform, formBuilder, alertaService, genericService, loadingService, camera, actionSheetController) {
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
        this.categoria = null;
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
            color: ['#ff0000', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.operation != "Crear") {
            this.categoria = navParms.get("categoria");
            this.formGroup.patchValue({
                descripcion: this.categoria.descripcion,
                imgUrl: this.categoria.img_url,
                color: this.categoria.color
            });
            console.log(this.categoria);
            if (this.categoria !== null && this.categoria.img_base64 !== null) {
                this.imgBase64 = this.categoria.img_base64;
            }
        }
    }
    CrudCategoriaPage.prototype.ngOnInit = function () {
    };
    CrudCategoriaPage.prototype.cancelar = function (data) {
        if (data === void 0) { data = null; }
        console.log(data);
        this.clicked = false;
        this.modalCtrl.dismiss({ data: data });
    };
    CrudCategoriaPage.prototype.validacion = function () {
        var _this = this;
        if (!this.clicked) {
            this.loadingService.show().then(function () {
                var valid = _this.formGroup.dirty && _this.formGroup.valid;
                var valid2 = false;
                if (_this.imgBase64 !== null && _this.formGroup.value.imgUrl === null
                    && _this.formGroup.value.descripcion !== null
                    && _this.formGroup.value.color !== null) {
                    valid2 = true;
                }
                else if (_this.imgBase64 === null && _this.formGroup.value.imgUrl !== null
                    && _this.formGroup.value.descripcion !== null
                    && _this.formGroup.value.color !== null) {
                    valid2 = true;
                }
                if (_this.imgBase64 === null && _this.formGroup.value.imgUrl === null || _this.formGroup.value.imgUrl.length <= 0) {
                    valid2 = false;
                }
                if (valid) {
                    if (_this.render) {
                        _this.editarCategoria();
                    }
                    else {
                        _this.crearCategoria();
                    }
                }
                else if (!valid && valid2 && _this.formGroup.value.descripcion !== null) {
                    if (_this.render) {
                        _this.editarCategoria();
                    }
                    else {
                        _this.crearCategoria();
                    }
                }
                else {
                    _this.loadingService.hide();
                    _this.alertaService.warnAlert(_this.genericService.headerValidacion, "Favor de llenar los campos requeridos", null);
                }
            });
        }
    };
    CrudCategoriaPage.prototype.editarCategoria = function () {
        var _this = this;
        var params = {
            "idUsuario": this.user.id,
            "descripcion": this.formGroup.value.descripcion,
            "id": this.categoria.id,
            "img_url": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
            "img_base64": this.imgBase64,
            "color": this.formGroup.value.color,
        };
        console.log(params);
        this.genericService.post("categorias/updateCategoria", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "La categoría se ha actualizado correctamente", null);
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
    CrudCategoriaPage.prototype.crearCategoria = function () {
        var _this = this;
        var params = {
            "descripcion": this.formGroup.value.descripcion,
            "idUsuario": this.user.id,
            "img_url": this.formGroup.value.imgUrl == null || this.formGroup.value.imgUrl.length == 0 ? null : this.formGroup.value.imgUrl,
            "img_base64": this.imgBase64,
            "color": this.formGroup.value.color,
        };
        console.log(params);
        this.genericService.post("categorias/createCategoria", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            var parametros = res;
            if (parametros.status === "A") {
                _this.alertaService.alertaBasica(_this.genericService.headerExito, "La categoría se ha creado correctamente", null);
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
    CrudCategoriaPage.prototype.getPicture = function (photo) {
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
    CrudCategoriaPage.prototype.eliminarFoto = function () {
        if (this.imgBase64 != null) {
            this.imgBase64 = null;
        }
        else {
            this.alertaService.warnAlert("Espera!", "Aún no has seleccionado una imagen", null);
        }
    };
    CrudCategoriaPage.prototype.openOptionsSelect = function () {
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
    CrudCategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crud-categoria',
            template: __webpack_require__(/*! ./crud-categoria.page.html */ "./src/app/crud-categoria/crud-categoria.page.html"),
            styles: [__webpack_require__(/*! ./crud-categoria.page.scss */ "./src/app/crud-categoria/crud-categoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]])
    ], CrudCategoriaPage);
    return CrudCategoriaPage;
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
//# sourceMappingURL=default~crud-categoria-crud-categoria-module~home-home-module.js.map