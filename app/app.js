'use strict';

// Declare app level module which depends on views, and components
angular.module("ReceptClient", [
    "ngRoute"
    //,
    //'myApp.view1',
    //'myApp.view2',
    //'myApp.version'
]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/main", {
            templateUrl: "/main/main.html"
        })
        .otherwise({redirectTo: "/main"});
}]);
