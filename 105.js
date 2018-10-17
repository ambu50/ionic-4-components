(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/pmodhsil.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonToast, IonToastController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToastController", function() { return ToastController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-2994e275.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2994e275.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function iosEnterAnimation(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(e.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function iosLeaveAnimation(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function mdEnterAnimation(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","-100%","0%");break;case"middle":var a=Math.floor(e.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function mdLeaveAnimation(t,e,o){var n=new t,i=new t,s=e.querySelector(".toast-wrapper");switch(i.addElement(s),o){case"top":i.fromTo("translateY","0px","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}var Toast=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.present=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){switch(e.label){case 0:return[4,Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this,t,e,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,this.position)},t.prototype.onDidDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){var t=this.translucent?Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["k"])(this.mode,"toast-translucent"):{};return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},t,Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["k"])(this.mode,"toast"),Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:o},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"toast-container"},void 0!==this.message&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-button",{fill:"clear","ion-activatable":!0,class:"toast-button",onClick:function(){return e.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{--color:inherit;font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios{--background:var(--ion-background-color-step-50, #f2f2f2);--button-color:var(--ion-text-color-step-400, #666666);--color:var(--ion-text-color-step-150, #262626);font-size:14px}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;z-index:10}.toast-translucent-ios .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px}.toast-ios .toast-button{color:var(--button-color)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),ToastController=function(){function t(){}return t.prototype.create=function(t){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc,t,e,"ion-toast",o)},t.prototype.getTop=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return[2,Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=105.js.map