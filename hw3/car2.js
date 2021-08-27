/* Создайте модуль Car, у которой есть расход топлива
и емкость бака.У данного модуля есть 
2 функции(публичных)- ехать на расстояние и заправка.
Функцию по заправке принимает модуль gasoline station. 
В этом модуле 1 функция-
заправить бензином машину на какое-то кол-во топлива.
Отправьте машину из Могилева в Минск.Расстояние 200 км.
Количество станций от 4 до 8.Пользователь задает кол-во 
заправляемого топлива на каждой заправке.
Если мы не можем продолжать дальше путь(закончился бензин)- 
написать кол-во пройденного расстояния в км.*/

function Car2(fuelPer100Km, maxLitresOfTank) {
    var consumption = fuelPer100Km || 10;
    var tankLitresSize = maxLitresOfTank || 50;
    var fuelBalance = 0;

    this.makeTankFull = function makeTankFull(gasolineStation) {
        if (fuelBalance < tankLitresSize) {
            fuelBalance = tankLitresSize;
            console.log("The car needs some fuel.")
            return true;
        } else {
            console.log("The tank of the car is full of fuel.");
            return false;
        }
    };

    this.goDistance = function goDistance(km) {
        var spentLitres = consumption * km / 100; // how much litres for X km
        if (spentLitres <= fuelBalance) {
            fuelBalance -= spentLitres;
            return km;
        } else {
            var result = 100 * fuelBalance / consumption;
            this.fuelBalance = 0;
            return result;
        }
    }
};

function GasolineStation() {

};

const GazProm = new GasolineStation();
const Belarusneft = new GasolineStation()
const Lukoil = new GasolineStation();
const A100 = new GasolineStation();

console.log(Ford = new Car2(10, 50));
console.log(Ford.makeTankFull(A100));

console.log(Ford.makeTankFull(Lukoil));
console.log(Ford.makeTankFull(Belarusneft));
console.log(Ford.makeTankFull(GazProm));
console.log(Ford.goDistance(200));



module.exports = { GasolineStation, Car2 };