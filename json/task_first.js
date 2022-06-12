let user = {
    name: "Василий Иванович",
    age: 35
  };


const jsonUser = JSON.stringify(user)

const parseUser = JSON.parse(jsonUser)

console.log(parseUser)