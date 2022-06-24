function makeObservable(target) {

    target.call_function = []

    target.observe = func => target.call_function.push(func)
    
    return new Proxy(target, {
        set(target,prop,value){
            const success = Reflect.set(...arguments)
            if(success){
                target.call_function[0](prop,value)
                return true
            }
            return false
        }
    })
}
  
  let user = {};

  user = makeObservable(user);

  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John








