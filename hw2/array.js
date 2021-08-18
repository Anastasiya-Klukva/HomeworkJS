/* Есть массив,который чередует строку с любым типом.Необходимо написать функцию,
которая обрабатывает входной массив и возвращает объект,ключами которого являются 
чередующиеся строки вне зависимости от размера на выходе из функции.
Если массив прерывается на ключе-его значение записывается как null.
-Добавить такую функцию в глобальный объект и в index.js использовать ее.
Пример входных данных:['1',1,'a',{hello:'world'},'qwe']
Пример выходных данных: {1:1,a:1,'a',{hello:'world'},qwe:null}
-Использовать методы массива(map,feruce,forEach)
-дополнительное свойство выходного объекта-размер самого объекта
-пример,output {1:1,a:{hello:'world'},qwe:null,length:3} */

let myArray = ['1', 1, , { hello: 'world' }, 'qwe'];

myArray.forEach(function(element) {
    console.log(element);

    if (myArray[2] === undefined) {
        console.log('myArray[2] is undefined');
    }
    myArray = ['1', 1, undefined, { hello: 'world' }, 'qwe'];

    array.forEach(function(element) {
        console.log(element);

    });

    module.exports = forEach;


});

/*
    let arr = [1, 2, 3, 'вася', '', true, false, undefined, NaN];
    let n = {
        number: [],
        string: [],
        undef: [],
        bool: [],
        nan: [],
    };
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
            n.number.push(arr[i]);
        } else if (typeof arr[i] == 'string') {
            n.string.push(arr[i]);
        } else if (typeof arr[i] == 'boolean') {
            n.bool.push(arr[i]);
        } else if (typeof arr[i] == 'undefined') {
            n.undef.push(arr[i]);
        } else if (isNaN(arr[i]) == true) {
            n.nan.push(arr[i]);
        }
    }
    console.log(n);*/