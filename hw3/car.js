/* Создайте модуль Car, у которой есть расход топлива и емкость бака. 
У данного модуля есть 2 функции(публичных)- ехать на расстояние и заправка.
Функцию по заправке принимает модуль gasoline station. В этом модуле 1 функция-
заправить бензином машину на какое-то кол-во топлива.Отправьте машину из Могилева в Минск.Расстояние 200 км.
Количество станций от 4 до 8.Пользователь задает кол-во заправляемого топлива на каждой заправке.
Если мы не можем продолжать дальше путь(закончился бензин)- написать кол-во пройденного расстояния в км.*/

var car = (function Car(fuelСonsumption, fuelTankСapacity) {
    var consumption = fuelСonsumption || 0;
    var capacity = fuelTankСapacity || 0;

    function GoDistance(distance) {
        this.distance = distance;
        return distance - consumption;
    }
    return capacity;

    {
        this.refuelСar = function(count) {
            return consumption + capacity + Lukoil;
        }
        const Belarusneft = new GasolineStation();
        const Belarusneft2 = new GasolineStation();
        const Lukoil = new GasolineStation();
        const A100 = new GasolineStation();
    }
})();
refuelСar(10);
GoDistance(200);
GasolineStation();
console.log(Car = new Car(10, 50));
console.log(GasolineStation.refuelСar(10, Lukoil));


/* - в Car функция Заправиться принимает газолинстейшн,а он(объект)имеет функцию заправить машину,
   
-по умолчанию колво топлива, и когда передается машина в функцию заправить, 
  то передаем это в функцию и пополняем бак
    
  -описать модуль Кар , модуль может возвращать ф-цию конструктора   */

module.exports = { Car, GasolineStation, refuelСar };