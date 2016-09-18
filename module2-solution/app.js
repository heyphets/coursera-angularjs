(function () {
  'use strict'

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingController',BuyController)
  .controller('AlreadyBoughtShoppingController',BoughtController)
  .service('ShoppingListCheckOffService',ShoppingService);



  BuyController.$inject = ['ShoppingListCheckOffService'];
  function BuyController(shoppingService){
    var ctrl = this;

    ctrl.items=shoppingService.buyItems();
    ctrl.checkOff = function (itemIndex) {
      shoppingService.checkOff(itemIndex);
    };
  };

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(shoppingService){
    var ctrl = this;

    ctrl.items=shoppingService.boughtItems();

  };

  function ShoppingService() {
    var service=this;
    var buyArr=[{name: "cookies", quantity: 50}, {name: "milk",quantity: 10},
                {name: "soda",quantity: 5},{name: "salad",quantity: 7},
                {name: "paper plates",quantity: 15}];

    var boughtArr=[];

    service.buyItems = function () {
        return buyArr;
    };

    service.boughtItems = function () {
        return boughtArr;
    };

    service.checkOff = function (itemIndex) {
        boughtArr.push(buyArr[itemIndex]);
        buyArr.splice(itemIndex,1);

    };
  };


})();
