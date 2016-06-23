/// <reference path="../../typings/angularjs/angular.d.ts" />

module app.services {

    export interface IReceptService {
        addRecept(receptDO: any) : ng.IPromise<any>,
        getReceptList() : ng.IPromise<any>
    }

    export class receptService implements IReceptService {

        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
            return;
        };

        addRecept(receptDO: any) : ng.IPromise<any> {
            return this.$http.post("http://localhost:3000/api/recept", receptDO)
                .then(function (response) {
                    return response.data;
                });
        };

        getReceptList() : ng.IPromise<any> {
            return this.$http.get("http://localhost:3000/api/receptList")
                .then(function (response) {
                    return response.data;
                });
        };

    }

    angular.module("app.services")
        .service("receptService", receptService);
}