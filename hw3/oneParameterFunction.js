/* Напишите функцию,которая принимает 1 параметр,и при 1 вызове она его запоминает,при втором-
умножает переданный параметр с тем, что передали в первый раз и тд .
Например: 
const mul3 = mul(3)// не соответсвует первому примеру
const mul15 = mul3(5)//15
mul15(2)//30; т.е. должна вернуться некая другая функция, которую мы можем вызвать с аргументом */


var getMultiple = function() { // самовызывающаяся функция
    var mul = 6;
    return function(x) {
        mul *= x;
        return mul;
    }
};
var getMultiple = getMultiple();
console.log(getMultiple(1));
console.log(getMultiple(3));
console.log(getMultiple(9));


module.exports = getMultiple;