let f = debounce(alert, 1000);

function debounce(al,time) {
    let isRun = false
    
    return function(text) {
        if (isRun) return

        al.call(this,text)

        isRun = true

        setTimeout( ()=> isRun = false,time)
    }
}



f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)