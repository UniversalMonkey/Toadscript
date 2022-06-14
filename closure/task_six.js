function byField(f) {
       return (a,b) => a[f] > b[f] ? 1 : -1
}



let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

users.sort(byField('name'));
users.sort(byField('age'));



