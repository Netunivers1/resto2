webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_routing__ = __webpack_require__("../../../../../src/app/admin/admin.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__ = __webpack_require__("../../../../../src/app/admin/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plat_plat_component__ = __webpack_require__("../../../../../src/app/admin/plat/plat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__plat_ajout_ajout_component__ = __webpack_require__("../../../../../src/app/admin/plat/ajout/ajout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_ajout_ajout_component__ = __webpack_require__("../../../../../src/app/admin/menu/ajout/ajout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__plat_delete_delete_component__ = __webpack_require__("../../../../../src/app/admin/plat/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_delete_delete_component__ = __webpack_require__("../../../../../src/app/admin/menu/delete/delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { RegisterComponent } from './register/register.component';
// import { AlertComponent } from '../_directives/alert/alert.component';
// import { LoginComponent } from './login/login.component';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__admin_routing__["a" /* adminRouting */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__plat_plat_component__["a" /* PlatComponent */],
                __WEBPACK_IMPORTED_MODULE_10__plat_ajout_ajout_component__["a" /* AjoutPlatComponent */],
                __WEBPACK_IMPORTED_MODULE_11__menu_ajout_ajout_component__["a" /* AjoutMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__plat_delete_delete_component__["a" /* DeletePlatComponent */],
                __WEBPACK_IMPORTED_MODULE_13__menu_delete_delete_component__["a" /* DeleteMenuComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_smart_modal__["b" /* NgxSmartModalService */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("../../../../../src/app/admin/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plat_plat_component__ = __webpack_require__("../../../../../src/app/admin/plat/plat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plat_ajout_ajout_component__ = __webpack_require__("../../../../../src/app/admin/plat/ajout/ajout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_ajout_ajout_component__ = __webpack_require__("../../../../../src/app/admin/menu/ajout/ajout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plat_delete_delete_component__ = __webpack_require__("../../../../../src/app/admin/plat/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_delete_delete_component__ = __webpack_require__("../../../../../src/app/admin/menu/delete/delete.component.ts");








var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'menu/:insertOrList', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'plat/:insertOrList', component: __WEBPACK_IMPORTED_MODULE_3__plat_plat_component__["a" /* PlatComponent */] },
    { path: 'ajoutplat', component: __WEBPACK_IMPORTED_MODULE_4__plat_ajout_ajout_component__["a" /* AjoutPlatComponent */] },
    { path: 'deleteplat/:id', component: __WEBPACK_IMPORTED_MODULE_6__plat_delete_delete_component__["a" /* DeletePlatComponent */] },
    { path: 'ajoutmenu', component: __WEBPACK_IMPORTED_MODULE_5__menu_ajout_ajout_component__["a" /* AjoutMenuComponent */] },
    { path: 'deletemenu/:id', component: __WEBPACK_IMPORTED_MODULE_7__menu_delete_delete_component__["a" /* DeleteMenuComponent */] },
];
var adminRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Bienvenu sur l'administration.\n</p>\n<p>\n\tCliquer sur les menus à gauche pour ajouter ou regarder la liste des plats ou menus.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/menu/ajout/ajout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/menu/ajout/ajout.component.html":
/***/ (function(module, exports) {

module.exports = "<form #userlogin=\"ngForm\" (ngSubmit)=\"onClickSubmit(userlogin.value)\" >\n\n\t<div class=\"row\">\n\t    <div class=\"col-lg-12\">\n\t        <div class=\"card\">\n\t            <div class=\"card-block\">\n\t                <h4 class=\"card-title\">Formulaire d'ajout de nouveau Menu</h4>\n\t                <hr>\n\t                <div class=\"table-responsive\">\n\t                    <table class=\"table\">\n\t                        <thead>\n\t                            <tr>\n\t                                <th>Nom</th>\n\t                                <th>\n\t\t                                <input \n\t\t\t\t\t\t                    type=\"text\" \n\t\t\t\t\t\t                    placeholder=\"Nom du menu\" \n\t\t\t\t\t\t                    class=\"form-control form-control-line\"\n\t\t\t\t\t\t                    name=\"nom\"\n\t\t\t\t\t\t                    ngModel\n\t\t\t\t\t\t                >\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t                                <th>Prix</th>\n\t                                <th>\n\t\t\t\t\t\t                <input \n\t\t\t\t\t\t                    type=\"text\" \n\t\t\t\t\t\t                    placeholder=\"Prix\" \n\t\t\t\t\t\t                    class=\"form-control form-control-line\"\n\t\t\t\t\t\t                    name=\"prix\"\n\t\t\t\t\t\t                    ngModel\n\t\t\t\t\t\t                >                                \t\n\t                                </th>\n\t                            </tr>\n\t                            <tr>\n\t                                <th>Ingrédient</th>\n\t                                <th>\n\t\t\t\t\t\t                <input \n\t\t\t\t\t\t                    type=\"text\" \n\t\t\t\t\t\t                    placeholder=\"Ingrédient\" \n\t\t\t\t\t\t                    class=\"form-control form-control-line\"\n\t\t\t\t\t\t                    name=\"ingredient\"\n\t\t\t\t\t\t                    ngModel\n\t\t\t\t\t\t                >                                \t\n\t                                </th>\n\t                            </tr>\n\t                            <tr>\n\t                                <th>\n\t                                </th>\n\t                                <th>\n\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t                    type=\"submit\" \n\t\t\t\t\t\t                    value=\"Ajouter\"\n\t\t\t\t\t\t                    class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n\t\t\t\t\t\t                    style=\"color: #fff; background: #097912 !important; border: 1px solid #097912 !important; margin-right: 10px;\"\n\t\t\t\t\t\t                >\n\t\t\t\t\t\t                <a \n\t\t\t\t\t\t\t\t            class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n\t\t\t\t\t\t\t\t            style=\"color: #fff; background: #f0a00e !important; border: 1px solid #d8aa02\"\n\t\t\t\t\t\t\t\t            routerLink=\"/admin/menu/liste\"\n\t\t\t\t\t\t\t\t        >\n\t\t\t\t\t\t\t\t            Annuler\n\t\t\t\t\t\t\t\t        </a>                                \t\n\t                                </th>\n\t                            </tr>\n\t                        </thead>\n\t                    </table>\n\t                </div>\n\t            </div>\n\t        </div>\n\t    </div>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/menu/ajout/ajout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AjoutMenuComponent = /** @class */ (function () {
    function AjoutMenuComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    AjoutMenuComponent.prototype.ngOnInit = function () {
    };
    AjoutMenuComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        var messageErreur = this.validationFomulaire(data);
        if (messageErreur) {
            alert(messageErreur);
            return false;
        }
        var url = __WEBPACK_IMPORTED_MODULE_4__config_host__["a" /* urlApi */] + '/menu';
        this.http.post(url, data).subscribe(function (res) {
            _this.router.navigate(['/admin/menu/insert']);
        }, function (err) {
            alert('Le menu ' + data.nom + ' existe déjà');
        });
    };
    AjoutMenuComponent.prototype.validationFomulaire = function (data) {
        var message = '';
        if (data.nom === '')
            message = 'Le champ nom ne doit pas être vide';
        if (data.pm === '')
            message = 'Le champ 33cl ne doit pas être vide';
        if (data.gm === '')
            message = 'Le champ 50cl ne doit pas être vide';
        if (message != '')
            return message;
        return false;
    };
    AjoutMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ajout',
            template: __webpack_require__("../../../../../src/app/admin/menu/ajout/ajout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/menu/ajout/ajout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AjoutMenuComponent);
    return AjoutMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/menu/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/menu/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Suppression en cours ...\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/menu/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteMenuComponent = /** @class */ (function () {
    function DeleteMenuComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    DeleteMenuComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        this.deleteMenuById(id);
    };
    DeleteMenuComponent.prototype.deleteMenuById = function (id) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__config_host__["a" /* urlApi */] + '/menu/' + id;
        return this.http.delete(url).subscribe(function (res) {
            _this.router.navigate(['/admin/menu/deleted']);
        }, function (err) {
            console.log('delete error');
        });
    };
    DeleteMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/admin/menu/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/menu/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], DeleteMenuComponent);
    return DeleteMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    cursor: pointer;\n}\n\n#text{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 20px;\n    color: white;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 pull-left\">\n        <a \n            class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down\"\n            style=\"color: #fff; background: #0275d8 !important; border: 1px solid #0275d8;\"\n            routerLink=\"/admin/ajoutmenu\"\n        >\n            Ajouter un nouveau Menu\n        </a>    \n    </div>\n</div><br>\n\n<div class=\"row\" *ngIf=\"insertOrList;\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-success\">\n            <strong>un nouveau Menu a été ajouté avec succès !</strong>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"deleted;\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-success\">\n            <strong>un Menu a été supprimé avec succès !</strong>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"modified;\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-success\">\n            <strong>un Menu a été modifié avec succès !</strong>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">Liste des Menus</h4>\n                <hr>               \n                <div class=\"table-responsive\">\n                    <div id=\"overlay\" *ngIf=\"!menusCharger;\">\n                        <div id=\"text\">Chargement des Menus en cours...</div>\n                    </div>                     \n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Nom</th>\n                                <th>Prix</th>\n                                <th>Ingrédient</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let menu  of menus\">\n                                <td>{{menu.nom | uppercase}}</td>\n                                <td>{{menu.prix}}</td>\n                                <td>{{menu.ingredient}}</td>\n                                <td style=\"width: 25%;\">\n                                    <a \n                                        class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #f07f0a !important; border: 1px solid #f07f0a; margin-right: 5px;\"\n                                        (click)=\"ngxSmartModalService.getModal('modifierModal').open(); modifierMenu(menu);\"\n                                    >\n                                        Modifier\n                                    </a>\n                                    <a \n                                        class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down dialog__close-btn ng-tns-c5-2 ng-star-inserted\"\n                                        style=\"color: #fff; background: red !important; border: 1px solid red;\"                                        \n                                        (click)=\"ngxSmartModalService.getModal('myModal').open(); supprimerMenu(menu);\"\n                                    >\n                                        Supprimer\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ngx-smart-modal #myModal identifier=\"myModal\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Attention</h4>\n    </div>\n\n    <div class=\"modal-body\">\n        <h3>Voulez vous vraiment supprimer ce menu ?</h3>       \n    </div>\n\n    <div class=\"modal-footer\">\n        <a \n            type=\"button\" \n            class=\"btn btn-default\" \n            data-dismiss=\"modal\"\n            style=\"color: #fff; background: red !important;\"\n            routerLink=\"/admin/deletemenu/{{idMenuTodelete}}\"\n        >\n            Supprimer\n        </a>\n        <button \n            type=\"button\" \n            class=\"btn btn-primary\"\n            style=\"color: #fff; background: #f07f0a !important; border: 1px solid #f07f0a;\" \n            (click)=\"myModal.close()\"\n        >\n            Annuler\n        </button>\n    </div>\n</ngx-smart-modal>\n\n<ngx-smart-modal #modifierModal identifier=\"modifierModal\">\n    <div *ngIf=\"menuToModifier\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"myModalLabel\">\n                Modification du menu {{menuToModifier.nom}}\n            </h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"table-responsive\">\n                <form #boiss=\"ngForm\" (ngSubmit)=\"onClickSubmit(boiss.value)\" method=\"PUT\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    Nom du menu\n                                </th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Nom de la boisson\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"nom\"\n                                        ngModel=\"{{menuToModifier.nom}}\"\n                                    >\n                                </th>\n                            </tr>\n                            <tr>\n                                <th>Prix</th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Prix pour les 33cl\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"pm\"\n                                        ngModel=\"{{menuToModifier.prix}}\"\n                                    >                                   \n                                </th>\n                            </tr>\n                            <tr>\n                                <th>Ingrédient</th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Prix pour les 50cl\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"gm\"\n                                        ngModel=\"{{menuToModifier.ingredient}}\"\n                                    >                                   \n                                </th>\n                            </tr>\n                            <tr>\n                                <th>\n                                </th>\n                                <th>\n                                    <input \n                                        type=\"hidden\"\n                                        name=\"id\"\n                                        ngModel=\"{{menuToModifier.id}}\"\n                                    >\n                                    <input \n                                        type=\"submit\" \n                                        value=\"Modifier\"\n                                        class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #097912 !important; border: 1px solid #097912 !important; margin-right: 10px;\"\n                                    >\n                                    <a \n                                        class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #f0a00e !important; border: 1px solid #d8aa02\"\n                                        (click)=\"modifierModal.close()\"\n                                    >\n                                        Annuler\n                                    </a>                                    \n                                </th>\n                            </tr>\n                        </thead>\n                    </table>\n                </form>\n            </div>            \n        </div>\n    </div>\n</ngx-smart-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuComponent = /** @class */ (function () {
    function MenuComponent(http, route, ngxSmartModalService, router) {
        this.http = http;
        this.route = route;
        this.ngxSmartModalService = ngxSmartModalService;
        this.router = router;
        this.menusCharger = false;
        this.menuToModifier = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
        this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
        this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/menu';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.menus = data;
            _this.menusCharger = true;
        });
    };
    // ngAfterViewInit() {
    // 	const obj: Object = this.boissonCourant;
    // 	this.ngxSmartModalService.setModalData(obj, 'myModal');
    // }
    MenuComponent.prototype.supprimerMenu = function (menu) {
        this.idMenuTodelete = menu.id;
    };
    MenuComponent.prototype.modifierMenu = function (menu) {
        this.menuToModifier = menu;
    };
    MenuComponent.prototype.onClickSubmit = function (data) {
        var messageErreur = this.validationFomulaire(data);
        if (messageErreur) {
            alert(messageErreur);
            return false;
        }
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: cpHeaders });
        var body = JSON.stringify(data);
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/menu/' + data.id;
        console.log(this.headers);
        return this.http.put(url, data, options).map(function (success) {
            success.status;
            console.log('resss');
        })
            .catch(this.handleError);
    };
    MenuComponent.prototype.extractData = function (res) {
        console.log('extractData');
        var body = res.json();
        console.log(body);
        return body || {};
    };
    MenuComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MenuComponent.prototype.validationFomulaire = function (data) {
        var message = '';
        if (data.nom === '')
            message = 'Le champ nom ne doit pas être vide';
        if (data.pm === '')
            message = 'Le champ 33cl ne doit pas être vide';
        if (data.gm === '')
            message = 'Le champ 50cl ne doit pas être vide';
        if (message != '')
            return message;
        return false;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/admin/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/plat/ajout/ajout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/plat/ajout/ajout.component.html":
/***/ (function(module, exports) {

module.exports = "<form #userlogin=\"ngForm\" (ngSubmit)=\"onClickSubmit(userlogin.value)\" >\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-block\">\n                    <h4 class=\"card-title\">Formulaire d'ajout de nouveau Plat</h4>\n                    <hr>\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Nom</th>\n                                    <th>\n                                        <input \n                                            type=\"text\" \n                                            placeholder=\"Nom du plat\" \n                                            class=\"form-control form-control-line\"\n                                            name=\"nom\"\n                                            ngModel\n                                        >\n                                    </th>\n                                </tr>\n                                <tr>\n                                    <th>Prix</th>\n                                    <th>\n                                        <input \n                                            type=\"text\" \n                                            placeholder=\"Prix\" \n                                            class=\"form-control form-control-line\"\n                                            name=\"prix\"\n                                            ngModel\n                                        >                                   \n                                    </th>\n                                </tr>\n                                <tr>\n                                    <th>Ingrédient</th>\n                                    <th>\n                                        <input \n                                            type=\"text\" \n                                            placeholder=\"Ingrédient\" \n                                            class=\"form-control form-control-line\"\n                                            name=\"ingredient\"\n                                            ngModel\n                                        >                                   \n                                    </th>\n                                </tr>                                \n                                <tr>\n                                    <th>\n                                    </th>\n                                    <th>\n                                        <input \n                                            type=\"submit\" \n                                            value=\"Ajouter\"\n                                            class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                            style=\"color: #fff; background: #097912 !important; border: 1px solid #097912 !important; margin-right: 10px;\"\n                                        >\n                                        <a \n                                            class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                            style=\"color: #fff; background: #f0a00e !important; border: 1px solid #d8aa02\"\n                                            routerLink=\"/admin/plat/liste\"\n                                        >\n                                            Annuler\n                                        </a>                                    \n                                    </th>\n                                </tr>\n                            </thead>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/plat/ajout/ajout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AjoutPlatComponent = /** @class */ (function () {
    function AjoutPlatComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    AjoutPlatComponent.prototype.ngOnInit = function () {
    };
    AjoutPlatComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        var messageErreur = this.validationFomulaire(data);
        if (messageErreur) {
            alert(messageErreur);
            return false;
        }
        var url = __WEBPACK_IMPORTED_MODULE_4__config_host__["a" /* urlApi */] + '/plat';
        this.http.post(url, data).subscribe(function (res) {
            _this.router.navigate(['/admin/plat/insert']);
        }, function (err) {
            alert('Le plat ' + data.nom + ' existe déjà');
        });
    };
    AjoutPlatComponent.prototype.validationFomulaire = function (data) {
        var message = '';
        if (data.nom === '')
            message = 'Le champ nom ne doit pas être vide';
        if (data.pm === '')
            message = 'Le champ petite ne doit pas être vide';
        if (data.gm === '')
            message = 'Le champ grande ne doit pas être vide';
        if (data.ingredient === '')
            message = 'Le champ ingredient ne doit pas être vide';
        if (message != '')
            return message;
        return false;
    };
    AjoutPlatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ajout',
            template: __webpack_require__("../../../../../src/app/admin/plat/ajout/ajout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/plat/ajout/ajout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AjoutPlatComponent);
    return AjoutPlatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/plat/delete/delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/plat/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\tSuppression en cours ...\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/plat/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeletePlatComponent = /** @class */ (function () {
    function DeletePlatComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    DeletePlatComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        this.deletePlatById(id);
    };
    DeletePlatComponent.prototype.deletePlatById = function (id) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__config_host__["a" /* urlApi */] + '/plat/' + id;
        return this.http.delete(url).subscribe(function (res) {
            _this.router.navigate(['/admin/plat/deleted']);
        }, function (err) {
            console.log('delete error');
        });
    };
    DeletePlatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/admin/plat/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/plat/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], DeletePlatComponent);
    return DeletePlatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/plat/plat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    cursor: pointer;\n}\n\n#text{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 20px;\n    color: white;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/plat/plat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 pull-left\">\n        <a \n            class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down\"\n            style=\"color: #fff; background: #0275d8 !important; border: 1px solid #0275d8;\"\n            routerLink=\"/admin/ajoutplat\"\n        >\n            Ajouter un nouveau plat\n        </a>    \n    </div>\n</div><br>\n\n<div class=\"row\" *ngIf=\"insertOrList;\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-success\">\n            <strong>Un nouveau plat a été ajouté avec success!</strong>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"deleted;\">\n    <div class=\"col-md-12\">\n        <div class=\"alert alert-success\">\n            <strong>Un plat a été supprimé avec success!</strong>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">Liste des plats</h4>\n                <hr>\n                <div id=\"overlay\" *ngIf=\"!platsCharger;\">\n                    <div id=\"text\">Chargement des plats en cours...</div>\n                </div>               \n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Nom</th>\n                                <th>Prix</th>\n                                <th>Ingrédient</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let plat of plats\">\n                                <td>{{plat.nom | uppercase}}</td>\n                                <td>{{plat.prix}}</td>\n                                <td>{{plat.ingredient}}</td>\n                                <td style=\"width: 25%;\">\n                                    <a \n                                        class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #f07f0a !important; border: 1px solid #f07f0a; margin-right: 5px;\"\n                                        (click)=\"ngxSmartModalService.getModal('modifierModal').open(); modifierPlat(plat);\"\n                                    >\n                                        Modifier\n                                    </a>\n                                    <a \n                                        class=\"btn waves-effect waves-light btn-primary pull-left hidden-lg-down dialog__close-btn ng-tns-c5-2 ng-star-inserted\"\n                                        style=\"color: #fff; background: red !important; border: 1px solid red;\"\n                                        (click)=\"ngxSmartModalService.getModal('myModal').open();supprimerPlat(plat)\"\n                                    >\n                                        Supprimer\n                                    </a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ngx-smart-modal #myModal identifier=\"myModal\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Attention</h4>\n    </div>\n\n    <div class=\"modal-body\">\n        <h3>Voulez vous vraiment supprimer ce plat ?</h3>\n    </div>\n\n    <div class=\"modal-footer\">\n        <a \n            type=\"button\"\n            class=\"btn btn-default\" \n            data-dismiss=\"modal\"\n            style=\"color: #fff; background: red !important;\"\n            routerLink=\"/admin/deleteplat/{{idPlatTodelete}}\" \n        >\n            Supprimer\n        </a>\n        <button \n            type=\"button\"\n            class=\"btn btn-primary\"\n            style=\"color: #fff; background: #f07f0a !important; border: 1px solid #f07f0a;\" \n            (click)=\"myModal.close()\"\n        >\n            Annuler\n        </button>\n    </div>\n</ngx-smart-modal>\n\n<ngx-smart-modal #modifierModal identifier=\"modifierModal\">\n    <div *ngIf=\"platToModifier\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"myModalLabel\">\n                Modification du plat {{platToModifier.nom}}\n            </h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"table-responsive\">\n                <form #boiss=\"ngForm\" (ngSubmit)=\"onClickSubmit(boiss.value)\" method=\"PUT\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    Nom du plat\n                                </th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Nom de la boisson\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"nom\"\n                                        ngModel=\"{{platToModifier.nom}}\"\n                                    >\n                                </th>\n                            </tr>\n                            <tr>\n                                <th>Prix</th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Prix pour les 33cl\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"pm\"\n                                        ngModel=\"{{platToModifier.prix}}\"\n                                    >                                   \n                                </th>\n                            </tr>\n                            <tr>\n                                <th>Ingrédient</th>\n                                <th>\n                                    <input \n                                        type=\"text\" \n                                        placeholder=\"Prix pour les 50cl\" \n                                        class=\"form-control form-control-line\"\n                                        name=\"ingredient\"\n                                        ngModel=\"{{platToModifier.ingredient}}\"\n                                    >                                   \n                                </th>\n                            </tr>\n                            <tr>\n                                <th>\n                                </th>\n                                <th>\n                                    <input \n                                        type=\"hidden\"\n                                        name=\"id\"\n                                        ngModel=\"{{platToModifier.id}}\"\n                                    >\n                                    <input \n                                        type=\"submit\" \n                                        value=\"Modifier\"\n                                        class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #097912 !important; border: 1px solid #097912 !important; margin-right: 10px;\"\n                                    >\n                                    <a \n                                        class=\"btn waves-effect waves-light pull-left hidden-lg-down\"\n                                        style=\"color: #fff; background: #f0a00e !important; border: 1px solid #d8aa02\"\n                                        (click)=\"modifierModal.close()\"\n                                    >\n                                        Annuler\n                                    </a>                                    \n                                </th>\n                            </tr>\n                        </thead>\n                    </table>\n                </form>\n            </div>            \n        </div>\n    </div>\n</ngx-smart-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/plat/plat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlatComponent = /** @class */ (function () {
    function PlatComponent(http, route, ngxSmartModalService) {
        this.http = http;
        this.route = route;
        this.ngxSmartModalService = ngxSmartModalService;
        this.platsCharger = false;
        this.platToModifier = false;
    }
    PlatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
        this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/plat';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.plats = data;
            _this.platsCharger = true;
        });
    };
    // ngAfterViewInit() {
    // 	const obj: Object = this.boissonCourant;
    // 	this.ngxSmartModalService.setModalData(obj, 'myModal');
    // }
    PlatComponent.prototype.supprimerPlat = function (plat) {
        this.idPlatTodelete = plat.id;
    };
    PlatComponent.prototype.modifierPlat = function (plat) {
        this.platToModifier = plat;
    };
    PlatComponent.prototype.onClickSubmit = function (data) {
        var messageErreur = this.validationFomulaire(data);
        if (messageErreur) {
            alert(messageErreur);
            return false;
        }
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: cpHeaders });
        var body = JSON.stringify(data);
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/plat/' + data.id;
        console.log(this.headers);
        return this.http.put(url, data, options).map(function (success) {
            success.status;
            console.log('resss');
        })
            .catch(this.handleError);
    };
    PlatComponent.prototype.extractData = function (res) {
        console.log('extractData');
        var body = res.json();
        console.log(body);
        return body || {};
    };
    PlatComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    PlatComponent.prototype.validationFomulaire = function (data) {
        var message = '';
        if (data.nom === '')
            message = 'Le champ nom ne doit pas être vide';
        if (data.pm === '')
            message = 'Le champ 33cl ne doit pas être vide';
        if (data.gm === '')
            message = 'Le champ 50cl ne doit pas être vide';
        if (message != '')
            return message;
        return false;
    };
    PlatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-palt',
            template: __webpack_require__("../../../../../src/app/admin/plat/plat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/plat/plat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */]])
    ], PlatComponent);
    return PlatComponent;
}());



