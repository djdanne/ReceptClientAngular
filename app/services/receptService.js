(function () {

    var receptService = function ($http) {
        var getReceptList = function () {
            return $http.get("http://localhost:3000/api/recept/5681c89055ce00a415e232c7")
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getReceptList: getReceptList
        };
    };

    var module = angular.module("ReceptClient");
    module.factory("receptService", receptService);
}());