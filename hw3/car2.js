/* Создайте модуль Car, у которой есть расход топлива и емкость бака.
У данного модуля есть 2 функции(публичных)- ехать на расстояние и заправка.
Функцию по заправке принимает модуль gasoline station. 
В этом модуле 1 функция-заправить бензином машину на какое-то кол-во топлива.
Отправьте машину из Могилева в Минск.Расстояние 200 км.
Количество станций от 4 до 8.Пользователь задает кол-во заправляемого топлива на каждой заправке.
Если мы не можем продолжать дальше путь(закончился бензин)- написать кол-во пройденного расстояния в км. */

function Car2(fuelPer100Km, maxLitresOfTank, fuelBalance) {
    this.consumption = fuelPer100Km || 10;
    this.tankCapacity = maxLitresOfTank || 50;
    this.fuelBalance = fuelBalance || 0;

    this.makeTankFull = function makeTankFull(litres) {
        this.fuelBalance += litres;

        if (this.fuelBalance > this.tankCapacity) {
            this.fuelBalance = this.tankCapacity;
            console.log("The full tank.");
        };
        return this.fuelBalance;
    };

    this.goDistance = function goDistance(km) {
        let spentLitres = this.consumption * km / 100; // how much litres for X km
        if (spentLitres <= this.fuelBalance) {
            this.fuelBalance -= spentLitres;
            return km;
        } else {
            let result = 100 * this.fuelBalance / this.consumption;
            this.fuelBalance = 0;
            return result;
        }
    }
}

function GasolineStation(car) {
    this.fillupCar = function(litres) {
        if (car.tankCapacity < litres) {
            car.fuelBalance = car.tankCapacity;
        }
        car.fuelBalance = litres + car.fuelBalance;
    }
}



const Ford = new Car2(10, 50, 10);
const GazProm = new GasolineStation(Ford);
const Belarusneft = new GasolineStation(Ford);
const Lukoil = new GasolineStation(Ford);
const A100 = new GasolineStation(Ford);


console.log(Ford);
console.log(GazProm.fillupCar(43));
console.log(Belarusneft.fillupCar(3));
console.log(Lukoil.fillupCar(5));
console.log(A100.fillupCar(9));



console.log(Ford.makeTankFull(GazProm, 10));

console.log(Ford.makeTankFull(10));
console.log(Ford.makeTankFull(10));
console.log(Ford.makeTankFull(10));
console.log(Ford.goDistance(12));




module.exports = { Car2 };