var takeout = {
  order: function(orderID, callback) {
    if (orderID < 0) {
      callback(new Error(orderID + " is not a valid order ID"));
    }

    var MAX_TIME = 1000;
    var waitTime = Math.floor(Math.random() * (MAX_TIME+1));
    setTimeout(function() {
      callback(null, orderID, waitTime);
    }, waitTime);
  }
};

var handleResult = function(err, result, time) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Order #" + result + " is ready (" + time + "ms)");
  }
};

takeout.order(-1, handleResult);

console.log("------")