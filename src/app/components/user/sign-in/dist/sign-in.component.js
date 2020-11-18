"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(initForm, router, activatedRoute, apiService) {
        this.initForm = initForm;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.correct_login = true;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signInForm = this.initForm.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.signInForm.valueChanges.subscribe(function () { _this.login = _this.signInForm.value; });
    };
    SignInComponent.prototype.validar = function () {
        var _this = this;
        this.apiService.login_user(this.login).subscribe(function (resp) {
            _this.router.navigate(['profile']);
            localStorage.setItem('auth_token', resp.token);
        }, function (error) { _this.correct_login = false; _this.signInForm.setValue({ username: "", password: "" }); });
        ;
    };
    SignInComponent.prototype.logged = function () {
        return this.correct_login;
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.sass']
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
