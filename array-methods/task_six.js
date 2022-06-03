function Calculator() {
    this.method = {
        '+': (param1, param2) => param1 + param2,
        '-': (param1, param2) => param1 - param2,
    };

    checkout = (array_params) =>{
        if(this.method[array_params[1]] &&
           isFinite(array_params[0]) &&
           isFinite(array_params[2])) {
               return true
           }
        return false
    };

    this.calculate = (expression) =>{
        decomp_expression = expression.split(' ')

        if (checkout(decomp_expression))
        {
            decomp_expression[0] = +decomp_expression[0]
            decomp_expression[2] = +decomp_expression[2]
    
            return this.method[decomp_expression[1]]
                        (decomp_expression[0],decomp_expression[2])
        }
    };
    this.addMethod = (name, func) =>{
        this.method[name] = func
    };
};

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8