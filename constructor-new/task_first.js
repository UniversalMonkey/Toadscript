let example = {}

function A() { return example };
function B() { return example };

let a = new A;
let b = new B;

alert( a == b ); // true