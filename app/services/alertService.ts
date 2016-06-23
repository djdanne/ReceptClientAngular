/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jquery.pnotify/jquery.pnotify.d.ts" />

module app.services
{

    export class alertService {

        constructor() {
            PNotify.prototype.options.styling = "bootstrap3";
        };

        showWarning = (args: any): void => {
            new PNotify(
                {
                    title: "Varning",
                    text: args.alertText
                }
            );
        };

        //var showSuccess = function (event, args) {
        showSuccess = (args: any): void => {
            new PNotify(
                {
                    title: "Meddelande",
                    text: args.alertText,
                    type: "success"
                }
            );
        };
    }

    angular.module("app.services")
        .service("alertService", alertService);

}