/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../services/receptService.ts" />
/// <reference path="../../../services/alertService.ts" />


module app.controllers {

    interface IAddReceptScopeModel extends ng.IScope {
        addRecept(newRecept: any): void
    }

    class addReceptController {

        static $inject = ["$scope","$rootScope","receptService","alertService"];
        constructor(
                protected $scope: IAddReceptScopeModel,
                private $rootScope: ng.IRootScopeService,
                private receptService: app.services.receptService,
                private alertService: app.services.alertService) {

        };

        addReceptOnComplete = (response: any): void => {
        // se till att receptlistan laddas om genom broadcast
        this.$rootScope.$broadcast("reloadReceptList");
        //$rootScope.$broadcast("alertSuccess", { alertText: "Ditt recept har sparats." });
        this.alertService.showSuccess({ alertText: "Ditt recept har sparats." });
    };

        onError = (error: any): void => {
        // handle error
    };

        addRecept = (newRecept: any): void => {
            this.receptService.addRecept(newRecept)
                .then(this.addReceptOnComplete, this.onError);
        };

    }

    angular
        .module("ReceptClient")
        .controller("addReceptController", addReceptController);
}