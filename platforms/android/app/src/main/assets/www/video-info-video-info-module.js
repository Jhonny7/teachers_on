(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-info-video-info-module"],{

/***/ "./src/app/video-info/video-info.module.ts":
/*!*************************************************!*\
  !*** ./src/app/video-info/video-info.module.ts ***!
  \*************************************************/
/*! exports provided: VideoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoInfoPageModule", function() { return VideoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-info.page */ "./src/app/video-info/video-info.page.ts");







var routes = [
    {
        path: '',
        component: _video_info_page__WEBPACK_IMPORTED_MODULE_6__["VideoInfoPage"]
    }
];
var VideoInfoPageModule = /** @class */ (function () {
    function VideoInfoPageModule() {
    }
    VideoInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_info_page__WEBPACK_IMPORTED_MODULE_6__["VideoInfoPage"]]
        })
    ], VideoInfoPageModule);
    return VideoInfoPageModule;
}());



/***/ }),

/***/ "./src/app/video-info/video-info.page.html":
/*!*************************************************!*\
  !*** ./src/app/video-info/video-info.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"animated bounceInRight\">{{video.descripcion}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <iframe [src]=\"video.temporal\" frameborder=\"0\" class=\"videoFrame\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen>\n    </iframe>\n  </div>\n  <div>\n    <div class=\"descripcion\">\n      {{video.descripcion}}\n    </div>\n\n    <div class=\"contenedorLikes\">\n      <div class=\"contenedor\" (click)=\"addLikeVideo()\" [ngStyle]=\"{'color': blueLike ? '#0079ff' : '#929294'}\">\n        <ion-icon name=\"happy\" [ngStyle]=\"{'color': blueLike ? '#0079ff' : '#929294'}\"></ion-icon>\n        <div>Me gusta</div>\n      </div>\n      <div class=\"contenedor\" (click)=\"removeLikeVideo()\" [ngStyle]=\"{'color': blueNoLike ? '#0079ff' : '#929294'}\">\n        <ion-icon name=\"sad\" [ngStyle]=\"{'color': blueNoLike ? '#0079ff' : '#929294'}\"></ion-icon>\n        <div>No me gusta</div>\n      </div>\n      <div class=\"contenedor\" (click)=\"compartir()\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n        <div>Compartir</div>\n      </div>\n    </div>\n    \n    <div class=\"separador\"></div>\n    <div class=\"comentarios\" *ngIf=\"comentarios !== null\">Comentarios <strong>{{comentarios.length}}</strong></div>\n    <div class=\"comentarios\" *ngIf=\"comentarios === null\">Comentarios <strong>0</strong></div>\n    <ion-list>\n      <ion-item class=\"margin_top animated fadeIn\" *ngFor=\"let comentario of comentarios\">\n        <div class=\"avatar\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/imgs/usuarios/user.svg\" *ngIf=\"comentario.img_base64 === null\">\n            <img src=\"{{comentario.img_base64}}\" *ngIf=\"comentario.img_base64 !== null\">\n          </ion-avatar>\n        </div>\n        <ion-label>\n          <h2 class=\"titulo\">{{comentario.nombre}}</h2>\n          <p class=\"parrafo\">{{comentario.comentario}}</p>\n          <p class=\"fecha\">{{comentario.fecha}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"divFooter\">\n      <ion-input placeholder=\"Escribe un comentario\" [(ngModel)]=\"comentario\"></ion-input>\n      <ion-icon name=\"send\" (click)=\"sendComment()\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/video-info/video-info.page.scss":
/*!*************************************************!*\
  !*** ./src/app/video-info/video-info.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedorLikes {\n  width: 100%;\n  text-align: center; }\n  .contenedorLikes .contenedor {\n    display: inline-block;\n    width: 32%;\n    border: none;\n    box-shadow: none;\n    text-align: center; }\n  .contenedorLikes .contenedor ion-icon {\n      font-size: 1.2em;\n      color: #929294; }\n  .contenedorLikes .contenedor div {\n      font-size: 50%; }\n  .descripcion {\n  text-align: left;\n  font-size: 1.4em;\n  /* text-shadow: 0px 0px 4px #a1a2a2; */\n  margin-bottom: 5px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 10px; }\n  .separador {\n  width: 100%;\n  border-bottom: 1px solid #ddddde;\n  margin-bottom: 10px; }\n  .divFooter ion-icon {\n  display: inline-block;\n  /* width: 4%; */\n  font-size: 1.6em;\n  vertical-align: sub; }\n  .divFooter ion-input {\n  display: inline-block;\n  width: 92%; }\n  .margin-top ion-label p {\n  overflow: hidden;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  text-align: justify; }\n  .parrafo {\n  overflow: hidden;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  text-align: justify; }\n  .titulo {\n  color: #0004ff; }\n  .fecha {\n  text-decoration: underline;\n  color: #656363; }\n  .avatar {\n  height: 90%;\n  padding: 4px; }\n  .comentarios {\n  padding: 10px;\n  font-size: 110%;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL3ZpZGVvLWluZm8vdmlkZW8taW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGcEI7SUFJSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFSdEI7TUFVTSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO0VBWHBCO01BY00sY0FBYyxFQUFBO0VBS3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQ0FBQTtFQUNBLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYSxFQUFBO0VBRWY7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQixFQUFBO0VBR3JCO0VBRUkscUJBQXFCO0VBQ3JCLGVBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFMdkI7RUFRSSxxQkFBcUI7RUFDckIsVUFBVSxFQUFBO0VBSWQ7RUFHTSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtFQUl6QjtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsY0FBYyxFQUFBO0VBRWhCO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTtFQUVoQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHZDtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWRlby1pbmZvL3ZpZGVvLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3JMaWtlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMyJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIGNvbG9yOiAjOTI5Mjk0O1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgZm9udC1zaXplOiA1MCU7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjcmlwY2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIC8qIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjYTFhMmEyOyAqL1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZXBhcmFkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kaXZGb290ZXIge1xuICBpb24taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qIHdpZHRoOiA0JTsgKi9cbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkyJTtcbiAgfVxufVxuXG4ubWFyZ2luLXRvcCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgcCB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gIH1cbn1cbi5wYXJyYWZvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50aXR1bG8ge1xuICBjb2xvcjogIzAwMDRmZjtcbn1cbi5mZWNoYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzY1NjM2Mztcbn1cbi5hdmF0YXIge1xuICBoZWlnaHQ6IDkwJTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uY29tZW50YXJpb3N7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/video-info/video-info.page.ts":
/*!***********************************************!*\
  !*** ./src/app/video-info/video-info.page.ts ***!
  \***********************************************/
/*! exports provided: VideoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoInfoPage", function() { return VideoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _models_ComentarioModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/ComentarioModel */ "./src/models/ComentarioModel.ts");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var VideoInfoPage = /** @class */ (function () {
    function VideoInfoPage(router, route, alertaService, genericService, navCtrl, sanitizer, loadingService, event, socialSharing) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.alertaService = alertaService;
        this.genericService = genericService;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.loadingService = loadingService;
        this.event = event;
        this.socialSharing = socialSharing;
        this.comentario = "";
        this.comentarios = null;
        this.clickeable = false;
        this.blueLike = false;
        this.blueNoLike = false;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.route.params.subscribe(function (params) {
            _this.video = JSON.parse(params.video);
            _this.video.like = parseInt(_this.video.like.toString());
            _this.video.no_like = parseInt(_this.video.like.toString());
            _this.video.temporal = _this.cambioTemporal();
            if (localStorage.getItem("\u001Cvideo" + _this.video.id) !== null) {
                _this.blueLike = true;
            }
            if (localStorage.getItem("\u001Crmvideo" + _this.video.id) !== null) {
                _this.blueNoLike = true;
            }
            console.log(_this.video);
            _this.cargarComentarios();
        });
        this.event.subscribe('newMessage', function (data) {
            console.log(data);
        });
    }
    VideoInfoPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe('newMessage');
    };
    VideoInfoPage.prototype.cargarComentarios = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("comentarios/comentariosByVideo", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.comentarios = [];
                res.parameters.forEach(function (comentario) {
                    _this.comentarios.push(new _models_ComentarioModel__WEBPACK_IMPORTED_MODULE_2__["ComentarioModel"](comentario.id, comentario.comentario, comentario.fecha_alta, comentario.img_base64, comentario.nombre, comentario.like, comentario.no_like));
                });
                console.log(_this.comentarios);
            }
            //this.loadingService.hide();
        }, function (err) {
            console.log(err.error.description);
            console.log(err.error);
            _this.comentarios = [];
            //this.loadingService.hide();
            //this.navCtrl.pop();
            //this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
        });
    };
    VideoInfoPage.prototype.ngOnInit = function () {
    };
    VideoInfoPage.prototype.cambioTemporal = function () {
        var url = this.video.url;
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
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + returnUrl);
    };
    VideoInfoPage.prototype.sendComment = function () {
        var _this = this;
        if (this.comentario !== null && this.comentario.length > 0) {
            var params = {
                'idUsuario': this.user.id,
                'descripcion': this.comentario,
                'idVideo': this.video.id
            };
            this.genericService.post("comentarios/createComentario", JSON.stringify(params)).subscribe(function (res) {
                console.log(res);
                if (res.parameters) {
                    _this.comentario = "";
                    _this.cargarComentarios();
                }
                //this.loadingService.hide();
            }, function (err) {
                console.log(err.error.description);
                console.log(err.error);
                _this.comentarios = [];
                //this.loadingService.hide();
                //this.navCtrl.pop();
                //this.alertaService.warnAlert(this.genericService.headerError, err.error.description, null);
            });
        }
    };
    VideoInfoPage.prototype.addAsc = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/like", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueLike = true;
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.addAsc2 = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/like", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueLike = true;
                _this.rmDesc();
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.rmAsc = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueNoLike = true;
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.rmAsc2 = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueNoLike = true;
                _this.addDesc();
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.addDesc = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueLike = false;
                _this.rmAsc();
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.rmDesc = function () {
        var _this = this;
        var params = {
            'id': this.video.id
        };
        this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                _this.blueNoLike = false;
                var params_1 = {
                    'id': _this.video.id
                };
                _this.genericService.post("cursos/like", JSON.stringify(params_1)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueLike = true;
                    }
                    //this.loadingService.hide();
                }, function (err) {
                });
            }
            //this.loadingService.hide();
        }, function (err) {
        });
    };
    VideoInfoPage.prototype.addLikeVideo = function () {
        var _this = this;
        if (!this.clickeable) {
            if (this.blueLike && !this.blueNoLike) {
                console.log("like false");
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueLike = false;
                        localStorage.removeItem("\u001Cvideo" + _this.video.id);
                        //localStorage.setItem(`video${this.video.id}`,"1");
                        console.log("like false 2");
                    }
                    _this.clickeable = false;
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
            if (!this.blueLike && !this.blueNoLike) {
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/like", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueLike = true;
                        //localStorage.removeItem(`video${this.video.id}`);
                        localStorage.setItem("\u001Cvideo" + _this.video.id, "1");
                    }
                    _this.clickeable = false;
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
            else {
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/decNoLike", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueNoLike = false;
                        localStorage.removeItem("\u001Crmvideo" + _this.video.id);
                        //localStorage.setItem(`video${this.video.id}`,"1");
                        var params_2 = {
                            'id': _this.video.id
                        };
                        _this.genericService.post("cursos/like", JSON.stringify(params_2)).subscribe(function (res) {
                            console.log(res);
                            if (res.parameters) {
                                _this.blueLike = true;
                                //    localStorage.removeItem(`video${this.video.id}`);
                                localStorage.setItem("\u001Cvideo" + _this.video.id, "1");
                            }
                            _this.clickeable = false;
                            //this.loadingService.hide();
                        }, function (err) {
                            _this.clickeable = false;
                        });
                    }
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
        }
    };
    VideoInfoPage.prototype.removeLikeVideo = function () {
        var _this = this;
        if (!this.clickeable) {
            this.clickeable = true;
            if (this.blueNoLike && !this.blueLike) {
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueNoLike = false;
                        localStorage.removeItem("\u001Crmvideo" + _this.video.id);
                        //localStorage.setItem(`video${this.video.id}`,"1");
                    }
                    _this.clickeable = false;
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
            if (!this.blueNoLike && !this.blueLike) {
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/noLike", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueNoLike = true;
                        //localStorage.removeItem(`video${this.video.id}`);
                        localStorage.setItem("\u001Crmvideo" + _this.video.id, "1");
                    }
                    _this.clickeable = false;
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
            else {
                var params = {
                    'id': this.video.id
                };
                this.genericService.post("cursos/decLike", JSON.stringify(params)).subscribe(function (res) {
                    console.log(res);
                    if (res.parameters) {
                        _this.blueLike = false;
                        localStorage.removeItem("\u001Crmvideo" + _this.video.id);
                        //localStorage.setItem(`rmvideo${this.video.id}`,"1");
                        var params_3 = {
                            'id': _this.video.id
                        };
                        _this.genericService.post("cursos/noLike", JSON.stringify(params_3)).subscribe(function (res) {
                            console.log(res);
                            if (res.parameters) {
                                _this.blueNoLike = true;
                                localStorage.setItem("\u001Crmvideo" + _this.video.id, "1");
                            }
                            _this.clickeable = false;
                            //this.loadingService.hide();
                        }, function (err) {
                            _this.clickeable = false;
                        });
                    }
                    //this.loadingService.hide();
                }, function (err) {
                    _this.clickeable = false;
                });
                return;
            }
        }
    };
    VideoInfoPage.prototype.compartir = function () {
        this.socialSharing.share("Hey! te comparto este video que me ayudó mucho en mi aprendizaje", null, null, this.video.url)
            .then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log("error");
            console.log(error);
        });
    };
    VideoInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-video-info',
            template: __webpack_require__(/*! ./video-info.page.html */ "./src/app/video-info/video-info.page.html"),
            styles: [__webpack_require__(/*! ./video-info.page.scss */ "./src/app/video-info/video-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_7__["GenericService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"]])
    ], VideoInfoPage);
    return VideoInfoPage;
}());



/***/ }),

/***/ "./src/models/ComentarioModel.ts":
/*!***************************************!*\
  !*** ./src/models/ComentarioModel.ts ***!
  \***************************************/
/*! exports provided: ComentarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioModel", function() { return ComentarioModel; });
var ComentarioModel = /** @class */ (function () {
    function ComentarioModel(id, comentario, fecha, img_base64, nombre, like, no_like) {
        this.id = id;
        this.comentario = comentario;
        this.fecha = fecha;
        this.img_base64 = img_base64;
        this.nombre = nombre;
        this.like = like;
        this.no_like = no_like;
    }
    return ComentarioModel;
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
//# sourceMappingURL=video-info-video-info-module.js.map