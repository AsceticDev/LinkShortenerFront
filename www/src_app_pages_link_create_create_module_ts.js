(self["webpackChunklinkshortener"] = self["webpackChunklinkshortener"] || []).push([["src_app_pages_link_create_create_module_ts"],{

/***/ 8248:
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "InvalidTokenError": () => (/* binding */ n)
/* harmony export */ });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ }),

/***/ 2600:
/*!************************************************************!*\
  !*** ./src/app/pages/link/create/create-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageRoutingModule": () => (/* binding */ CreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page */ 5325);




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_0__.CreatePage
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ 9357:
/*!****************************************************!*\
  !*** ./src/app/pages/link/create/create.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageModule": () => (/* binding */ CreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-routing.module */ 2600);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page */ 5325);







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _create_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePageRoutingModule
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_1__.CreatePage]
    })
], CreatePageModule);



/***/ }),

/***/ 5325:
/*!**************************************************!*\
  !*** ./src/app/pages/link/create/create.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePage": () => (/* binding */ CreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create.page.html */ 7859);
/* harmony import */ var _create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page.scss */ 7081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/link.service */ 9581);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ 8248);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);









let CreatePage = class CreatePage {
    constructor(formBuilder, linkService, router, authService) {
        this.formBuilder = formBuilder;
        this.linkService = linkService;
        this.router = router;
        this.authService = authService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            linkHash: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    createShortenedLink() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            const access_token = this.authService.getJwtToken();
            const decoded_token = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.default)(access_token);
            console.log('Decoded Token: ', decoded_token);
            this.ionicForm.value.user_id = decoded_token.sub;
            this.linkService.createShortenedLink(this.ionicForm.value).subscribe(res => console.log('HTTP response', res), err => console.log('HTTP Error', err), () => console.log('HTTP request completed.'));
        }
    }
};
CreatePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_link_service__WEBPACK_IMPORTED_MODULE_2__.LinkService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService }
];
CreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create',
        template: _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreatePage);



/***/ }),

/***/ 7081:
/*!****************************************************!*\
  !*** ./src/app/pages/link/create/create.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7859:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/link/create/create.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"contentContainerDiv\">\n\n    <ion-card class=\"createShortUrlCard\">\n      <ion-card-header>\n        <ion-card-title class=\"createShortUrlCardTitle\">Please Enter URL</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"createShortUrlCardContent\">\n        <div class=\"formDiv\">\n         \n          <form class=\"form\" [formGroup]=\"ionicForm\" (ngSubmit)=\"createShortenedLink()\" novalidate>\n            <ion-input class=\"linkInput\" formControlName=\"linkHash\" type=\"url\"></ion-input>\n            <ion-icon class=\"userIcon\" size=\"large\" name=\"person\" slot=\"start\"></ion-icon>\n            <ion-button class=\"submitButton\" type=\"submit\" size=\"large\" color=\"primary\">SHORTEN</ion-button>\n          </form>\n          \n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"wantMoreCard\">\n      <ion-card-header>\n        <ion-card-title class=\"wantMoreCardTitle\"> Want More? Try Our Apps! </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content class=\"wantMoreCardContent\">\n\n        <div class=\"wantMoreCardContentDiv\">\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_link_create_create_module_ts.js.map