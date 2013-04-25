/*
  DESIGN PATTERN
  -- OBSERVABLE --
*/

var Product = function(name, price, stock){

  var stockChanging = [], stockChanged=[];

  this.name = function(value){
    return name;
  };

  this.price = function(value){
    return price;
  };

  this.stock = function(value){

    if(value !== undefined && value !== stock){
        for (var i = 0; i < stockChanging.length; i++) {
          if(!stockChanging[i](this, value))
              return stock;
        }
        stock = value;
        for (var i = 0; i < stockChanged.length; i++) {
          stockChanged[i](this);
        }
    }
    return stock;
  };

  this.onStockChanged = function(callback){
    stockChanged.push(callback);
  };

  this.onStockChanging = function(callback){
    stockChanging.push(callback);
  };

}

var product = new Product("Phone", 200, 20);

product.onStockChanging(function(data, stock){
  if(stock < 4){
    console.log("Stock limit is 4 ")
    return false;
  }
  return true;
});

product.onStockChanged(function(data){
  console.log("Stock changed");
})

console.log(product.name()+" Stock:"+product.stock());
product.stock(2);
product.stock(6);


