// создать класс  либо объект JS
// отдельно импортировать

let processResult = function(calculator, result, callback) {
    if (typeof callback !== "undefined") {
        setTimeout(
            function() {
                callback(result);
            },
            1500,
            this
        );
    } else {
        return result;
    }
};

function Calculator() {
    eventEmitter.call(this);
}

Calculator.prototype.add = function(a, b, callback) {
    let result = a + b;
    return processResult(this, result, callback);
};

Calculator.prototype.substract = function(a, b, callback) {
    let result = a - b;
    return processResult(this, result, callback);
};

Calculator.prototype.multiply = function(a, b, callback) {
    let result = a * b;
    return processResult(this, result, callback);
};

Calculator.prototype.divide = function(a, b, callback) {
    let result = a / b;
    return processResult(this, result, callback);
};

console.log(Calculator.prototype.add(17, 12));
console.log(Calculator.prototype.divide(17, 22));
console.log(Calculator.prototype.multiply(17, 12));
console.log(Calculator.prototype.substract(17, 12));

module.exports = Calculator;