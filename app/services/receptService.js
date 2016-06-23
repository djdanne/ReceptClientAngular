/// <reference path="../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        var receptService = (function () {
            function receptService($http) {
                this.$http = $http;
                return;
            }
            ;
            receptService.prototype.addRecept = function (receptDO) {
                return this.$http.post("http://localhost:3000/api/recept", receptDO)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            receptService.prototype.getReceptList = function () {
                return this.$http.get("http://localhost:3000/api/receptList")
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            receptService.$inject = ["$http"];
            return receptService;
        })();
        services.receptService = receptService;
        angular.module("app.services")
            .service("receptService", receptService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=receptService.js.map