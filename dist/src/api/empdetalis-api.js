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
const emp_model_1 = require("../models/emp-model");
let EmpdetalisApi = class EmpdetalisApi extends api_1.SapiRoutableMixin() {
    getempdetails(req, res, next) {
        res.send({ status: 200, message: "route successfully invoked and posted" });
        next();
    }
    getemplogdetails(req, res, next) {
        res.send({ status: 200, message: "route successfully invoked for empdetails logs" });
        next();
    }
};
__decorate([
    api_1.Route({
        method: 'post',
        path: '/empinfo',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], EmpdetalisApi.prototype, "getempdetails", null);
__decorate([
    api_1.Route({
        method: 'get',
        path: '/empinfologs',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], EmpdetalisApi.prototype, "getemplogdetails", null);
EmpdetalisApi = __decorate([
    api_1.Routable({
        baseUrl: 'employee',
        model: emp_model_1.EmpModel
    })
], EmpdetalisApi);
exports.EmpdetalisApi = EmpdetalisApi;
//# sourceMappingURL=empdetalis-api.js.map