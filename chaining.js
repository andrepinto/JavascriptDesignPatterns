/*
  DESIGN PATTERN
  -- CHAINING --
*/

var ShoppingCart = function(initQty){

  var me = this;

  this.addItem = function(qty){
    initQty = initQty + qty;
    return me;
  };

  this.removeItem = function(qty){
    initQty = initQty - qty;
    return me;
  };

  this.count= function(callback){
    callback(initQty);
    return me;
  }
}

new ShoppingCart(0)
    .addItem(4)
    .removeItem(1)
    .count(function(result){
      console.log(result);
    })