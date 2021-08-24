/* Напишите функцию,которая принимает 1 параметр,и при 1 вызове она его запоминает,при втором-
умножает переданный параметр с тем, что передали в первый раз и тд .
Например: 
const mul3 = mul(3)
const mul15 = mul3(5)//15
mul15(2)//30; т.е. должна вернуться некая другая функция, которую мы можем вызвать с аргументом;
//строка 12: если mul == null,то присвоить значение,а если нет,то присвоить результат умножения;
*/


let getMultiple = (function() {
    let mul = 3;
    return function(x) {
        mul *= x;
        return mul;
    }
}());

console.log(getMultiple(1));
console.log(getMultiple(3));
console.log(getMultiple(9));


module.exports = getMultiple;