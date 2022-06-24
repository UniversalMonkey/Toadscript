let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
        get(target,prop){
            if(target[prop]){
                return Reflect.get(...arguments)
            }
            return new Error("Ошибка: такого свойства не существует")
        }
    });
  }
  
  user = wrap(user);
  
  alert(user.name); // John
  alert(user.age); // Ошибка: такого свойства не существует