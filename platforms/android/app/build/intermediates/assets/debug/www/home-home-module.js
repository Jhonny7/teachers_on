(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-categoria/crud-categoria.page */ "./src/app/crud-categoria/crud-categoria.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"], _crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__["CrudCategoriaPage"]],
            entryComponents: [_crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__["CrudCategoriaPage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"icon\">\n  <ion-toolbar color=\"icon\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-icon name=\"unlock\" slot=\"end\" class=\"icono\" (click)=\"cambiarContrasenia()\"></ion-icon>\n\n    <ion-title>\n      Hola {{user.nombre}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"contenedorSpinner\" *ngIf=\"categorias == null || categorias.length == 0\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div class=\"mosaicos\">\n    <div *ngIf=\"user.id_rol != 1\">\n      <div class=\"mosaico animated rubberBand\" *ngFor=\"let categoria of categorias\" [ngStyle]=\"{'background-color':categoria.color !== null ? categoria.color : 'red' }\"\n        (click)=\"checkoutCategory(categoria.id)\">\n        <div class=\"contenedorItems\">\n          <img src=\"{{categoria.img_url}}\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_url !== null\">\n          <img src=\"{{categoria.img_base64}}\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_base64 !== null\">\n          <img src=\"assets/imgs/categoria/categoria.png\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_base64 === null && categoria.img_url === null\">\n          <div class=\"title\">{{categoria.descripcion}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"user.id_rol == 1\">\n      <div class=\"mosaico animated rubberBand\" *ngFor=\"let categoria of categorias; let i = index\" [ngStyle]=\"{'background-color':categoria.color !== null ? categoria.color : 'red' }\"\n        (click)=\"openOptionsSelect(categoria)\">\n        <div class=\"contenedorItems\">\n          <img src=\"{{categoria.img_url}}\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_url !== null\">\n          <img src=\"{{categoria.img_base64}}\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_base64 !== null\">\n          <img src=\"assets/imgs/categoria/categoria.png\" class=\"columnMedia\" alt=\"\" *ngIf=\"categoria.img_base64 === null && categoria.img_url === null\">\n          <div class=\"title\">{{categoria.descripcion}}</div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"user.id_rol == 1 && categorias !== null && categorias.length > 0\"\n    class=\"animated swing\">\n    <ion-fab-button color=\"dark\" (click)=\"openCrud(1)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.icono {\n  font-size: 1.5em;\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNwcm8vRG9jdW1lbnRzL0lvbmljUHJvamVjdHMvSnVhbi9wZXJzb25hbC90ZWFjaGVyc19vbi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaWNvbm8ge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../crud-categoria/crud-categoria.page */ "./src/app/crud-categoria/crud-categoria.page.ts");
/* harmony import */ var _models_CategoriaModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/CategoriaModel */ "./src/models/CategoriaModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/loading-service/loading.service */ "./src/services/loading-service/loading.service.ts");
/* harmony import */ var src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/generic-service/generic-service.service */ "./src/services/generic-service/generic-service.service.ts");
/* harmony import */ var src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/alerta-service/alerta.service */ "./src/services/alerta-service/alerta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, events, loadingService, genericService, alertaService, router, modalController, alertCtrl, actionSheetController) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.loadingService = loadingService;
        this.genericService = genericService;
        this.alertaService = alertaService;
        this.router = router;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.user = null;
        this.categorias = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.events.publish('menu:changed', this.user.id_rol);
        this.chargeCategories();
    }
    HomePage.prototype.ionRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            //complete()  signify that the refreshing has completed and to close the refresher
            _this.categorias = [];
            event.target.complete();
            _this.chargeCategories();
        }, 3000);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomePage.prototype.chargeCategories = function () {
        var _this = this;
        this.categorias = [];
        this.genericService.post("categorias/categorias", JSON.stringify({})).subscribe(function (res) {
            console.log(res);
            if (res.parameters) {
                res.parameters.forEach(function (categoria) {
                    _this.categorias.push(new _models_CategoriaModel__WEBPACK_IMPORTED_MODULE_2__["CategoriaModel"](categoria.id, categoria.descripcion, categoria.img_url, categoria.img_base64, categoria.color));
                });
                _this.loadingService.hide();
            }
        }, function (err) {
            console.log(err.error.description);
            _this.loadingService.hide();
            _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
        });
    };
    HomePage.prototype.checkoutCategory = function (id) {
        //console.log(id);
        this.router.navigate(['/videos', { id: id }]);
        //this.router.navigate(['/home', parametros]);
    };
    //1 = crear, 0 = editar
    HomePage.prototype.openCrud = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__["CrudCategoriaPage"],
                                componentProps: {
                                    type: "Crear"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                //this.loadingService.show().then(() => {
                                _this.chargeCategories();
                                //});
                            }
                            else {
                                console.log("Data null");
                                _this.loadingService.hide();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.openModalEdit(this.categoria);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openModalEdit = function (categoria) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _crud_categoria_crud_categoria_page__WEBPACK_IMPORTED_MODULE_1__["CrudCategoriaPage"],
                            componentProps: {
                                type: "Editar",
                                categoria: categoria
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                            console.log(data.data);
                            var num = data.data.data;
                            console.log(num);
                            if (num == 1) {
                                //this.loadingService.show().then(() => {
                                _this.chargeCategories();
                                //});
                            }
                            else {
                                console.log("Data null");
                                _this.loadingService.hide();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.openOptionsSelect = function (categoria) {
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
                                        _this.eliminar(categoria);
                                    }
                                }, {
                                    text: 'Editar',
                                    icon: 'build',
                                    handler: function () {
                                        _this.categoria = categoria;
                                        _this.openCrud(2);
                                    }
                                }, {
                                    text: 'Ver Videos',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        _this.checkoutCategory(categoria.id);
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
    /**Lógica de eliminado */
    HomePage.prototype.eliminar = function (categoria) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Confirmación",
                            message: "¿Estás seguro de eliminar la categoría?, recuerda que si la categoría contiene videos, no podrás eliminarla",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.eliminarCategoria(categoria);
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
    HomePage.prototype.eliminarCategoria = function (categoria) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    id: categoria.id
                };
                this.loadingService.show().then(function () {
                    _this.genericService.post("categorias/deleteCategoria", JSON.stringify(params)).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "A") {
                            return _this.removeitem(categoria).then(function () {
                                _this.loadingService.hide();
                            });
                        }
                        else {
                            _this.alertaService.warnAlert(_this.genericService.headerValidacion, res.description, null);
                        }
                        _this.loadingService.hide();
                    }, function (err) {
                        console.log(err);
                        _this.loadingService.hide();
                        _this.alertaService.errorAlert(_this.genericService.headerError, err.error.description, null);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.removeitem = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = this.categorias.findIndex(function (nivel) { return nivel.id == n.id; });
                this.categorias = this.categorias.slice(0, index).concat(this.categorias.slice(index + 1));
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve(true);
                    })];
            });
        });
    };
    HomePage.prototype.cambiarContrasenia = function () {
        this.router.navigateByUrl("/cambio-contrasenia");
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            src_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_services_generic_service_generic_service_service__WEBPACK_IMPORTED_MODULE_6__["GenericService"],
            src_services_alerta_service_alerta_service__WEBPACK_IMPORTED_MODULE_7__["AlertaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map