(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"],{

/***/ "./src/app/videos/videos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.module.ts ***!
  \*****************************************/
/*! exports provided: VideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos.page */ "./src/app/videos/videos.page.ts");







var routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]
    }
];
var VideosPageModule = /** @class */ (function () {
    function VideosPageModule() {
    }
    VideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
        })
    ], VideosPageModule);
    return VideosPageModule;
}());



/***/ }),

/***/ "./src/app/videos/videos.page.html":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n\n    <ion-buttons slot=\"start\" *ngIf=\"!search\" class=\"animated bounceInRight\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <!-- <ion-icon name=\"search\" slot=\"end\" class=\"icono\" (click)=\"habilitarBusqueda()\" *ngIf=\"!search\"></ion-icon>\n    <ion-icon name=\"search\" slot=\"end\" class=\"icono\" (click)=\"busqueda()\" *ngIf=\"search\"></ion-icon>\n    <ion-icon name=\"close\" slot=\"end\" class=\"icono\" (click)=\"habilitarBusqueda()\" *ngIf=\"search\"></ion-icon> -->\n\n    <!-- <ion-searchbar class=\"animated bounceInLeft\" [(ngModel)]=\"buscar\" *ngIf=\"search\"></ion-searchbar> -->\n\n    <ion-title *ngIf=\"!search\" class=\"animated bounceInRight\">Videos de {{categoria}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"contenedorSpinner\" *ngIf=\"videos === null || videos.length === 0\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div>\n    <div class=\"frame animated bounceInDown\" *ngFor=\"let video of videos\" (click)=\"openVideo(video)\">\n      <!-- <iframe [src]=\"video.temporal\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen>\n      </iframe> -->\n      <img [src]=\"video.temporal\" *ngIf=\"video.temporal !== null\" class=\"imagenYou\">\n      <img src=\"assets/imgs/videos/videos.png\" *ngIf=\"video.temporal === null\" class=\"imagenYou\">\n      <div>{{video.descripcion}}</div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/videos/videos.page.scss":
/*!*****************************************!*\
  !*** ./src/app/videos/videos.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icono {\n  font-size: 1.5em;\n  margin-right: 5px; }\n\n.searchbar-input {\n  background-color: #ff0; }\n\n.imagenYou {\n  box-shadow: 1px 1px 4px #c5c7ca;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25vIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xufVxuXG4uaW1hZ2VuWW91IHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggI2M1YzdjYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/videos/videos.page.ts":
/*!***************************************!*\
  !*** ./src/app/videos/videos.page.ts ***!
  \***************************************/
/*! exports provided: VideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPage", function() { return VideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_models_VideoModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/VideoModel */ "./src/models/VideoModel.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var VideosPage = /** @class */ (function () {
    function VideosPage(router, route, alertaService, genericService, navCtrl, sanitizer) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.alertaService = alertaService;
        this.genericService = genericService;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.videos = [];
        this.categoria = "";
        this.search = false;
        this.buscar = "";
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.chargeVideosByCategory();
        });
    }
    VideosPage.prototype.ngOnInit = function () {
    };
    VideosPage.prototype.chargeVideosByCategory = function () {
        var _this = this;
        //let params = new HttpParams();
        //params = params.append('idCategoria', this.id.toString());
        this.videos = [];
        var params = {
            'idCategoria': this.id
        };
        this.genericService.post("cursos/getVideosByCategory", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                var cont_1 = 0;
                res.parameters.forEach(function (video) {
                    if (cont_1 === 0) {
                        _this.categoria = video.descripcion_categoria;
                    }
                    _this.videos.push(new src_models_VideoModel__WEBPACK_IMPORTED_MODULE_5__["VideoModel"](video.id, video.descripcion, video.url, video.descripcion_categoria, _this.returnUrlImage(video.url), video.like, video.no_like));
                    cont_1++;
                });
            }
            //this.loadingService.hide();
        }, function (err) {
            console.log(err.error.description);
            console.log(err.error);
            //this.loadingService.hide();
            _this.navCtrl.pop();
            _this.alertaService.warnAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    VideosPage.prototype.returnUrlImage = function (url) {
        var returnUrl = "";
        var obtenerYoutube = url.split("youtube");
        if (obtenerYoutube[1]) {
            var splitPage = url.split("v=");
            var splitPage2 = splitPage[1].split("&");
            if (splitPage2) {
                returnUrl = splitPage2[0];
            }
            else {
                returnUrl = splitPage[1];
            }
        }
        else {
            //Es sacado de celular
            var splitPage = url.split(".be/");
            if (splitPage) {
                returnUrl = splitPage[1];
            }
            else {
                //links que no son de youtube
                returnUrl = "";
                return returnUrl;
            }
        }
        //console.log(returnUrl + "  " + video.id);
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/" + returnUrl + "/0.jpg");
    };
    VideosPage.prototype.returnUrl = function (url) {
        //console.log(video);
        //let url = video.url;
        var returnUrl = "";
        var obtenerYoutube = url.split("youtube");
        if (obtenerYoutube[1]) {
            var splitPage = url.split("v=");
            var splitPage2 = splitPage[1].split("&");
            if (splitPage2) {
                returnUrl = splitPage2[0];
            }
            else {
                returnUrl = splitPage[1];
            }
        }
        else {
            //Es sacado de celular
            var splitPage = url.split(".be/");
            if (splitPage) {
                returnUrl = splitPage[1];
            }
            else {
                //links que no son de youtube
                returnUrl = url;
                return returnUrl;
            }
        }
        //console.log(returnUrl + "  " + video.id);
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + returnUrl + "?controls=0");
    };
    VideosPage.prototype.habilitarBusqueda = function () {
        this.search = !this.search;
    };
    VideosPage.prototype.busqueda = function () {
        console.log(this.buscar);
    };
    VideosPage.prototype.openVideo = function (video) {
        console.log("-.-.-.-.-.-.-.-..-.-.-.-.-.");
        console.log(video);
        this.router.navigate(['video-info', { video: JSON.stringify(video) }]);
    };
    VideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.page.html */ "./src/app/videos/videos.page.html"),
            styles: [__webpack_require__(/*! ./videos.page.scss */ "./src/app/videos/videos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_2__["AlertaService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_1__["GenericService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], VideosPage);
    return VideosPage;
}());



/***/ }),

/***/ "./src/models/VideoModel.ts":
/*!**********************************!*\
  !*** ./src/models/VideoModel.ts ***!
  \**********************************/
/*! exports provided: VideoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return VideoModel; });
var VideoModel = /** @class */ (function () {
    function VideoModel(id, descripcion, url, categoria_descripcion, temporal, like, no_like) {
        this.id = id;
        this.descripcion = descripcion;
        this.url = url;
        this.categoria_descripcion = categoria_descripcion;
        this.temporal = temporal;
        this.like = like;
        this.no_like = no_like;
    }
    return VideoModel;
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



/***/ })

}]);
//# sourceMappingURL=videos-videos-module.js.map