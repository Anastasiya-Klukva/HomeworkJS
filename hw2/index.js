const { searchCity, searchAge, sortNames, searchAgeAndSex, add, printCities } = require('./functions');
const processArrayFunction = require('./array');
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
processArrayFunction(array);