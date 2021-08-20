/* Есть ферма по разведению кроликов,нужно высчитать,
сколько останется кроликов через заданное кол-во месяцев
и вывести кол-во кроликов каждый месяц при условии,что: 
-каждый четный месяц отнимается 50% кроликов,иначе,если кол-во кроликов больше 100,то отнимай 20%
-в конце каждого месяца добавляется 20 кроликов
-изначально кроликов 200.Кол-во месяцев 6(январь первый); */




function calculateRabbitCount(months) {
    let rabbitCount = 200;
    let currentMonth = 1;
    for (let i = 0; i < months; i++, currentMonth++) {
        if (currentMonth % 2 === 0) {
            rabbitCount = Math.floor(rabbitCount / 2);
        } else if (rabbitCount > 100) {
            rabbitCount = rabbitCount - Math.floor(rabbitCount / 5);
        }
        rabbitCount += 20;
    }
    return rabbitCount;
}
console.log('1 month ' + calculateRabbitCount(1) + ' rabbit count');
console.log('2 month ' + calculateRabbitCount(2) + ' rabbit count');
console.log('3 month ' + calculateRabbitCount(3) + ' rabbit count');
console.log('4 month ' + calculateRabbitCount(4) + ' rabbit count');
console.log('5 month ' + calculateRabbitCount(5) + ' rabbit count');
console.log('6 month ' + calculateRabbitCount(6) + ' rabbit count');


module.exports = calculateRabbitCount;