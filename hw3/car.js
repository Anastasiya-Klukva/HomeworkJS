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
написать кол-во пройденного расстояния в км. КОММЕНТЫ ОТ МЕНТОРА:
1. если у нас 1 литр и мы хотим заправить авто 10 литрами то получается что после заправки авто будет 10 литров? Кажется должно быть +=
2. asolineStation пустая, тогда зачем функция эта?
*/


function Car(fuelConsumption, tankCapacity) {
    thiis.fuelConsumption = fuelConsumption;
    this.tankCapacity = tankCapacity;
    let litresOfFuel = this.litresOfFuel || 10;
}

this.goRoad = function(fuelConsumption) {
    this.fuelConsumption.push(fuelConsumption);
    return this.fuelConsumption;
}

this.addFuelToTank = function(litresOfFuel) {
    this.tankCapacity.push(litresOfFuel);
    return this.tankCapacity += litresOfFuel;
}

function GasolineStation(litresOfFuel) {
    return this.GasolineStation += litresOfFuel;
}

console.log(GazProm = new GasolineStation(11));
console.log(Belarusneft = new GasolineStation());
console.log(Lukoil = new GasolineStation());
console.log(A100 = new GasolineStation());