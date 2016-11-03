(function () {
"use strict";

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject=['SignUpService'];
function SignUpController(SignUpService) {
  var ctrl=this;
  var dishValid=true;
  ctrl.firstRun=true;

  ctrl.submit=function () {
    SignUpService.signUpUser(ctrl.user).then(function (response) {
      ctrl.currentUser=response;
      ctrl.firstRun=false;
    });

  }
}

})();
