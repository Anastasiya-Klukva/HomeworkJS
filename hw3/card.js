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
*/

function SetCardParameters(cardOwnerName, cardBalanceInBYN, cardBalanceInEuro) {
    this.cardOwnerName = cardOwnerName;
    this.cardBalanceInBYN = cardBalanceInBYN;
    this.cardBalanceInEuro = cardBalanceInEuro;

}

console.log(new SetCardParameters("Anastasiya", 1000, 0));

function CreateNewCardForSpecialPerson(withBasicBalance, withoutBasicBalance) {
    this.withBasicBalance = withBasicBalance;
    this.withBasicBalance = withoutBasicBalance;
}

console.log(new CreateNewCardForSpecialPerson(100, 0));

function OpetationWithBalance(gettingMoney, pushingMoney, spendingMoney) {
    this.gettingMoney = gettingMoney;
    this.pushingMoney = pushingMoney;
    this.spendingMoney = spendingMoney;
}

console.log(new OpetationWithBalance(500, 10, 5));

function ShowBalanceEuroCurrency(euroCurrency) {
    this.euroCurrency = euroCurrency;
}