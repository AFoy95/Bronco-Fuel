(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmarkedlist-bookmarkedlist-module"],{

/***/ "./src/app/bookmarkedlist/bookmarkedlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/bookmarkedlist/bookmarkedlist.module.ts ***!
  \*********************************************************/
/*! exports provided: BookmarkedListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkedListPageModule", function() { return BookmarkedListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookmarkedlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmarkedlist.page */ "./src/app/bookmarkedlist/bookmarkedlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BookmarkedListPageModule = /** @class */ (function () {
    function BookmarkedListPageModule() {
    }
    BookmarkedListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _bookmarkedlist_page__WEBPACK_IMPORTED_MODULE_5__["BookmarkedListPage"]
                    }
                ])
            ],
            declarations: [_bookmarkedlist_page__WEBPACK_IMPORTED_MODULE_5__["BookmarkedListPage"]]
        })
    ], BookmarkedListPageModule);
    return BookmarkedListPageModule;
}());



/***/ }),

/***/ "./src/app/bookmarkedlist/bookmarkedlist.page.html":
/*!*********************************************************!*\
  !*** ./src/app/bookmarkedlist/bookmarkedlist.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Bookmarked Recipes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-list *ngFor=\"let recipe of recipes\">\r\n      <ion-item-sliding>\r\n        <ion-item (click)=\"gotoDetail(recipe.absIdx)\" detail>\r\n          {{recipe.title}}\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"removeBookmarkClick(recipe)\">Remove</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/bookmarkedlist/bookmarkedlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/bookmarkedlist/bookmarkedlist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight {\n  background-color: #DDDDDD; }\n\n#button_color {\n  color: #0033A0; }\n\n.ellipsis {\n  white-space: nowrap;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/bookmarkedlist/bookmarkedlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/bookmarkedlist/bookmarkedlist.page.ts ***!
  \*******************************************************/
/*! exports provided: BookmarkedListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkedListPage", function() { return BookmarkedListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipelist_recipelist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipelist/recipelist.page */ "./src/app/recipelist/recipelist.page.ts");
/* harmony import */ var _recipeServices_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipeServices/recipe.service */ "./src/app/recipeServices/recipe.service.ts");
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






var BookmarkedListPage = /** @class */ (function () {
    function BookmarkedListPage(firebaseAuth, navCtrl, toast, recipeService, alertController) {
        this.firebaseAuth = firebaseAuth;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.recipeService = recipeService;
        this.alertController = alertController;
        this.recipes = [];
        this.items = [];
        this.recipeList = new _recipelist_recipelist_page__WEBPACK_IMPORTED_MODULE_3__["RecipeListPage"](recipeService, navCtrl, firebaseAuth);
        var recipe = JSON.parse(localStorage.getItem(firebaseAuth.user.email));
        if (recipe != null) {
            this.recipes = recipe;
        }
        // localStorage.removeItem(this.firebaseAuth.user.email);
    }
    BookmarkedListPage.prototype.removeBookmarkClick = function (list) {
        this.displayBookmarkAlert(list);
    };
    BookmarkedListPage.prototype.removeBookMark = function (list) {
        var flag = false;
        this.recipes = JSON.parse(localStorage.getItem(this.firebaseAuth.user.email));
        if (this.recipes !== null) {
            for (var i = 0; i < this.recipes.length && flag === false; i++) {
                if (this.recipes[i].title === list.title) {
                    this.recipes.splice(i, 1);
                    flag = true;
                }
            }
            localStorage.setItem(this.firebaseAuth.user.email, JSON.stringify(this.recipes));
        }
    };
    BookmarkedListPage.prototype.ngOnInit = function () { };
    BookmarkedListPage.prototype.gotoDetail = function (index) {
        this.recipeList.listItemClick(index);
    };
    BookmarkedListPage.prototype.displayBookmarkAlert = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var newAlert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Remove Bookmark',
                            subHeader: '',
                            message: 'Are you sure?',
                            buttons: [
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.removeBookMark(list);
                                    }
                                },
                                {
                                    text: 'Cancel'
                                }
                            ]
                        })];
                    case 1:
                        newAlert = _a.sent();
                        return [4 /*yield*/, newAlert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookmarkedListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./bookmarkedlist.page.html */ "./src/app/bookmarkedlist/bookmarkedlist.page.html"),
            styles: [__webpack_require__(/*! ./bookmarkedlist.page.scss */ "./src/app/bookmarkedlist/bookmarkedlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _recipeServices_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], BookmarkedListPage);
    return BookmarkedListPage;
}());



/***/ })

}]);