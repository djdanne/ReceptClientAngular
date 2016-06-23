/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../services/receptService.ts" />
/// <reference path="../../../services/alertService.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var addReceptController = (function () {
            function addReceptController($scope, $rootScope, receptService, alertService) {
                var _this = this;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.receptService = receptService;
                this.alertService = alertService;
                this.addReceptOnComplete = function (response) {
                    // se till att receptlistan laddas om genom broadcast
                    _this.$rootScope.$broadcast("reloadReceptList");
                    //$rootScope.$broadcast("alertSuccess", { alertText: "Ditt recept har sparats." });
                    _this.alertService.showSuccess({ alertText: "Ditt recept har sparats." });
                };
                this.onError = function (error) {
                    // handle error
                };
                this.addRecept = function (newRecept) {
                    _this.receptService.addRecept(newRecept)
                        .then(_this.addReceptOnComplete, _this.onError);
                };
            }
            ;
            addReceptController.$inject = ["$scope", "$rootScope", "receptService", "alertService"];
            return addReceptController;
        })();
        angular
            .module("ReceptClient")
            .controller("addReceptController", addReceptController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=addReceptController.js.map