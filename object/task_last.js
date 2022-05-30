let menu = {
    width: 200,
    heiht: 300,
    title: "My menu",
};


multiplyNumeric(menu)

function multiplyNumeric(menu){
    for (key in menu) {
        if (typeof menu[key] === "number"){
            menu[key] *= 2
        }
    }
}

console.log(menu)