/***/ }),

/***/ "../../../../ngx-smart-modal/esm5/ngx-smart-modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxSmartModalService; });
/* unused harmony export NgxSmartModalComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxSmartModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/**
 * @license ngx-smart-modal
 * MIT license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalService = (function () {
    function NgxSmartModalService() {
        this.modalStack = [];
    }
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param {?} modalInstance The object that contains the given modal identifier and the modal itself.
     * @param {?=} force Optional parameter that forces the overriding of modal instance if it already exists.
     * @return {?} Returns nothing special.
     */
    NgxSmartModalService.prototype.addModal = /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param {?} modalInstance The object that contains the given modal identifier and the modal itself.
     * @param {?=} force Optional parameter that forces the overriding of modal instance if it already exists.
     * @return {?} Returns nothing special.
     */
    function (modalInstance, force) {
        if (force) {
            var /** @type {?} */ i = this.modalStack.findIndex(function (o) {
                return o.id === modalInstance.id;
            });
            if (i > -1) {
                this.modalStack[i].modal = modalInstance.modal;
            }
            else {
                this.modalStack.push(modalInstance);
            }
            return;
        }
        this.modalStack.push(modalInstance);
    };
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    NgxSmartModalService.prototype.getModal = /**
     * Retrieve a modal instance by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?}
     */
    function (id) {
        return this.modalStack.filter(function (o) {
            return o.id === id;
        })[0].modal;
    };
    /**
     * Retrieve all the created modals.
     *
     * @return {?} Returns an array that contains all modal instances.
     */
    NgxSmartModalService.prototype.getModalStack = /**
     * Retrieve all the created modals.
     *
     * @return {?} Returns an array that contains all modal instances.
     */
    function () {
        return this.modalStack;
    };
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @return {?} Returns an array that contains all the opened modals.
     */
    NgxSmartModalService.prototype.getOpenedModals = /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @return {?} Returns an array that contains all the opened modals.
     */
    function () {
        var /** @type {?} */ modals = [];
        this.modalStack.forEach(function (o) {
            if (o.modal.visible) {
                modals.push(o);
            }
        });
        return modals;
    };
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @return {?} Returns a higher index from all the existing modal instances.
     */
    NgxSmartModalService.prototype.getHigherIndex = /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @return {?} Returns a higher index from all the existing modal instances.
     */
    function () {
        var /** @type {?} */ index = [1041];
        var /** @type {?} */ modals = this.getModalStack();
        modals.forEach(function (o) {
            index.push(o.modal.layerPosition);
        });
        return Math.max.apply(Math, index) + 1;
    };
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @return {?} Returns the number of modal instances.
     */
    NgxSmartModalService.prototype.getModalStackCount = /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @return {?} Returns the number of modal instances.
     */
    function () {
        return this.modalStack.length;
    };
    /**
     * Remove a modal instance from the modal stack.
     *
     * @param {?} id The modal identifier.
     * @return {?} Returns the removed modal instance.
     */
    NgxSmartModalService.prototype.removeModal = /**
     * Remove a modal instance from the modal stack.
     *
     * @param {?} id The modal identifier.
     * @return {?} Returns the removed modal instance.
     */
    function (id) {
        var /** @type {?} */ i = this.modalStack.findIndex(function (o) {
            return o.id === id;
        });
        if (i > -1) {
            this.modalStack.splice(i, 1);
        }
    };
    /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param {?} data The data you want to associate to the modal.
     * @param {?} id The modal identifier.
     * @param {?=} force If true, overrides the previous stored data if there was.
     * @return {?} Returns true if the given modal exists and the process has been tried, either false.
     */
    NgxSmartModalService.prototype.setModalData = /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param {?} data The data you want to associate to the modal.
     * @param {?} id The modal identifier.
     * @param {?=} force If true, overrides the previous stored data if there was.
     * @return {?} Returns true if the given modal exists and the process has been tried, either false.
     */
    function (data, id, force) {
        if (!!this.modalStack.find(function (o) {
            return o.id === id;
        })) {
            this.getModal(id).setData(data, force);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Retrieve modal data by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} Returns the associated modal data.
     */
    NgxSmartModalService.prototype.getModalData = /**
     * Retrieve modal data by its identifier.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} Returns the associated modal data.
     */
    function (id) {
        return this.getModal(id).getData();
    };
    /**
     * Reset the data attached to a given modal.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} Returns the removed data or false if modal doesn't exist.
     */
    NgxSmartModalService.prototype.resetModalData = /**
     * Reset the data attached to a given modal.
     *
     * @param {?} id The modal identifier used at creation time.
     * @return {?} Returns the removed data or false if modal doesn't exist.
     */
    function (id) {
        if (!!this.modalStack.find(function (o) {
            return o.id === id;
        })) {
            var /** @type {?} */ removed = this.getModal(id).getData();
            this.getModal(id).removeData();
            return removed;
        }
        else {
            return false;
        }
    };
    /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     * @return {?}
     */
    NgxSmartModalService.prototype.closeLatestModal = /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     * @return {?}
     */
    function () {
        var /** @type {?} */ me = this;
        clearTimeout(this.debouncer);
        this.debouncer = setTimeout(function () {
            var /** @type {?} */ tmp;
            me.getOpenedModals().forEach(function (m) {
                if (m.modal.layerPosition > (!!tmp ? tmp.modal.layerPosition : 0 && m.modal.escapable)) {
                    tmp = m;
                }
            });
            return !!tmp ? tmp.modal.close() : false;
        }, 100);
    };
    NgxSmartModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NgxSmartModalService.ctorParameters = function () { return []; };
    return NgxSmartModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalComponent = (function () {
    function NgxSmartModalComponent(ngxSmartModalService, changeDetectorRef) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.changeDetectorRef = changeDetectorRef;
        this.closable = true;
        this.escapable = true;
        this.dismissable = true;
        this.customClass = '';
        this.visible = false;
        this.backdrop = true;
        this.force = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCloseFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDismiss = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDismissFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEscape = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDataAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDataRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.layerPosition = 1041;
        this.overlayVisible = false;
        this.data = null;
    }
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.layerPosition += this.ngxSmartModalService.getModalStackCount();
        this.ngxSmartModalService.addModal({ id: this.identifier, modal: this }, this.force);
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ngxSmartModalService.removeModal(this.identifier);
    };
    /**
     * @param {?=} top
     * @return {?}
     */
    NgxSmartModalComponent.prototype.open = /**
     * @param {?=} top
     * @return {?}
     */
    function (top) {
        if (top) {
            this.layerPosition = this.ngxSmartModalService.getHigherIndex();
        }
        if (!document.body.classList.contains('dialog-open')) {
            document.body.classList.add('dialog-open');
        }
        this.overlayVisible = true;
        this.visible = true;
        this.onOpen.emit(this);
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ me = this;
        this.visible = false;
        this.visibleChange.emit(this.visible);
        this.onClose.emit(this);
        if (document.body.classList.contains('dialog-open')) {
            document.body.classList.remove('dialog-open');
        }
        setTimeout(function () {
            me.overlayVisible = false;
            me.changeDetectorRef.markForCheck();
            me.onCloseFinished.emit(me);
        }, 150);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxSmartModalComponent.prototype.dismiss = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ me = this;
        if (!this.dismissable) {
            return;
        }
        if (e.target.classList.contains('overlay')) {
            this.visible = false;
            this.visibleChange.emit(this.visible);
            this.onDismiss.emit(this);
            if (document.body.classList.contains('dialog-open')) {
                document.body.classList.remove('dialog-open');
            }
            setTimeout(function () {
                me.overlayVisible = false;
                me.changeDetectorRef.markForCheck();
                me.onDismissFinished.emit(me);
            }, 150);
        }
    };
    /**
     * @param {?} className
     * @return {?}
     */
    NgxSmartModalComponent.prototype.addCustomClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        if (!this.customClass.length) {
            this.customClass = className;
        }
        else {
            this.customClass += ' ' + className;
        }
    };
    /**
     * @param {?=} className
     * @return {?}
     */
    NgxSmartModalComponent.prototype.removeCustomClass = /**
     * @param {?=} className
     * @return {?}
     */
    function (className) {
        if (className) {
            this.customClass = this.customClass.replace(className, '').trim();
        }
        else {
            this.customClass = '';
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.hasData = /**
     * @return {?}
     */
    function () {
        return !!this.data;
    };
    /**
     * @param {?} data
     * @param {?=} force
     * @return {?}
     */
    NgxSmartModalComponent.prototype.setData = /**
     * @param {?} data
     * @param {?=} force
     * @return {?}
     */
    function (data, force) {
        var _this = this;
        if (!this.data || (!!this.data && force)) {
            setTimeout(function () {
                _this.data = data;
                _this.onDataAdded.emit(_this.data);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    /**
     * @return {?}
     */
    NgxSmartModalComponent.prototype.removeData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.data = null;
            _this.onDataRemoved.emit(true);
        }, 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxSmartModalComponent.prototype.escapeKeyboardEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 27 && this.visible) {
            if (!this.escapable) {
                return false;
            }
            else {
                this.onEscape.emit(this);
                this.ngxSmartModalService.closeLatestModal();
            }
        }
    };
    NgxSmartModalComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('dialog', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('void => *', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                            ]),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => void', [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                            ])
                        ])
                    ],
                    selector: 'ngx-smart-modal',
                    template: "\n    <style>\n      .overlay {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        overflow-y: auto;\n        background-color: rgba(0, 0, 0, 0.5);\n        z-index: 999;\n      }\n\n      .overlay.transparent {\n        background-color: transparent;\n      }\n\n      body.dialog-open {\n        overflow: hidden;\n      }\n\n      .dialog {\n        visibility: visible;\n        position: absolute;\n        border-radius: 2px;\n        right: 0;\n        left: 0;\n        top: 20px;\n        margin-bottom: 20px;\n        margin-right: auto;\n        margin-left: auto;\n        min-height: 200px;\n        width: 90%;\n        max-width: 520px;\n        background-color: #fff;\n        padding: 12px;\n        box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n      }\n\n      @media (min-width: 768px) {\n        .dialog {\n          top: 40px;\n          margin-bottom: 40px;\n        }\n      }\n\n      .dialog__close-btn {\n        border: 0;\n        background: none;\n        color: #2d2d2d;\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        font-size: 1.2em;\n      }\n\n      .dialog__close-btn:hover {\n        cursor: pointer;\n      }\n    </style>\n    <div *ngIf=\"overlayVisible\" class=\"overlay\" [style.z-index]=\"layerPosition-1\"\n         [ngClass]=\"{'transparent':!backdrop}\"\n         (click)=\"dismiss($event)\">\n      <div [@dialog] *ngIf=\"visible\" [style.z-index]=\"layerPosition\" class=\"dialog\" [ngClass]=\"customClass\">\n        <ng-content></ng-content>\n        <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">\n          <img\n            src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDkgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNiAgICBDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNiAgICBjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\" />\n        </button>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgxSmartModalComponent.ctorParameters = function () { return [
        { type: NgxSmartModalService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    NgxSmartModalComponent.propDecorators = {
        "closable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "escapable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "dismissable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "identifier": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "customClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "backdrop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "force": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visibleChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onClose": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onCloseFinished": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onDismiss": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onDismissFinished": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onEscape": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onDataAdded": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onDataRemoved": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "escapeKeyboardEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:keyup', ['$event'],] },],
    };
    return NgxSmartModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmartModalModule = (function () {
    function NgxSmartModalModule() {
    }
    /**
     * Use in AppModule: new instance of NgxSmartModal.
     * @return {?}
     */
    NgxSmartModalModule.forRoot = /**
     * Use in AppModule: new instance of NgxSmartModal.
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [NgxSmartModalService]
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     * @return {?}
     */
    NgxSmartModalModule.forChild = /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [NgxSmartModalService]
        };
    };
    NgxSmartModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [NgxSmartModalComponent],
                    exports: [NgxSmartModalComponent],
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]]
                },] },
    ];
    /** @nocollapse */
    NgxSmartModalModule.ctorParameters = function () { return []; };
    return NgxSmartModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Public classes.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-smart-modal.js.map


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/catch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/operator/catch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_catch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
//# sourceMappingURL=catch.js.map


/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map