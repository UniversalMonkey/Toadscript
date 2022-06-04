function count(object) {
    return Object.keys(object).length
}


let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) ); // 2