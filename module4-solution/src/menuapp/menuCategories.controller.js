(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['response'];
function MenuCategoriesController(response) {
  var ctrl = this;
  console.log("MenuCategoriesController items:");
  console.log(response.data);
  ctrl.items = response.data;

}

})();
