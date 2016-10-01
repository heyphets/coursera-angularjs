(function () {
'use strict'

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];

function MenuDataService($http) {

  var service=this;

  service.getAllCategories = function () {
    var promise=$http.get('https://davids-restaurant.herokuapp.com/categories.json');

    return promise;

  }
  service.getItemsForCategory = function (shortCategoryName) {
    var promise=$http.get('https://davids-restaurant.herokuapp.com/menu_items.json',{params:{'category':shortCategoryName}});
    return promise;

  }
}
})();
