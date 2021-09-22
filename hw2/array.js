/* Есть массив,который чередует строку с любым типом.Необходимо написать функцию,
которая обрабатывает входной массив и возвращает объект,ключами которого являются 
чередующиеся строки вне зависимости от размера на выходе из функции.
Если массив прерывается на ключе-его значение записывается как null.
-Добавить такую функцию в глобальный объект и в index.js использовать ее.
Пример входных данных:['1',1,'a',{hello:'world'},'qwe']
Пример выходных данных: {1:1,a:1,'a',{hello:'world'},qwe:null}
-Использовать методы массива(map,reduce,forEach)
-дополнительное свойство выходного объекта-размер самого объекта
-пример,output {1:1,a:{hello:'world'},qwe:null,length:3} */


function processesOfInputAnArrayAndReturnsAnObject(array) {
    let resultObject = {};
    for (let i = 0; i < array.length; i += 2) {
        if (i % 2 === 0) {
            resultObject[array[i]] = array[i + 1];
        }
    }
    if (array.length % 2 !== 0) {
        console.log(resultObject[array[array.length - 1]]);
        resultObject[array[array.length - 1]] = null;
    }
    resultObject['length'] = Object.keys(resultObject).length;
    return resultObject;
}
//console.log(processesOfInputAnArrayAndReturnsAnObject(myArray));
//console.log(myArray[100]);


module.exports = processesOfInputAnArrayAndReturnsAnObject;