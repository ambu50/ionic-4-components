(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feature-discovery-feature-discovery-module"],{

/***/ "./src/app/pages/feature-discovery/feature-discovery.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/feature-discovery/feature-discovery.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeatureDirectoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDirectoryPageModule", function() { return FeatureDirectoryPageModule; });
/* harmony import */ var _feature_discovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-discovery.page */ "./src/app/pages/feature-discovery/feature-discovery.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _feature_discovery_page__WEBPACK_IMPORTED_MODULE_0__["FeatureDiscoveryPage"]
    }
];
var FeatureDirectoryPageModule = /** @class */ (function () {
    function FeatureDirectoryPageModule() {
    }
    FeatureDirectoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_feature_discovery_page__WEBPACK_IMPORTED_MODULE_0__["FeatureDiscoveryPage"]]
        })
    ], FeatureDirectoryPageModule);
    return FeatureDirectoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feature-discovery/feature-discovery.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/feature-discovery/feature-discovery.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Feature Discovery'\">\n  <ion-button (click)=\"pizza.open()\">\n    <fiv-icon #menu fivFeature slot=\"icon-only\" name=\"more\"></fiv-icon>\n  </ion-button>\n</app-header>\n\n<ion-content padding>\n\n  <ion-button (click)=\"fabFeature.show()\">\n    FAB FEATURE\n  </ion-button>\n  <ion-button (click)=\"buttonFeature.show()\">\n    BUTTON FEATURE\n  </ion-button>\n  <ion-button (click)=\"menuFeature.show()\">\n    MENU FEATURE\n  </ion-button>\n\n  <ion-fab vertical=\"bottom\" [edge]=\"true\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"log('FAB Clicked')\">\n      <fiv-icon #fab fivFeature name=\"add\"></fiv-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n      <ion-card-title>Awesome Title</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button shape=\"round\" #button fivFeature (click)=\"log('Cool Feature clicked')\">\n        Example Button\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-menu [swipeGesture]=\"false\" #pizza menuId=\"pizzaMenu\" side=\"end\" type=\"overlay\" (ionDidOpen)=\"ripple.ripple()\">\n  <ion-header>\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <fiv-ripple #ripple>\n      <ion-item>\n        <ion-label>Do this action!</ion-label>\n      </ion-item>\n    </fiv-ripple>\n\n  </ion-content>\n</ion-menu>"

/***/ }),

/***/ "./src/app/pages/feature-discovery/feature-discovery.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/feature-discovery/feature-discovery.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/feature-discovery/feature-discovery.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/feature-discovery/feature-discovery.page.ts ***!
  \*******************************************************************/
/*! exports provided: FeatureDiscoveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDiscoveryPage", function() { return FeatureDiscoveryPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FeatureDiscoveryPage = /** @class */ (function () {
    function FeatureDiscoveryPage(platform, toastController) {
        this.platform = platform;
        this.toastController = toastController;
    }
    FeatureDiscoveryPage.prototype.ngOnInit = function () {
    };
    FeatureDiscoveryPage.prototype.log = function (s) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: s,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fab', { read: _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"] }),
        __metadata("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"])
    ], FeatureDiscoveryPage.prototype, "fabFeature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('button', { read: _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"] }),
        __metadata("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"])
    ], FeatureDiscoveryPage.prototype, "buttonFeature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menu', { read: _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"] }),
        __metadata("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFeature"])
    ], FeatureDiscoveryPage.prototype, "menuFeature", void 0);
    FeatureDiscoveryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-discovery',
            template: __webpack_require__(/*! ./feature-discovery.page.html */ "./src/app/pages/feature-discovery/feature-discovery.page.html"),
            styles: [__webpack_require__(/*! ./feature-discovery.page.scss */ "./src/app/pages/feature-discovery/feature-discovery.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]])
    ], FeatureDiscoveryPage);
    return FeatureDiscoveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-feature-discovery-feature-discovery-module.js.map