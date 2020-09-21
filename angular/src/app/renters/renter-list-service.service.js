"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RenterListServiceService = void 0;
var core_1 = require("@angular/core");
var RenterListServiceService = /** @class */ (function () {
    function RenterListServiceService(httpClient) {
        this.httpClient = httpClient;
        this.renter = [];
    }
    RenterListServiceService.prototype.getRenterList = function () {
        return this.httpClient.get('http://localhost:3000/Renters');
    };
    RenterListServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RenterListServiceService);
    return RenterListServiceService;
}());
exports.RenterListServiceService = RenterListServiceService;
