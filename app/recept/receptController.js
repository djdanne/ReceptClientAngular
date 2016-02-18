(function () {

    var app = angular.module("ReceptClient");

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/recept", {
            templateUrl: "recept/recept.html",
            controller: "receptController"
        });
    }]);

    var receptController = function ($scope, $rootScope, receptService) {

        /**
         * Push left instantiation and action.
         */
        var pushRight = new Menu({
            wrapper: '#o-wrapper',
            type: 'push-right',
            maskId: '#c-mask'
        });

        $scope.showAddNewReceptSection = function () {
            pushRight.open();
        };

        var onReceptListSuccess = function (data) {
            $scope.receptList = data;
        };

        var onError = function(error){
            // handle error
        };

        var getReceptList = function () {
            receptService.getReceptList()
                .then(onReceptListSuccess, onError);
        };

        $scope.addRecept = function (){
            receptService.addRecept($scope.newRecept)
                .then(getReceptList, onError);
        };

        // Ladda om receptlistan om broadcast
        $rootScope.$on("reloadReceptList", getReceptList);

        getReceptList();
    };

    app.controller("receptController", receptController);
}());