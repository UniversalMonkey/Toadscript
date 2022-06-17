/* Success
function Example() {}

let obj = new Example()

let obj2 = new obj.constructor();
*/

/* Error

function Example() {}

Example.prototype = {}

let obj = new Example()

let obj2 = new obj.constructor();

*/

