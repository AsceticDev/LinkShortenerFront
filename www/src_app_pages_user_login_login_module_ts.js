(self["webpackChunklinkshortener"] = self["webpackChunklinkshortener"] || []).push([["src_app_pages_user_login_login_module_ts"],{

/***/ 4661:
/*!**********************************************************!*\
  !*** ./src/app/pages/user/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 2413);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 6887:
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4661);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 2413);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 2413:
/*!************************************************!*\
  !*** ./src/app/pages/user/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6565);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 2509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);









let LoginPage = class LoginPage {
    constructor(formBuilder, userService, authService, alertController, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    login() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.authService.login(this.ionicForm.value).subscribe((success) => {
                console.log('Login was a success!', success);
                localStorage.setItem('access_token', success.access_token);
                localStorage.setItem('refresh_token', success.refresh_token);
                this.router.navigate(['/home']);
            }, (error) => {
                console.log('Login failed: ', error);
                this.presentLoginFailedAlert();
            });
        }
    }
    presentLoginFailedAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Login failed',
                message: 'Username or Password does not match.',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel'
                    },
                ]
            });
            alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);




let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://localhost:5000';
    }
    createUser(userForm) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        const auth_token = localStorage.getItem('access_token');
        headers = headers.set('Authorization', `Bearer ${auth_token}`);
        return this.http.post(this.baseUrl + '/api/v1/users', userForm, { headers });
    }
    getUser(userId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        const auth_token = localStorage.getItem('access_token');
        headers = headers.set('Authorization', `Bearer ${auth_token}`);
        return this.http.get(this.baseUrl + '/api/v1/users/' + userId, {
            headers
        });
    }
    getAllUsers(paginationUrl) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        const auth_token = localStorage.getItem('access_token');
        headers = headers.set('Authorization', `Bearer ${auth_token}`);
        const userCompany = localStorage.getItem('userCompany');
        return this.http.get(this.baseUrl + paginationUrl, { headers });
    }
    updateUser(id, postData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        const auth_token = localStorage.getItem('access_token');
        headers = headers.set('Authorization', `Bearer ${auth_token}`);
        return this.http.put(this.baseUrl + `/${id}`, postData, { headers });
    }
    deleteUser(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        const auth_token = localStorage.getItem('access_token');
        headers = headers.set('Authorization', `Bearer ${auth_token}`);
        return this.http.delete(this.baseUrl + `/${id}`, { headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 2509:
/*!**************************************************!*\
  !*** ./src/app/pages/user/login/login.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".contentContainerDiv {\n  background-image: url(\"https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-data.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loginCard {\n  background: #cac2c2;\n  border-radius: 5px;\n  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n}\n\n.cardTitle {\n  color: black;\n  font-size: 60px;\n  text-align: center;\n  padding: 20px 20px 0;\n  margin: 0;\n}\n\n.formDiv {\n  color: #ffff;\n  padding: 25px 25px 0;\n  margin: 20px 20px 0;\n  border-radius: 3px;\n}\n\n.ionItemUser {\n  display: flex;\n  margin-bottom: 2rem;\n}\n\n.forgotPasswordHref {\n  display: flex;\n  margin-top: 20px;\n  font-size: 20px;\n}\n\n.forgotPassDiv {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFHQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUdBO0VBR0MsbUJBQUE7RUFDQyxrQkFBQTtFQUNBLDBDQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQUpGOztBQVFBO0VBQ0UsWUFBQTtFQUNELG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxEOztBQVFBO0VBSUUsYUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFMRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudENvbnRhaW5lckRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5tYWNvYnNlcnZlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvd29ya2ZlYXR1cmVkLWRhdGEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmxvZ2luQ2FyZHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcblx0YmFja2dyb3VuZDpyZ2IoMjAyLCAxOTQsIDE5NCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMS41cHggMCAwIFxyXG4gIHJnYmEoMCwwLDAsMC4xKTtcclxuICB3aWR0aDo0NTBweDtcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmRUaXRsZSB7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFwibXVzZW8tc2xhYlwiOyAgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTo2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuXHJcbi5mb3JtRGl2e1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuXHRwYWRkaW5nOjI1cHggMjVweCAwO1xyXG5cdG1hcmdpbjogMjBweCAyMHB4IDA7XHRcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5pb25JdGVtVXNlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkSHJlZiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZvcmdvdFBhc3NEaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 6565:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <app-toolbar></app-toolbar> -->\n\n<ion-content>\n<div class=\"contentContainerDiv\">\n\n    <ion-card  class=\"loginCard\">\n      <ion-card-header>\n        <ion-card-title class=\"cardTitle\">Login</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ionCardContent\">\n\n\n       <div class=\"formDiv\">\n\n        <form class=\"form\" [formGroup]=\"ionicForm\" (ngSubmit)=\"login()\" novalidate>\n\n\n            <ion-item class=\"ionItemUser\" lines=\"none\">\n              <ion-input class=\"loginInput\" formControlName=\"username\" type=\"email\" autocomplete=\"username\" placeholder=\"Username\"></ion-input>\n              <ion-icon class=\"userIcon\" size=\"large\" name=\"person\" slot=\"start\"></ion-icon>\n            </ion-item>\n\n            <ion-item class=\"ionItemPassword\" lines=\"none\">\n              <ion-input class=\"loginInput\" formControlName=\"password\" type=\"password\" autocomplete=\"current-password\" placeholder=\"Password\"></ion-input>\n              <ion-icon class=\"passwordIcon\" size=\"large\" name=\"lock-closed\" slot=\"start\"></ion-icon>\n            </ion-item>\n\n            <ion-row>\n              <ion-col>\n                <ion-button class=\"submitButton\" type=\"submit\" size=\"large\" color=\"primary\" expand=\"block\">Submit</ion-button>\n              </ion-col>\n            </ion-row>\n\n          </form>\n\n          <div class=\"forgotPassDiv\">\n            <a href=\"#\" class=\"forgotPasswordHref\">Forgot Password?</a>\n          </div>\n\n        </div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_login_login_module_ts.js.map