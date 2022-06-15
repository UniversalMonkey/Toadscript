function makeCounter() {

    let count = 0

    counter.set = function (setCount) {
        return count = setCount
    }

    counter.decrease = function() {
        return count--
    }

    function counter() {
        return count++
    }

    return counter
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)