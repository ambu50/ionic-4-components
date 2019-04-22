(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stepper-stepper-module"],{

/***/ "./projects/core/src/lib/expandable/expandable.component.html":
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/expandable/expandable.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"{value: isOpen ? 'open' : 'closed', params: timingFunction ? {time: timingFunction} : {}}\" (@listAnim.done)=\"onAnimationEnd($event)\"\n    style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./projects/core/src/lib/expandable/expandable.component.scss":
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/expandable/expandable.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./projects/core/src/lib/expandable/expandable.component.ts":
/*!******************************************************************!*\
  !*** ./projects/core/src/lib/expandable/expandable.component.ts ***!
  \******************************************************************/
/*! exports provided: FivExpandable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandable", function() { return FivExpandable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FivExpandable = /** @class */ (function () {
    function FivExpandable(change) {
        this.change = change;
        this.isOpen = false;
        this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FivExpandable.prototype.ngOnInit = function () {
    };
    FivExpandable.prototype.open = function () {
        this.fivWillOpen.emit(this);
        this.isOpen = true;
        this.change.detectChanges();
    };
    FivExpandable.prototype.toggle = function () {
        if (this.isOpen === false) {
            this.open();
        }
        else {
            this.close();
        }
    };
    FivExpandable.prototype.close = function (param) {
        this.param = param;
        this.fivWillClose.emit(this);
        this.isOpen = false;
        this.change.detectChanges();
    };
    FivExpandable.prototype.onAnimationEnd = function (event) {
        if (event.fromState === 'closed') {
            this.fivDidOpen.emit(this);
        }
        else if (event.fromState === 'open') {
            this.fivDidClose.emit({ expandable: this, param: this.param });
            this.param = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivExpandable.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FivExpandable.prototype, "timingFunction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivExpandable.prototype, "fivWillOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivExpandable.prototype, "fivDidOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivExpandable.prototype, "fivWillClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivExpandable.prototype, "fivDidClose", void 0);
    FivExpandable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-expandable',
            template: __webpack_require__(/*! ./expandable.component.html */ "./projects/core/src/lib/expandable/expandable.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 0.1, offset: 0.8 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1, offset: 1 }),
                        ]))
                    ], { params: { time: '270ms ease-out' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1, offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 0.1, offset: 0.2 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0, offset: 1 }),
                        ]))
                    ], { params: { time: '220ms ease-out' } }),
                ])
            ],
            styles: [__webpack_require__(/*! ./expandable.component.scss */ "./projects/core/src/lib/expandable/expandable.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FivExpandable);
    return FivExpandable;
}());



/***/ }),

