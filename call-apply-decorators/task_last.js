function f(a) {
    console.log(a)
  }
  

  function throttle(fun,time) {
    const tempArrayValue = []
    let isRun = false
    return function (text) {
        if (isRun){
            tempArrayValue.push(text);
            return
        } 
        fun.call(this, text)
        isRun = true
        setTimeout( ()=>{
            fun.call(this,tempArrayValue[tempArrayValue.length-1]); //[tempArrayValue.at(-1)] - undefined???
            isRun = false
        }, time)
    }
  }

  let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано