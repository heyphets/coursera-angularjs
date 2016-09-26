(function () {
  'use strict'

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItemsDirective);

  NarrowItDownController.$inject=['MenuSearchService'];

  function NarrowItDownController(menuService) {

    var ctrl=this;
    ctrl.getMatchedMenuItems = function () {


      var promise=menuService.getMatchedMenuItems(ctrl.searchTerm)
      promise.then(function (result) {
      ctrl.found=result;
      if (ctrl.searchTerm==undefined||ctrl.searchTerm.length===0||ctrl.found.length===0) {
        ctrl.message='Nothing found';
        ctrl.found=[];
      } else {
        ctrl.message='';
      }
      });

    }
    ctrl.removeItem=function (index) {
      ctrl.found.splice(index,1);
    }
  } // end of NarrowItDownController

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      restrict: 'E',
      scope: {
        foundItems:'<',
        onRemove:'&'
      }
    }
    return ddo;

  }

  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http) {

    var service=this;

    service.getMatchedMenuItems = function (searchTerm) {
      var promise=$http.get('https://davids-restaurant.herokuapp.com/menu_items.json');
      return promise.then(function (result) {
        var allItems=result.data;
        var foundItems=[];

        for (var i=0;i < allItems.menu_items.length;i++) {
          if (allItems.menu_items[i].name.toLowerCase().indexOf(searchTerm)!==-1) {
            foundItems.push(allItems.menu_items[i]);

          }

        }
        return foundItems;
      })

    }

  } // end of MenuSearchService

})();
