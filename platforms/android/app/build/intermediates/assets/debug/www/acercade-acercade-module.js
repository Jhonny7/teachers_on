(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acercade-acercade-module"],{

/***/ "./src/app/acercade/acercade.module.ts":
/*!*********************************************!*\
  !*** ./src/app/acercade/acercade.module.ts ***!
  \*********************************************/
/*! exports provided: AcercadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercadePageModule", function() { return AcercadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acercade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acercade.page */ "./src/app/acercade/acercade.page.ts");







var routes = [
    {
        path: '',
        component: _acercade_page__WEBPACK_IMPORTED_MODULE_6__["AcercadePage"]
    }
];
var AcercadePageModule = /** @class */ (function () {
    function AcercadePageModule() {
    }
    AcercadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_acercade_page__WEBPACK_IMPORTED_MODULE_6__["AcercadePage"]]
        })
    ], AcercadePageModule);
    return AcercadePageModule;
}());



/***/ }),

/***/ "./src/app/acercade/acercade.page.html":
/*!*********************************************!*\
  !*** ./src/app/acercade/acercade.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Acerca de\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding >\n  <div class=\"container\">\n    <div class=\"imgContainer\">\n      <img src=\"assets/imgs/logo2.png\" alt=\"\">\n    </div>\n    <div class=\"name\">\n      {{nameApp}}\n    </div>\n    <div class=\"version\">\n      {{version}}\n    </div>\n  </div>\n  <div class=\"description\">\n    <p>Somos una empresa innovadora que da las mejores soluciones de problemas escolares y busca satisfacer las\n      necesidades de nuestros clientes.\n    </p>\n    <p>Es una App especialmente para alumnos que no comprenden un tema de alguna materia, lo que esta App brinda son\n      asesorías que podrán explicar de la manera mas sencilla.\n      Eliges la materia y aparecerán los tutoriales de los maestros.</p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/acercade/acercade.page.scss":
/*!*********************************************!*\
  !*** ./src/app/acercade/acercade.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n  .container .imgContainer {\n    margin-bottom: 6%; }\n  .container .imgContainer img {\n      width: 36%; }\n  .container .name {\n    font-size: 1.3em;\n    font-family: sans-serif; }\n  .container .version {\n    font-size: 0.9em;\n    font-family: sans-serif; }\n  .description {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2FjZXJjYWRlL2FjZXJjYWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBR0ksaUJBQWlCLEVBQUE7RUFIckI7TUFLTSxVQUFVLEVBQUE7RUFMaEI7SUFTSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFWM0I7SUFhSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjZXJjYWRlL2FjZXJjYWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5pbWdDb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDYlO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzYlO1xuICAgIH1cbiAgfVxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICAudmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/acercade/acercade.page.ts":
/*!*******************************************!*\
  !*** ./src/app/acercade/acercade.page.ts ***!
  \*******************************************/
/*! exports provided: AcercadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercadePage", function() { return AcercadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");



var AcercadePage = /** @class */ (function () {
    function AcercadePage(appVersion) {
        var _this = this;
        this.appVersion = appVersion;
        this.nameApp = "Teachers On";
        this.version = "1.0.0";
        this.appVersion.getAppName().then(function (data) {
            console.log(data);
            _this.nameApp = data;
        });
        this.appVersion.getVersionNumber().then(function (data) {
            _this.version = data;
        });
    }
    AcercadePage.prototype.ngOnInit = function () {
    };
    AcercadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acercade',
            template: __webpack_require__(/*! ./acercade.page.html */ "./src/app/acercade/acercade.page.html"),
            styles: [__webpack_require__(/*! ./acercade.page.scss */ "./src/app/acercade/acercade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"]])
    ], AcercadePage);
    return AcercadePage;
}());



/***/ })

}]);
//# sourceMappingURL=acercade-acercade-module.js.map