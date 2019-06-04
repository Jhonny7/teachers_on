(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-module"],{

/***/ "./src/app/contacto/contacto.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacto/contacto.module.ts ***!
  \*********************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "./src/app/contacto/contacto.page.ts");







var routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]
    }
];
var ContactoPageModule = /** @class */ (function () {
    function ContactoPageModule() {
    }
    ContactoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
        })
    ], ContactoPageModule);
    return ContactoPageModule;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.page.html":
/*!*********************************************!*\
  !*** ./src/app/contacto/contacto.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Contacto\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"container\">\n    <div class=\"imgContainer\">\n      <img src=\"assets/imgs/logo2.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"description\">\n    <p>En caso de que alguno de nuestros clientes tenga dudas o problemas con nuestro producto ellos podrían\n      contactarse con nosotros para resolver cualquier pregunta o aclaración. Nos pueden encontrar en estas ubicaciones\n      y redes:\n    </p>\n  </div>\n  <div class=\"redes\">\n    <div>Teléfono: </div>\n    <div><a href=\"tel:+528110438306\" class=\"Blondie\">811-043-8306</a></div>\n    <div>Email: </div>\n    <div><a href=\"mailto:T-Advice@gmail.com?body=Hola, mi nombre es &subject=Contácto\">\n        T-Advice@gmail.com</a> </div>\n    <div>Facebook: </div>\n    <div (click)=\"goTo()\" class=\"facebook\">T-Advice Official </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/contacto/contacto.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacto/contacto.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n  .container .imgContainer {\n    margin-bottom: 6%; }\n  .container .imgContainer img {\n      width: 36%; }\n  .container .name {\n    font-size: 1.3em;\n    font-family: sans-serif; }\n  .container .version {\n    font-size: 0.9em;\n    font-family: sans-serif; }\n  .description {\n  text-align: center; }\n  .redes {\n  width: 100%;\n  text-align: center; }\n  .redes div {\n    margin: 10px; }\n  .facebook {\n  text-decoration: underline;\n  color: #5894ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBR0ksaUJBQWlCLEVBQUE7RUFIckI7TUFLTSxVQUFVLEVBQUE7RUFMaEI7SUFTSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFWM0I7SUFhSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQUZwQjtJQUlJLFlBQVksRUFBQTtFQUdoQjtFQUNFLDBCQUEwQjtFQUMxQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0by9jb250YWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAuaW1nQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDM2JTtcbiAgICB9XG4gIH1cbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbiAgLnZlcnNpb24ge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGl2IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cbi5mYWNlYm9vayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzU4OTRmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contacto/contacto.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacto/contacto.page.ts ***!
  \*******************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_external_url_service_external_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/external-url-service/external-url.service */ "./src/services/external-url-service/external-url.service.ts");



var ContactoPage = /** @class */ (function () {
    function ContactoPage(externalUrlService) {
        this.externalUrlService = externalUrlService;
    }
    ContactoPage.prototype.ngOnInit = function () {
    };
    ContactoPage.prototype.goTo = function () {
        this.externalUrlService.openUrl("https://www.facebook.com/TeachersSeries/");
    };
    ContactoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.page.html */ "./src/app/contacto/contacto.page.html"),
            styles: [__webpack_require__(/*! ./contacto.page.scss */ "./src/app/contacto/contacto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_external_url_service_external_url_service__WEBPACK_IMPORTED_MODULE_2__["ExternalUrlService"]])
    ], ContactoPage);
    return ContactoPage;
}());



/***/ })

}]);
//# sourceMappingURL=contacto-contacto-module.js.map