function f(x) {
    alert(x);
  }
  
  function delay(fun,time) {
    return function(text) {
        setTimeout(() => fun.call(this,text),time)
    }
  }


  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс