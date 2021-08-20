/* Создать функцию конструктор Card,который хранит имя владельца банковской 
карты и баланс счета на карте.
Определить функцию конструктор, позволяющие создавать карту на определенное имя
с определенным начальным балансом или без указания начального баланса.
Также определить функции для получения, пополнения и уменьшения баланса.
Определить функции, позволяющие вывести баланс счета в другой валюте
(курс конверсии передается как аргумент метода)
Имя владельца может передаваться через переменную окружения(process.env).
Bonus!:Написать юнит-тесты;сымитировать приватность 
поля с балансом, чтобы переменная была недоступна для изменений(только через функции работы с балансом). */

function Card(cardOwnerName, cardBalance) {
    this.cardOwnerName = "Anastasiya";
    this.cardBalance = 100;
}

function createNewCardForSpecialPerson(withBasicBalance, withoutBasicBalance) {
    this.withBasicBalance = 100;
    this.withBasicBalance = 0;
}

function balanceOperation(gettingMoney, pushingMoney, spendingMoney) {

}
let displayCard = function() {
    this.gettingMoney.toggle("take");
    this.pushingMoney.toggle("put");
    this.spendingMoney.toggle("spent");
}

const gettingMoneyInDollars = function(count)

//const debit = new Card();
//debit.balance = 50;
//console.log(debit.balance);

//add opened cards to OpenedCards list and check if cards are match or not
/*function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

//for when cards match
function matched(){
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

//for when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}

//disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}*/

/*function testCreditCard () {
    myCardNo = document.getElementById('CardNumber').value;
    myCardType = document.getElementById('CardType').value;
    if (checkCreditCard (myCardNo,myCardType)) {
      alert ("Credit card has a valid format")
    } 
    else {alert (ccErrors[ccErrorNo])};
  } */


module.exports = { Card };
module.exports = createNewCardForSpecialPerson();
module.exports = balanceOperation();
module.exports = displayCard();