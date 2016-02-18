(function () {

    var app = angular.module("ReceptClient");

    var addReceptController = function ($scope, $rootScope, receptService, alertService) {

        var addReceptOnComplete = function (response) {
            // se till att receptlistan laddas om genom broadcast
            $rootScope.$broadcast("reloadReceptList");
            //$rootScope.$broadcast("alertSuccess", { alertText: "Ditt recept har sparats." });
            alertService.showSuccess({ alertText: "Ditt recept har sparats." });
        };

        var onError = function (error) {
            // handle error
        };

        $scope.test = "test";
        $scope.addRecept = function (newRecept){
            receptService.addRecept(newRecept)
                .then(addReceptOnComplete, onError);
        };
    };

    app.controller("addReceptController", addReceptController);
}());