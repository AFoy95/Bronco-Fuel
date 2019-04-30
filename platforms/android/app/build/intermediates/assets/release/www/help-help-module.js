(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]
                    }
                ])
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/help/help.page.html":
/*!*************************************!*\
  !*** ./src/app/help/help.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>\r\n      How to Use Bronco Fuel\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-img src=\"../../assets/img/bronco.png\"></ion-img>\r\n    <ion-card-content>\r\n      <ion-card-title>Home</ion-card-title>\r\n      <p>This is your launch site! Navigate from here to view food items, saved recipes, and campus resources.</p>\r\n      <p> </p>\r\n      <ion-card-title>Snacks and Food Items</ion-card-title>\r\n      <p>In the mood for something light? The food items tab allows you to view approved à la carte food items live from your Boise State nutrition staff. This list displays healthy snacks, as well as corresponding macros (carbohydrates, protein, fats).</p>\r\n      <p> </p>\r\n      <ion-card-title>Recipes</ion-card-title>\r\n      <p>When you're feeling hungrier, the Recipes tab provides a searchable list of healthy, nutritionist-approved recipes in easy-to-follow lists of both ingredients and steps. Additionally, you are able to bookmark your favorite recipes on the top right of any recipe's details screen.</p>\r\n      <p> </p>\r\n      <ion-card-title>Bookmarks</ion-card-title>\r\n      <p>The Bookmarks page is a hub for all the recipes you want to come back to. To remove unwanted recipes from this list, simply swipe the item to confirm its deletion.</p>\r\n      <p> </p>\r\n      <ion-card-title>Resources</ion-card-title>\r\n      <p>If you are in need of assistance from a personal trainer or nutritionist, feel free to utilize the Resources tab. This page provides a list of friendly Boise State staff that will work with you to set up either a training or nutrition appointment.</p>\r\n      <p> </p>\r\n      <ion-card-title>Settings</ion-card-title>\r\n      <p>To access information about your Bronco Fuel account, tap the Settings icon at the top right of the home page. This will allow you to view your account, as well as sign out and see details about the application.</p>\r\n      <p> </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.about-card {\n  padding: 15px;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./help.page.html */ "./src/app/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")]
        })
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);