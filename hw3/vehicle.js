/* Создайте модуль Car, у которой есть двигатель, расход топлива и емкость бака. 
У данного модуля есть 2 функции(публичных)- ехать на расстояние и заправка.
Функция по заправке принимпет модуль gasoline station. В этом модуле 1 функция-
заправить бензином машину на каое-то кол-во топлива.Отправьте машину из Могилева в Минск.Расстояние 200 км.
Количество станций от 4 до 8.Пользователь задает кол-во заправляемого топлива на каждой заправке.
Если мы не можем продолжать дальше путь- написать кол-во пройденного расстояния в км. */

function Vehicle() {
    //конструктор,  набор необходимых приватных и публичных функций 
}

function GasolineStation() {
    this.refuelСar = function(count) {}
}

const Belarusneft = new GasolineStation();
const Belarusneft2 = new GasolineStation();
const Lukoil = new GasolineStation();
const A100 = new GasolineStation();