/***/ "./projects/core/src/lib/stepper/step-content/step-content.component.html":
/*!********************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-content/step-content.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable [isOpen]=\"isOpen\" (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (fivClick)=\"click()\">\n    <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n      <div class=\"header-title\">{{title}}</div>\n      <div class=\"header-subtitle\">{{subtitle}}</div>\n    </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step-content/step-content.component.scss":
/*!********************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-content/step-content.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n\n.step-content {\n  padding-left: 44px;\n  padding-bottom: 24px;\n}\n\n.timeline {\n  width: 1px;\n  height: calc(100% - 32px);\n  position: absolute;\n  background: var(--fiv-color-timeline, var(--ion-color-medium));\n  left: 27.5px;\n  top: 36px;\n}\n\n.header-title {\n  color: var(--fiv-color-title, var(--ion-color-dark));\n}\n\n.header-subtitle {\n  color: var(--fiv-color-subtitle, var(--ion-color-medium));\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9wcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcC1jb250ZW50L3N0ZXAtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksb0RBQUE7QUNBSjs7QURHQTtFQUNJLHlEQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwLWNvbnRlbnQvc3RlcC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXAtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG5cbn1cblxuLnRpbWVsaW5lIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci10aW1lbGluZSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkpO1xuICAgIGxlZnQ6IDI3LjVweDtcbiAgICB0b3A6IDM2cHg7XG59XG5cbi5oZWFkZXItdGl0bGV7XG4gICAgY29sb3I6IHZhcigtLWZpdi1jb2xvci10aXRsZSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcbn1cblxuLmhlYWRlci1zdWJ0aXRsZXtcbiAgICBjb2xvcjogdmFyKC0tZml2LWNvbG9yLXN1YnRpdGxlLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RlcC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA0NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1maXYtY29sb3ItdGltZWxpbmUsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pKTtcbiAgbGVmdDogMjcuNXB4O1xuICB0b3A6IDM2cHg7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZml2LWNvbG9yLXRpdGxlLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xufVxuXG4uaGVhZGVyLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWZpdi1jb2xvci1zdWJ0aXRsZSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkpO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step-content/step-content.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-content/step-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: FivStepContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepContent", function() { return FivStepContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _step_header_step_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../step-header/step-header.component */ "./projects/core/src/lib/stepper/step-header/step-header.component.ts");
/* harmony import */ var _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expandable/expandable.component */ "./projects/core/src/lib/expandable/expandable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FivStepContent = /** @class */ (function () {
    function FivStepContent(change) {
        this.change = change;
        this.isLast = false;
        this.isOpen = false;
        this.title = '';
        this.subtitle = '';
        this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FivStepContent.prototype.ngOnInit = function () { };
    FivStepContent.prototype.open = function () {
        this.isOpen = true;
        this.change.detectChanges();
    };
    FivStepContent.prototype.close = function () {
        this.isOpen = false;
        this.change.detectChanges();
    };
    FivStepContent.prototype.completeAndClose = function () {
        this.close();
        this.complete();
    };
    FivStepContent.prototype.complete = function () {
        this.header.complete();
    };
    FivStepContent.prototype.reset = function () {
        this.header.reset();
    };
    FivStepContent.prototype.afterClose = function () {
        this.fivDidClose.emit(this);
    };
    FivStepContent.prototype.afterOpen = function () {
        this.fivDidOpen.emit(this);
    };
    FivStepContent.prototype.click = function () {
        this.fivClick.emit(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FivStepContent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FivStepContent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStepContent.prototype, "isLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStepContent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStepContent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStepContent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivStepContent.prototype, "fivDidOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivStepContent.prototype, "fivDidClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FivStepContent.prototype, "fivClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('self'),
        __metadata("design:type", _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__["FivExpandable"])
    ], FivStepContent.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('header'),
        __metadata("design:type", _step_header_step_header_component__WEBPACK_IMPORTED_MODULE_1__["FivStepHeader"])
    ], FivStepContent.prototype, "header", void 0);
    FivStepContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-step-content',
            template: __webpack_require__(/*! ./step-content.component.html */ "./projects/core/src/lib/stepper/step-content/step-content.component.html"),
            styles: [__webpack_require__(/*! ./step-content.component.scss */ "./projects/core/src/lib/stepper/step-content/step-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FivStepContent);
    return FivStepContent;
}());



/***/ }),

/***/ "./projects/core/src/lib/stepper/step-header/step-header.component.html":
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-header/step-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step-header/step-header.component.scss":
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-header/step-header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  height: 72px;\n  align-items: center;\n  position: relative;\n  padding-top: 8px;\n}\n\n.number-container {\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  position: absolute;\n  left: 16px;\n  background: var(--fiv-color-circle, var(--ion-color-primary));\n  color: var(--fiv-color-circle-color, var(--ion-color-light));\n}\n\n.number-container * {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) rotateZ(0deg);\n          transform: translate(-50%, -50%) rotateZ(0deg);\n}\n\n.step-content {\n  padding-left: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9wcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9zdGVwcGVyL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkRBQUE7RUFDQSw0REFBQTtBQ0NKOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNFUjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5udW1iZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maXYtY29sb3ItY2lyY2xlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xuICAgIGNvbG9yOiB2YXIoLS1maXYtY29sb3ItY2lyY2xlLWNvbG9yLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbiAgICAqIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cbn1cblxuLnN0ZXAtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NnB4XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ubnVtYmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLWNpcmNsZSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcbiAgY29sb3I6IHZhcigtLWZpdi1jb2xvci1jaXJjbGUtY29sb3IsIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xufVxuLm51bWJlci1jb250YWluZXIgKiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigwZGVnKTtcbn1cblxuLnN0ZXAtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogNTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step-header/step-header.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step-header/step-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: FivStepHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepHeader", function() { return FivStepHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FivStepHeader = /** @class */ (function () {
    function FivStepHeader() {
        this.iconState = 'normal';
    }
    FivStepHeader.prototype.ngOnInit = function () {
    };
    FivStepHeader.prototype.changeIconAndReveal = function (event, icon) {
        if (event.fromState === 'normal') {
            this.tempIcon = this.icon;
            this.icon = icon;
            this.iconState = 'normal';
        }
    };
    FivStepHeader.prototype.complete = function () {
        this.iconState = 'rotate';
    };
    FivStepHeader.prototype.reset = function () {
        this.icon = this.tempIcon;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FivStepHeader.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FivStepHeader.prototype, "icon", void 0);
    FivStepHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-step-header',
            template: __webpack_require__(/*! ./step-header.component.html */ "./projects/core/src/lib/stepper/step-header/step-header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotateAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => rotate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('rotate => normal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                ])
            ],
            styles: [__webpack_require__(/*! ./step-header.component.scss */ "./projects/core/src/lib/stepper/step-header/step-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FivStepHeader);
    return FivStepHeader;
}());



/***/ }),

