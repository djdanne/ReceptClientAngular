/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../services/receptService.ts" />
/// <reference path="../../shared/menu/menu.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var receptController = (function () {
            function receptController($scope, $rootScope, receptService) {
                var _this = this;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.receptService = receptService;
                //var app = angular.module("ReceptClient");
                //
                //app.config(['$routeProvider', function ($routeProvider) {
                //    $routeProvider.when("/recept", {
                //        templateUrl: "recept/recept.html",
                //        controller: "receptController"
                //    });
                //}]);
                this.onReceptListSuccess = function (data) {
                    _this.$scope.receptList = data;
                };
                this.onError = function (error) {
                    // handle error
                };
                this.getReceptList = function () {
                    _this.receptService.getReceptList()
                        .then(_this.onReceptListSuccess, _this.onError);
                };
                this.showAddNewReceptSection = function () {
                    _this.pushRight.open();
                };
                this.addRecept = function () {
                    _this.receptService.addRecept(_this.$scope.newRecept)
                        .then(_this.getReceptList, _this.onError);
                };
                /**
                 * Push left instantiation and action.
                 */
                var menuOptions;
                menuOptions = {
                    wrapper: '#o-wrapper',
                    type: 'push-right',
                    maskId: '#c-mask'
                };
                this.pushRight = new app.shared.Menu(menuOptions);
                // Ladda om receptlistan om broadcast
                $rootScope.$on("reloadReceptList", this.getReceptList);
                this.getReceptList();
            }
            ;
            receptController.$inject = ["$scope", "$rootScope", "receptService"];
            return receptController;
        })();
        angular
            .module("ReceptClient")
            .controller("receptController", receptController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=receptController.js.map