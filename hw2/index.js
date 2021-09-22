const {
    searchCity,
    searchAge,
    sortNames,
    searchAgeAndSex,
    add,
    printCities
} = require('./functions');
const processesOfInputAnArrayAndReturnsAnObject = require('./array');
let myArray = ['1', 1, 'a', { hello: 'world' }, 'qwe'];
const newStudent = {
    name: 'Josef Orlov',
    age: 49,
    sex: 'Male',
    isMarried: true,
    city: 'Wellington'
};
searchCity('Brest');
searchAge(21);
sortNames();
searchAgeAndSex(20, 'Male');
add(newStudent);
printCities();
console.log(processesOfInputAnArrayAndReturnsAnObject(myArray));