(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.inputLunch='';
    $scope.checkTooMuch = function () {
      if ($scope.inputLunch.trim().length==0) {
        $scope.resultMessage='Please enter data first';
        $scope.hasResult=false;
        return;
        }
      $scope.hasResult=true;
      var menuCount=$scope.inputLunch.split(',').length;
      $scope.resultMessage=(menuCount)<=3?'Enjoy!':'Too much!';

    };
  };

})();
