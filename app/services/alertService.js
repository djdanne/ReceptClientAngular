(function () {

    var alertService = function () {

        PNotify.prototype.options.styling = "bootstrap3";

        var showWarning = function (args) {
            new PNotify(
                {
                    title: "Varning",
                    text: args.alertText
                }
            );
        };

        //var showSuccess = function (event, args) {
        var showSuccess = function (args) {
          new PNotify(
              {
                  title: "Meddelande",
                  text: args.alertText,
                  type: "success"
              }
          );
        };
        
        //$rootScope.$on("alertWarning", showWarning);
        //$rootScope.$on("alertSuccess", showSuccess);

        return {
            showSuccess: showSuccess,
            showWarning: showWarning
        };
    };

    var module = angular.module("ReceptClient");
    module.factory("alertService", alertService);
}());