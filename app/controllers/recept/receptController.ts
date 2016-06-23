/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../services/receptService.ts" />
/// <reference path="../../shared/menu/menu.ts" />

module app.controllers {

    //interface IReceptControllerModel {
    //    showAddNewReceptSection(): void,
    //    addRecept(): void,
    //    onReceptListSuccess(data : any) : void,
    //    onError(error) : void,
    //    pushRight: any
    //}

    interface IReceptScopeModel extends ng.IScope {
        showAddNewReceptSection(): void,
        addRecept(): void,
        receptList: any[],
        newRecept: any
    }

    class receptController {
        private pushRight: any;
        //var app = angular.module("ReceptClient");
        //
        //app.config(['$routeProvider', function ($routeProvider) {
        //    $routeProvider.when("/recept", {
        //        templateUrl: "recept/recept.html",
        //        controller: "receptController"
        //    });
        //}]);

        onReceptListSuccess = (data : any) : void => {
            this.$scope.receptList = data;
        };

        onError = (error : any) : void => {
            // handle error
        };

        getReceptList = () : void => {
            this.receptService.getReceptList()
                .then(this.onReceptListSuccess, this.onError);
        };

        showAddNewReceptSection = () : void => {
            this.pushRight.open();
        }

        addRecept = () : void => {
            this.receptService.addRecept(this.$scope.newRecept)
                .then(this.getReceptList, this.onError);
        };

        static $inject = ["$scope","$rootScope","receptService"];
        constructor (
            protected $scope: IReceptScopeModel,
            protected $rootScope: ng.IRootScopeService,
            protected receptService: app.services.receptService) {

            /**
             * Push left instantiation and action.
             */
            var menuOptions: app.shared.IMenuOptions;
            menuOptions = {
                wrapper: '#o-wrapper',
                type: 'push-right',
                maskId: '#c-mask'
            };
            this.pushRight = new app.shared.Menu(menuOptions);

            // Ladda om receptlistan om broadcast
            $rootScope.$on("reloadReceptList", this.getReceptList);

            this.getReceptList();
        };


    }

    angular
        .module("ReceptClient")
        .controller("receptController", receptController);

}