/***/ "./projects/core/src/lib/stepper/step/step.component.html":
/*!****************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step/step.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step/step.component.scss":
/*!****************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step/step.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/core/src/lib/stepper/step/step.component.ts":
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/stepper/step/step.component.ts ***!
  \**************************************************************/
/*! exports provided: FivStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStep", function() { return FivStep; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FivStep = /** @class */ (function () {
    function FivStep() {
        this.isLast = false;
        this.open = false;
        this.title = '';
        this.subtitle = '';
    }
    FivStep.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FivStep.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FivStep.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStep.prototype, "isLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStep.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStep.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FivStep.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FivStep.prototype, "content", void 0);
    FivStep = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-step',
            template: __webpack_require__(/*! ./step.component.html */ "./projects/core/src/lib/stepper/step/step.component.html"),
            styles: [__webpack_require__(/*! ./step.component.scss */ "./projects/core/src/lib/stepper/step/step.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FivStep);
    return FivStep;
}());



/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.html":
/*!********************************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\"\n            [name]=\"content.icon\"></ion-icon>\n        </div>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n          <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>"

/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.scss":
/*!********************************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-container {\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background: var(--fiv-color-circle, var(--ion-color-primary));\n  color: var(--fiv-color-circle-color, var(--ion-color-light));\n}\n.number-container * {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) rotateZ(0deg);\n          transform: translate(-50%, -50%) rotateZ(0deg);\n}\nion-col {\n  text-align: center;\n  padding: 0;\n}\n.line {\n  width: calc(50% - 20px);\n  height: 1px;\n  position: absolute;\n  background: var(--fiv-color-timeline, var(--ion-color-medium));\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.left {\n  left: 0;\n}\n.right {\n  right: 0;\n}\n.header-title {\n  color: var(--fiv-color-title, var(--ion-color-dark));\n}\n.header-subtitle {\n  color: var(--fiv-color-subtitle, var(--ion-color-medium));\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9wcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwcGVyLWhvcml6b250YWwvc3RlcHBlci1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNkRBQUE7RUFDQSw0REFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0RBQUE7VUFBQSw4Q0FBQTtBQ0VSO0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0o7QURFQTtFQUNJLE9BQUE7QUNDSjtBREdBO0VBQ0ksUUFBQTtBQ0FKO0FER0E7RUFDSSxvREFBQTtBQ0FKO0FER0E7RUFDSSx5REFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcHBlci1ob3Jpem9udGFsL3N0ZXBwZXItaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maXYtY29sb3ItY2lyY2xlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xuICAgIGNvbG9yOiB2YXIoLS1maXYtY29sb3ItY2lyY2xlLWNvbG9yLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbiAgICAqIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDBkZWcpO1xuICAgIH1cbn1cblxuaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5saW5lIHtcbiAgICB3aWR0aDogIGNhbGMoNTAlIC0gMjBweCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpdi1jb2xvci10aW1lbGluZSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkpO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxlZnQge1xuICAgIGxlZnQ6IDA7XG59XG5cblxuLnJpZ2h0IHtcbiAgICByaWdodDogMDtcbn1cblxuLmhlYWRlci10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0tZml2LWNvbG9yLXRpdGxlLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xufVxuXG4uaGVhZGVyLXN1YnRpdGxle1xuICAgIGNvbG9yOiB2YXIoLS1maXYtY29sb3Itc3VidGl0bGUsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pKTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufSIsIi5udW1iZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLWNpcmNsZSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcbiAgY29sb3I6IHZhcigtLWZpdi1jb2xvci1jaXJjbGUtY29sb3IsIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xufVxuLm51bWJlci1jb250YWluZXIgKiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigwZGVnKTtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZml2LWNvbG9yLXRpbWVsaW5lLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSk7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLnJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZml2LWNvbG9yLXRpdGxlLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xufVxuXG4uaGVhZGVyLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWZpdi1jb2xvci1zdWJ0aXRsZSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkpO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FivStepperHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepperHorizontal", function() { return FivStepperHorizontal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FivStepperHorizontal = /** @class */ (function () {
    function FivStepperHorizontal() {
        this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FivStepperHorizontal.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
    };
    FivStepperHorizontal.prototype.close = function () {
        this.slides.slideTo(0);
    };
    FivStepperHorizontal.prototype.open = function (index) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(index);
        this.slides.lockSwipes(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FivStepperHorizontal.prototype, "contents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], FivStepperHorizontal.prototype, "slides", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FivStepperHorizontal.prototype, "fivSelect", void 0);
    FivStepperHorizontal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fiv-stepper-horizontal',
            template: __webpack_require__(/*! ./stepper-horizontal.component.html */ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotateAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('normal => rotate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('rotate => normal', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('125ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0', transform: 'translate(-50%, -50%) rotateZ(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '1', transform: 'translate(-50%, -50%) rotateZ(0deg)' }))
                ])
            ],
            styles: [__webpack_require__(/*! ./stepper-horizontal.component.scss */ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FivStepperHorizontal);
    return FivStepperHorizontal;
}());



/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper.component.html":
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content (fivDidClose)=\"fivClose.emit({index: i, param: param}); param = null;\" (fivClick)=\"fivClick.emit(i)\" *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\" [isOpen]=\"content.open\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>"

/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper.component.scss":
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9wcm9qZWN0cy9jb3JlL3NyYy9saWIvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/core/src/lib/stepper/stepper.component.ts":
/*!************************************************************!*\
  !*** ./projects/core/src/lib/stepper/stepper.component.ts ***!
  \************************************************************/
/*! exports provided: FivStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepper", function() { return FivStepper; });
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step/step.component */ "./projects/core/src/lib/stepper/step/step.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _step_content_step_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-content/step-content.component */ "./projects/core/src/lib/stepper/step-content/step-content.component.ts");
/* harmony import */ var _stepper_horizontal_stepper_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stepper-horizontal/stepper-horizontal.component */ "./projects/core/src/lib/stepper/stepper-horizontal/stepper-horizontal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FivStepper = /** @class */ (function () {
    function FivStepper() {
        this.mode = 'vertical';
        this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentIndex = 0;
    }
    FivStepper.prototype.ngOnInit = function () {
    };
    FivStepper.prototype.open = function (index) {
        if (this.mode === 'horizontal') {
            this.currentIndex = index;
            this.horizontal.open(index);
        }
        else {
            if (this.steps.toArray()[index]) {
                if (this.steps.toArray()[index].isOpen) {
                    this.close(index);
                }
                else {
                    this.currentIndex = index;
                    this.steps.toArray()[index].open();
                }
            }
            else {
            }
        }
    };
    FivStepper.prototype.openFirst = function () {
        this.open(0);
    };
    FivStepper.prototype.openLast = function () {
        this.open(this.steps.toArray().length - 1);
    };
    FivStepper.prototype.close = function (index, param) {
        this.param = param;
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.currentIndex = -1;
            this.steps.toArray()[index].close();
        }
    };
    FivStepper.prototype.closeFirst = function () {
        this.close(0);
    };
    FivStepper.prototype.closeLast = function () {
        this.close(this.steps.toArray().length - 1);
    };
    FivStepper.prototype.select = function (index) {
        if (index >= 0 && index < this.contents.length) {
            if (this.mode === 'vertical') {
                this.closeAll();
            }
            this.open(index);
        }
    };
    FivStepper.prototype.closeAll = function () {
        if (this.mode === 'horizontal') {
            this.currentIndex = 0;
            this.horizontal.close();
        }
        else {
            this.steps.forEach(function (step) {
                step.close();
            });
        }
    };
    FivStepper.prototype.next = function () {
        var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
        this.select(next);
    };
    FivStepper.prototype.previous = function () {
        var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
        this.select(next);
    };
    FivStepper.prototype.completeStep = function (index) {
        if (this.mode === 'horizontal') {
            // not yet impletented
        }
        else {
            this.steps.toArray()[index].complete();
        }
    };
    FivStepper.prototype.completeAndCloseStep = function (index) {
        if (this.mode === 'horizontal') {
            // not yet impletented
        }
        else {
            this.steps.toArray()[index].completeAndClose();
        }
    };
    FivStepper.prototype.reset = function (index) {
        if (this.mode === 'horizontal') {
            // not yet impletented
        }
        else {
            this.steps.toArray()[index].reset();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_step_step_component__WEBPACK_IMPORTED_MODULE_0__["FivStep"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FivStepper.prototype, "contents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_step_content_step_content_component__WEBPACK_IMPORTED_MODULE_2__["FivStepContent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FivStepper.prototype, "steps", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_stepper_horizontal_stepper_horizontal_component__WEBPACK_IMPORTED_MODULE_3__["FivStepperHorizontal"]),
        __metadata("design:type", _stepper_horizontal_stepper_horizontal_component__WEBPACK_IMPORTED_MODULE_3__["FivStepperHorizontal"])
    ], FivStepper.prototype, "horizontal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], FivStepper.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], FivStepper.prototype, "fivClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], FivStepper.prototype, "fivClose", void 0);
    FivStepper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fiv-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./projects/core/src/lib/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./projects/core/src/lib/stepper/stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FivStepper);
    return FivStepper;
}());



