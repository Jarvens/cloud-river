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
var core_1 = require('@angular/core');
var DATA = [
    { rank: 1, name: '张三', surname: 'Abdul-Jabbar', points: 38387 },
    { rank: 2, name: '李四', surname: 'Malone', points: 36928 },
    { rank: 3, name: '小明', surname: 'Bryant', points: 33643 },
    { rank: 4, name: '小花', surname: 'Jordan', points: 32292 },
    { rank: 5, name: '小刘', surname: 'Chamberlain', points: 31419 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.total = 120;
        this.data = DATA;
        this.showDate = true;
        this.monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        this.dayNamesShort = ['日', '一', '二', '三', '四', '五', '六'];
        // Initial sort
        this.sort = { key: 'rank', order: 'asc' };
        // Show loading overlay
        this.loading = false;
        // Toggle name column
        this.hideName = false;
        this.showAlert = false;
    }
    // Custom sort function
    AppComponent.prototype.onSort = function ($event) {
        var key = $event.key, order = $event.order;
        this.data.sort(function (a, b) {
            return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
        });
    };
    AppComponent.prototype.toggleData = function () {
        this.data = this.data ? null : DATA;
    };
    AppComponent.prototype.onRowClick = function ($event) {
        console.log('clicked row', $event.data);
    };
    AppComponent.prototype.gotoDate = function () {
        this.showDate = false;
        this.date = new Date(2005, 10, 9);
    };
    AppComponent.prototype.pagechange = function () {
    };
    AppComponent.prototype.show = function () {
        this.showAlert = true;
    };
    AppComponent.prototype.onClose = function (reason) {
        console.log("Alert closed by " + reason);
        this.showAlert = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            styleUrls: ['app/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map