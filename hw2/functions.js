/* Regarding the input array,write a functions:
- input city and prints all matched;
- input age and prints less or same age;
- filter students by alphabetic names and prints only names;
- filter female students by married status;
- input age and sex and prints matched;
- input object with a new student and add it to the start of array;
- print all unique cities;
Each bullet - new function. */

const students = [{
        name: 'Vasya Pupkin',
        age: 17,
        sex: 'Male',
        isMarried: false,
        city: 'Mogilev',
    },
    {
        name: 'Zoya Petrovna',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Mogilev',
    },
    {
        name: 'Petr Ivanov',
        age: 30,
        sex: 'Male',
        isMarried: true,
        city: 'Minsk',
    },
    {
        name: 'Vitali Ivanov',
        age: 19,
        sex: 'Male',
        isMarried: false,
        city: 'Vitebsk',
    },
    {
        name: 'Lavrenti Sakalov',
        age: 20,
        sex: 'Male',
        isMarried: true,
        city: 'Brest',
    },
    {
        name: 'Olga Sakalova',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Grodno',
    },
]



function searchCity(city) {
    let result = students.filter(item => item.city === city);
    console.log('Students in city ' + city, result);
}


function searchAge(age) {
    let result = students.filter(item => item.age <= age);
    console.log('Students less or equal ' + age, result);
}



function sortNames() {
    let result = students.map(item => item.name.split(' '), 0);
    result.sort();
    console.log('Students names sort by alphabetic', result);
}



function searchAgeAndSex(age, sex) {
    let result = students.filter(item => item.age === age && item.sex === sex);
    console.log('Students ' + age + 'years old and ' + sex, result);
}



function add(obj) {
    let result = [...students, obj];
    console.log(result)
}



function printCities() {
    let output = [];
    let result = students.map(item => item.city)
    for (let str of result) {
        if (!output.includes(str)) {
            output.push(str);
        }
    }
    console.log(output)
}



let newStudent = {
    name: 'Josef Orlov',
    age: 49,
    sex: 'Male',
    isMarried: true,
    city: 'Wellington',
}


module.exports = printCities, searchCity, add, searchAgeAndSex, sortNames, searchAge, newStudent;