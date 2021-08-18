/* Есть ферма по разведению кроликов,нужно высчитать,
сколько останется кроликов через заданное кол-во месяцев
и вывести кол-во кроликов каждый месяц при условии,что: 
-каждый четный месяц отнимается 50% кроликов,иначе,если кол-во кроликов больше 100,то отнимай 20%
-в конце каждого месяца добавляется 20 кроликов
-изначально кроликов 200.Кол-во месяцев 6(январь первый); */


const monthCount = 6;
let rabbitCount = 200;


function calculateRabbitCount() {
    for (let i = 1; i <= monthCount; i++) {
        if (i % 2 === 0 && rabbitCount > 100) {
            rabbitCount = Math.floor(rabbitCount - rabbitCount / 5);
        }
        if (i % 2 === 0 && rabbitCount <= 100) {
            rabbitCount = Math.floor(rabbitCount / 2);
        }
        rabbitCount = rabbitCount + 20;
        console.log(i + ' month ' + rabbitCount);
    }
}


module.exports = calculateRabbitCount;