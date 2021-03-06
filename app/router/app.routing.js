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
//路由链路
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../page/index');
var cloud_river_button_1 = require('../page/cloud-river.button');
var cloud_river_form_1 = require('../page/cloud-river.form');
var cloud_river_ads_1 = require('../page/cloud-river.ads');
var cloud_river_login_1 = require('../page/cloud-river.login');
var routes = [
    { path: '', redirectTo: '/cloud-river-login', pathMatch: 'full' },
    { path: 'cloud-river-login', component: cloud_river_login_1.CloudRiverLogin },
    {
        path: 'index', component: index_1.Index, children: [
            { path: 'buttons', component: cloud_river_button_1.CloudRiverButton },
            { path: 'cloud-river-form', component: cloud_river_form_1.CloudRiverForm },
            { path: 'cloud-river-ads', component: cloud_river_ads_1.CloudRiverAds }]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map