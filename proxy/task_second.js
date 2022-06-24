let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop,){
        if (prop < 0) {
            prop = +prop + target.length;
          }
          return Reflect.get(...arguments)
    }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2