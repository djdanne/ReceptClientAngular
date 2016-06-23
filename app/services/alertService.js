/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jquery.pnotify/jquery.pnotify.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        var alertService = (function () {
            function alertService() {
                this.showWarning = function (args) {
                    new PNotify({
                        title: "Varning",
                        text: args.alertText
                    });
                };
                //var showSuccess = function (event, args) {
                this.showSuccess = function (args) {
                    new PNotify({
                        title: "Meddelande",
                        text: args.alertText,
                        type: "success"
                    });
                };
                PNotify.prototype.options.styling = "bootstrap3";
            }
            ;
            return alertService;
        })();
        services.alertService = alertService;
        angular.module("app.services")
            .service("alertService", alertService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=alertService.js.map