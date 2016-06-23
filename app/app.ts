/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module app {

    // Declare app level module which depends on views, and components
    var appModule = angular.module("ReceptClient", [
        "ngRoute",
        "app.services"
    ]);

    //appModule.controller("receptController", ["$scope","$rootScope","receptService",
    //    ($scope, $rootScope, receptService) => new App.Controllers.receptController($scope,$rootScope,receptService)]);
    //
    //appModule.factory("receptService", ["$http",
    //    ($http) => new app.services.receptService($http)]);

    appModule.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/main", {
                templateUrl: "/main/main.html"
            })
            .when("/recept", {
                templateUrl: "controllers/recept/recept.html",
                controller: "receptController"
            })
            .otherwise({redirectTo: "/main"});
    }

}


