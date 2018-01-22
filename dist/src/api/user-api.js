"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@sakuraapi/api");
exports.SakuraApi = api_1.SakuraApi;
const user_1 = require("../models/user");
let UserApi = class UserApi extends api_1.SapiRoutableMixin() {
    getuserdata(req, res, next) {
        res.send({ status: 200, message: 'success the route' });
        next();
    }
};
__decorate([
    api_1.Route({
        method: 'post',
        path: '/userdata'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], UserApi.prototype, "getuserdata", null);
UserApi = __decorate([
    api_1.Routable({
        baseUrl: 'users',
        model: user_1.User
    })
], UserApi);
exports.UserApi = UserApi;
//# sourceMappingURL=user-api.js.map