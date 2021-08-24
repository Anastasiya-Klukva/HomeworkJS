/* Создать функцию конструктор Card,который хранит имя владельца банковской 
карты и баланс счета на карте.
Определить функцию конструктор, позволяющие создавать карту на определенное имя
с определенным начальным балансом или без указания начального баланса.
Также определить функции для получения, пополнения и уменьшения баланса.
Определить функции, позволяющие вывести баланс счета в другой валюте
(курс конверсии передается как аргумент метода).
Имя владельца может передаваться через переменную окружения(process.env).
Bonus!:Написать юнит-тесты;сымитировать приватность 
поля с балансом,чтобы переменная была недоступна для изменений(только через функции работы с балансом). 
!!!это должны быть функции , определенные внутри для card, а не конструктор
*/


function Card(cardOwnerName, cardBalance) {
    let balance = cardBalance || 20;
    this.cardOwnerName = cardOwnerName;

    this.getBalance = function() {
        return balance;
    }
    this.increaseBalance = function(adding) {
        return balance + adding;
    }
    this.decreaseBalance = function(subtract) {
        return balance - subtract;
    }
    this.convertBalance = function(conversion) {
        return balance * conversion;
    }
};

console.log(Visa = new Card("Nastya", 10));
console.log(Visa.getBalance());
console.log(Visa.increaseBalance(5));
console.log(Visa.decreaseBalance(7));
console.log(Visa.convertBalance(2));

module.exports = { Card };