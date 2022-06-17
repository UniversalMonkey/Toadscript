function f(a, b) {
    alert( a + b );
  }


  Function.prototype.defer = function(time) {
    let f = this
    return function() {
        setTimeout( () => f.apply(this,arguments),time)
    }
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду