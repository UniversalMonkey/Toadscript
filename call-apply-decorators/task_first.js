function work(a, b) {
    alert( a + b ); // произвольная функция или метод
  }
  
  function spy(func) {
    c.calls = [];

    function c (...args) {
        c.calls.push(args)
        return func.apply(this, args)
    }
    
    return c
}


  work = spy(work);
  work(1, 2); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }