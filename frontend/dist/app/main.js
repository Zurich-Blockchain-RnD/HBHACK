(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_claimer_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/claimer/home/home.component */ "./src/app/pages/claimer/home/home.component.ts");
/* harmony import */ var _pages_claimer_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/claimer/select/select.component */ "./src/app/pages/claimer/select/select.component.ts");
/* harmony import */ var _pages_claimer_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/claimer/create-claim/create-claim.component */ "./src/app/pages/claimer/create-claim/create-claim.component.ts");
/* harmony import */ var _pages_claimer_share_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/claimer/share/share.component */ "./src/app/pages/claimer/share/share.component.ts");
/* harmony import */ var _pages_attendant_attendent_home_attendent_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/attendant/attendent-home/attendent-home.component */ "./src/app/pages/attendant/attendent-home/attendent-home.component.ts");
/* harmony import */ var _pages_attendant_attendant_verify_attendant_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/attendant/attendant-verify/attendant-verify.component */ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.ts");
/* harmony import */ var _pages_attendant_attendant_success_attendant_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/attendant/attendant-success/attendant-success.component */ "./src/app/pages/attendant/attendant-success/attendant-success.component.ts");










var routes = [
    {
        path: 'claimer/home',
        component: _pages_claimer_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'claimer/select',
        component: _pages_claimer_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"]
    },
    {
        path: 'claimer/createclaim',
        component: _pages_claimer_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_5__["CreateClaimComponent"]
    },
    {
        path: 'claimer/share',
        component: _pages_claimer_share_share_component__WEBPACK_IMPORTED_MODULE_6__["ShareComponent"]
    },
    {
        path: 'attendant/home',
        component: _pages_attendant_attendent_home_attendent_home_component__WEBPACK_IMPORTED_MODULE_7__["AttendentHomeComponent"]
    },
    {
        path: 'attendant/verify',
        component: _pages_attendant_attendant_verify_attendant_verify_component__WEBPACK_IMPORTED_MODULE_8__["AttendantVerifyComponent"]
    },
    {
        path: 'attendant/success',
        component: _pages_attendant_attendant_success_attendant_success_component__WEBPACK_IMPORTED_MODULE_9__["AttendantSuccessComponent"]
    },
    { path: '**', redirectTo: '/claimer/home', }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\n  mouse: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye1xuICBtb3VzZTogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-bootstrap';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_claimer_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/claimer/home/home.component */ "./src/app/pages/claimer/home/home.component.ts");
/* harmony import */ var _pages_claimer_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/claimer/select/select.component */ "./src/app/pages/claimer/select/select.component.ts");
/* harmony import */ var _pages_claimer_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/claimer/create-claim/create-claim.component */ "./src/app/pages/claimer/create-claim/create-claim.component.ts");
/* harmony import */ var _pages_attendant_attendent_home_attendent_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/attendant/attendent-home/attendent-home.component */ "./src/app/pages/attendant/attendent-home/attendent-home.component.ts");
/* harmony import */ var _pages_attendant_attendant_verify_attendant_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/attendant/attendant-verify/attendant-verify.component */ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.ts");
/* harmony import */ var _pages_attendant_attendant_success_attendant_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/attendant/attendant-success/attendant-success.component */ "./src/app/pages/attendant/attendant-success/attendant-success.component.ts");
/* harmony import */ var _pages_claimer_share_share_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/claimer/share/share.component */ "./src/app/pages/claimer/share/share.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_claimer_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _pages_claimer_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
                _pages_claimer_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_8__["CreateClaimComponent"],
                _pages_attendant_attendent_home_attendent_home_component__WEBPACK_IMPORTED_MODULE_9__["AttendentHomeComponent"],
                _pages_attendant_attendant_verify_attendant_verify_component__WEBPACK_IMPORTED_MODULE_10__["AttendantVerifyComponent"],
                _pages_attendant_attendant_success_attendant_success_component__WEBPACK_IMPORTED_MODULE_11__["AttendantSuccessComponent"],
                _pages_claimer_share_share_component__WEBPACK_IMPORTED_MODULE_12__["ShareComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/attendant/attendant-success/attendant-success.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-success/attendant-success.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0dGVuZGFudC9hdHRlbmRhbnQtc3VjY2Vzcy9hdHRlbmRhbnQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/attendant/attendant-success/attendant-success.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-success/attendant-success.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5 text-center\">\n  <img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n  <h2>Verifying Successful</h2>\n  <img src=\"assets/img/check.png\" width=\"250\" height=\"250\" style=\"margin-top: 20px;\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/attendant/attendant-success/attendant-success.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-success/attendant-success.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AttendantSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendantSuccessComponent", function() { return AttendantSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AttendantSuccessComponent = /** @class */ (function () {
    function AttendantSuccessComponent() {
    }
    AttendantSuccessComponent.prototype.ngOnInit = function () {
    };
    AttendantSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendant-success',
            template: __webpack_require__(/*! ./attendant-success.component.html */ "./src/app/pages/attendant/attendant-success/attendant-success.component.html"),
            styles: [__webpack_require__(/*! ./attendant-success.component.css */ "./src/app/pages/attendant/attendant-success/attendant-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttendantSuccessComponent);
    return AttendantSuccessComponent;
}());



/***/ }),

/***/ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-verify/attendant-verify.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0dGVuZGFudC9hdHRlbmRhbnQtdmVyaWZ5L2F0dGVuZGFudC12ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-verify/attendant-verify.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n    <h2>Selected Claim: {{claim}}</h2>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-md-11\">\n      <p>CA</p>\n      <p>Name</p>\n      <p>Mail</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" style=\"width:50%;\">Abort</button>\n      <button class=\"btn btn-primary\" style=\"width:50%;\">Verify</button>\n    </div>\n  </div>\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2019 SCRATCH</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/attendant/attendant-verify/attendant-verify.component.ts ***!
  \********************************************************************************/
/*! exports provided: AttendantVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendantVerifyComponent", function() { return AttendantVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AttendantVerifyComponent = /** @class */ (function () {
    function AttendantVerifyComponent() {
    }
    AttendantVerifyComponent.prototype.ngOnInit = function () {
    };
    AttendantVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendant-verify',
            template: __webpack_require__(/*! ./attendant-verify.component.html */ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.html"),
            styles: [__webpack_require__(/*! ./attendant-verify.component.css */ "./src/app/pages/attendant/attendant-verify/attendant-verify.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttendantVerifyComponent);
    return AttendantVerifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/attendant/attendent-home/attendent-home.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/attendant/attendent-home/attendent-home.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0dGVuZGFudC9hdHRlbmRlbnQtaG9tZS9hdHRlbmRlbnQtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/attendant/attendent-home/attendent-home.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/attendant/attendent-home/attendent-home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\"\n         height=\"72\">\n  </div>\n  <div style=\"display: flex; justify-content: center; align-items: center;\">\n    <input type=\"text\" placeholder=\"Search\" style=\"margin-bottom: 50px;\"/>\n    <button class=\"btn btn-primary\" style=\"margin-bottom:50px;\">Search</button>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <input type=\"checkbox\"/>\n          <div class=\"list-group-item d-flex lh-condensed verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Scholarship</h6>\n              <small class=\"text-muted\">Scholarship for the university</small>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <input type=\"checkbox\"/>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Drivers license</h6>\n              <small class=\"text-muted\">License for driving a car</small>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <input type=\"checkbox\"/>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Finance</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row icons\">\n    <div class=\"fa fa-trash icon\">\n    </div>\n    <div class=\"fa fa-check icon\">\n    </div>\n  </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2019 SCRATCH</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/attendant/attendent-home/attendent-home.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attendant/attendent-home/attendent-home.component.ts ***!
  \****************************************************************************/
/*! exports provided: AttendentHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendentHomeComponent", function() { return AttendentHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AttendentHomeComponent = /** @class */ (function () {
    function AttendentHomeComponent() {
    }
    AttendentHomeComponent.prototype.ngOnInit = function () {
    };
    AttendentHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendent-home',
            template: __webpack_require__(/*! ./attendent-home.component.html */ "./src/app/pages/attendant/attendent-home/attendent-home.component.html"),
            styles: [__webpack_require__(/*! ./attendent-home.component.css */ "./src/app/pages/attendant/attendent-home/attendent-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttendentHomeComponent);
    return AttendentHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/claimer/create-claim/create-claim.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/claimer/create-claim/create-claim.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xhaW1lci9jcmVhdGUtY2xhaW0vY3JlYXRlLWNsYWltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xhaW1lci9jcmVhdGUtY2xhaW0vY3JlYXRlLWNsYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/claimer/create-claim/create-claim.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/claimer/create-claim/create-claim.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-5 text-center\">\n      <h2>Create claim</h2>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-md-11\">\n      <p><input type=\"text\" placeholder=\"CA\"/></p>\n      <p><input type=\"text\" placeholder=\"Name\"/></p>\n      <p><input type=\"text\" placeholder=\"E-Mail\"/></p>\n  </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\">Create</button>\n    </div>\n  </div>\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2019 SCRATCH</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/claimer/create-claim/create-claim.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/claimer/create-claim/create-claim.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClaimComponent", function() { return CreateClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateClaimComponent = /** @class */ (function () {
    function CreateClaimComponent() {
    }
    CreateClaimComponent.prototype.ngOnInit = function () {
    };
    CreateClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-claim',
            template: __webpack_require__(/*! ./create-claim.component.html */ "./src/app/pages/claimer/create-claim/create-claim.component.html"),
            styles: [__webpack_require__(/*! ./create-claim.component.css */ "./src/app/pages/claimer/create-claim/create-claim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateClaimComponent);
    return CreateClaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/claimer/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/claimer/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verified{\n  background-color: limegreen;\n}\n\n.not-verified{\n  background-color: orange;\n}\n\n.icons{\n  margin-top: 40px;\n}\n\n.icon{\n  margin-left: 10px;\n}\n\n.icons a {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xhaW1lci9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYWltZXIvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcbn1cblxuLm5vdC12ZXJpZmllZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uaWNvbnN7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5pY29ue1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmljb25zIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/claimer/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/claimer/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <h2>Claims</h2>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed verified\"\n               style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Over 18</h6>\n              <small class=\"text-muted\">You are over 18</small>\n            </div>\n\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\"\n               style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Drivers license</h6>\n              <small class=\"text-muted\">License for driving a car</small>\n            </div>\n\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n          <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\"\n               style=\"width: 100%; margin: .2rem; border-radius: .25rem\">\n            <div>\n              <h6 class=\"my-0\">Finance</h6>\n              <small class=\"text-muted\">Check for enough money</small>\n            </div>\n\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row icons\" style=\"float: left;\">\n    <a style=\"margin: 6px\">\n      <div class=\"fa fa-trash icon\">\n      </div>\n    </a>\n  </div>\n\n  <div class=\"row icons\" style=\"float:right;\">\n    <a routerLink=\"/claimer/select\" style=\"margin: 6px\">\n      <div class=\"fa fa-plus icon\">\n      </div>\n    </a>\n    <a style=\"margin: 6px\">\n      <div class=\"fa fa-pencil icon\" style=\"height: 24px\">\n      </div>\n    </a>\n    <a routerLink=\"/claimer/select\" style=\"margin: 6px\">\n      <div class=\"fa fa-arrow-right icon\">\n      </div>\n    </a>\n  </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2019 SCRATCH</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/claimer/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/claimer/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/claimer/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/claimer/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/claimer/select/select.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/claimer/select/select.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons a {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xhaW1lci9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGFpbWVyL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ucyBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/claimer/select/select.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/claimer/select/select.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <h2>Claims</h2>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n         <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem; background-color: indianred;\">\n            <div>\n              <h6 class=\"my-0\">Scholarship</h6>\n              <small class=\"text-muted\">Scholarship for the university</small>\n            </div>\n\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n         <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem; background-color: indianred;\">\n            <div>\n              <h6 class=\"my-0\">Drivers license</h6>\n              <small class=\"text-muted\">License for driving a car</small>\n            </div>\n\n          </div>\n        </li>\n        <li class=\"list-group-item d-flex lh-condensed\" style=\"padding: 0; border: none;\">\n         <div style=\"\">\n            <input type=\"checkbox\" style=\"height: 100%\"/>\n          </div>\n          <div class=\"list-group-item d-flex lh-condensed not-verified\" style=\"width: 100%; margin: .2rem; border-radius: .25rem; background-color: indianred;\">\n            <div>\n              <h6 class=\"my-0\">Finance</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row icons\" style=\"float: left;\">\n    <a style=\"margin: 6px\">\n      <div class=\"fa fa-trash icon\">\n      </div>\n    </a>\n  </div>\n\n  <div class=\"row icons\" style=\"float:right;\">\n    <a routerLink=\"/claimer/createclaim\" style=\"margin: 6px\">\n      <div class=\"fa fa-plus icon\">\n      </div>\n    </a>\n    <a style=\"margin: 6px\">\n      <div class=\"fa fa-pencil icon\" style=\"height: 24px\">\n      </div>\n    </a>\n    <a style=\"margin: 6px\">\n      <div class=\"fa fa-arrow-right icon\">\n      </div>\n    </a>\n  </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2019 SCRATCH</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/claimer/select/select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/claimer/select/select.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/pages/claimer/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/pages/claimer/select/select.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/claimer/share/share.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/claimer/share/share.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYWltZXIvc2hhcmUvc2hhcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/claimer/share/share.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/claimer/share/share.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5 text-center\">\n  <img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\"\n       height=\"72\">\n  <h2>Share Credentials?</h2>\n  <p style=\"text-align: center;\">Credential Information</p>\n</div>\n<div class=\"row\">\n  <button class=\"btn btn-primary\" style=\"width: 40%; margin:auto\">Yes</button>\n  <button class=\"btn btn-primary\" style=\"width: 40%; margin:auto\">No</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/claimer/share/share.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/claimer/share/share.component.ts ***!
  \********************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/pages/claimer/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/pages/claimer/share/share.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luca/projects/privat/zurich-blockchain/scratch/scratch-frontend/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map