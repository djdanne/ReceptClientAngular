(function () {

    var receptService = function ($http) {
        var getReceptList = function () {
            return $http.get("http://localhost:3000/api/receptList")
                .then(function (response) {
                    return response.data;
                });
        };

        var addRecept = function (receptDO) {
            return $http.post("http://localhost:3000/api/recept", receptDO)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getReceptList: getReceptList,
            addRecept: addRecept
        };
    };

    var module = angular.module("ReceptClient");
    module.factory("receptService", receptService);
}());