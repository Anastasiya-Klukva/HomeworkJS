/* Посчитать факториал заданнаго числа(больше 12).
Факториал неотрицательного целого числа x,обозначенного через x !,
является произведением всех натуральных чисел, меньших или равных x.
Пример: 5! = 5 х 4 х 3 х 2 х 1 = 120; */

function factorial(x) {

    if (x === 0 || x >= Number.MAX_SAFE_INTEGER) {
        return 1;
    }
    return x * factorial(x - 1); //рекурсивная функция,factorial вызывает себя столько раз,сколько x не равно 0.

}
console.log("The factorial of 25 is " + factorial(25)); //25! = 1.5511210043330986e+25

//function factorial(n) {
//    if (n == 0 || n == 1) {
//        return 1;
//    }
//    return factorial(n - 1) * n;
//}
//console.log("The factorial of 25 is " + factorial(2)); // 25! = 1.5511210043330986e+25
//

module.exports = factorial;