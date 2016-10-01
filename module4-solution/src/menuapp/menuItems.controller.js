(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['response'];
function MenuItemsController(response) {
  var ctrl = this;
  ctrl.items = response.data;

}

})();
