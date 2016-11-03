(function () {
  "use strict";
  angular.module('public')
  .service('SignUpService',SignUpService);

  SignUpService.$inject=['ApiPath','$http'];
  function SignUpService(ApiPath,$http) {
    var service=this;
    var lastUser;

    service.signUpUser=function (user) {

      var itemURL=ApiPath+'/menu_items/'+user.dish+'.json';
      var imageURL=ApiPath+'/images/'+user.dish+'.jpg';
      return $http.get(itemURL).then(function (response) {
        lastUser=user;
        lastUser.dishCorrect=true;
        lastUser.dishImageURL=imageURL;
        lastUser.dishName=response.data.name;
        return lastUser;
      })
    }

    service.lastUser = function () {
      return lastUser;
    }
  }
})();