/***/ }),

/***/ "./src/app/pages/stepper/stepper.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.module.ts ***!
  \*************************************************/
/*! exports provided: StepperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPageModule", function() { return StepperPageModule; });
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper.page */ "./src/app/pages/stepper/stepper.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]
    }
];
var StepperPageModule = /** @class */ (function () {
    function StepperPageModule() {
    }
    StepperPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivStepperModule"]
            ],
            declarations: [_stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]]
        })
    ], StepperPageModule);
    return StepperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Stepper\"></app-header>\n\n<ion-content>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <app-example [typescript]=\"'assets/docs/snippets/stepper/ts.md'\" [css]=\"'assets/docs/snippets/stepper/css.md'\" [api]=\"'assets/docs/snippets/stepper/api.md'\" [html]=\"'assets/docs/snippets/stepper/html.md'\" [title]=\"'Stepper'\" [subtitle]=\"'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut\n          labore et dolore magna aliqua.'\">\n          <ion-item-divider>\n            <ion-label>Vertical Stepper</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <div class=\"wrapper\">\n            <fiv-stepper #stepperV [mode]=\"'vertical'\" (fivClick)=\"stepperV.open($event)\">\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.closeAll()\">\n                        Close\n                      </ion-button>\n                      <ion-button color=\"dark\" (click)=\"stepperV.reset(0)\">\n                        reset\n                      </ion-button>\n                      <ion-button color=\"secondary\" (click)=\"stepperV.completeStep(0)\">\n                        Complete\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(1)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.select(0)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(2)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepperV.select(1)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepperV.select(0)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n            </fiv-stepper>\n          </div>\n          <ion-item-divider>\n            <ion-label>Horizontal Stepper</ion-label>\n          </ion-item-divider>\n          <ion-item line=\"none\">\n            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n          </ion-item>\n          <div class=\"wrapper\">\n            <fiv-stepper #stepper [mode]=\"'horizontal'\">\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card class=\"card-horizontal\">\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"primary\" (click)=\"stepper.select(1)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepper.select(0)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepper.select(2)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n              <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n                    <ion-card-title>Awesome Title</ion-card-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                  </ion-card-content>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-button color=\"dark\" (click)=\"stepper.select(1)\">\n                        Previous\n                      </ion-button>\n                      <ion-button color=\"primary\" (click)=\"stepper.select(0)\">\n                        NEXT\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-card>\n              </fiv-step>\n            </fiv-stepper>\n          </div>\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  border-bottom: 0;\n}\n\nion-item {\n  --border-style: none;\n}\n\n.card-horizontal {\n  min-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXYvZml2ZXRocmVlL3dlYi1jb21wb25lbnRzL2ZpdmV0aHJlZS9zcmMvYXBwL3BhZ2VzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5jYXJkLWhvcml6b250YWx7XG4gICAgbWluLXdpZHRoOiA4MCU7XG59IiwiaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5jYXJkLWhvcml6b250YWwge1xuICBtaW4td2lkdGg6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.ts ***!
  \***********************************************/
/*! exports provided: StepperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPage", function() { return StepperPage; });
/* harmony import */ var _projects_core_src_lib_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../projects/core/src/lib/stepper/stepper.component */ "./projects/core/src/lib/stepper/stepper.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperPage = /** @class */ (function () {
    function StepperPage() {
    }
    StepperPage.prototype.ngOnInit = function () {
    };
    StepperPage.prototype.ionViewDidEnter = function () {
        // this.stepperV.openLast();
        // timer(1000).subscribe(() => this.stepperV.closeLast());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepperV'),
        __metadata("design:type", _projects_core_src_lib_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_0__["FivStepper"])
    ], StepperPage.prototype, "stepperV", void 0);
    StepperPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.page.html */ "./src/app/pages/stepper/stepper.page.html"),
            styles: [__webpack_require__(/*! ./stepper.page.scss */ "./src/app/pages/stepper/stepper.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepperPage);
    return StepperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-stepper-stepper-module.js.map