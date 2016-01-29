(function () {

    var app = angular.module("ReceptClient");

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/recept", {
            templateUrl: "recept/recept.html",
            controller: "receptController"
        });
    }]);

    var receptController = function ($scope, receptService) {
        $scope.test = "Hej hej 2";

        var onReceptListSuccess = function (data) {
            $scope.receptList = data;
        };

        var onError = function(error){
            // handle error
        };

        receptService.getReceptList()
            .then(onReceptListSuccess, onError);
    };

    app.controller("receptController", receptController);
}());