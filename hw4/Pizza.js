/* Напищите класс Пицца, которая предлагается 2х размеров.
-маленькая- 50 рублей, 20 калорий, большая- 100 рублей, 40 калорий.
Также пицца может иметь начинки:-сыр(10рублей, 10 калорий),-салями(15 рублей, 20 калорий),
-зелень(10 рублей,5 калорий),-мясо(20 рублей, 15 калорий.
 Если пицца не имеет какого-либо мяса(либо салями)- она будет вегетерианской.
 Посчитайте стоимость и калорийность пиццы.Bonus!Пицца может поддерживать динамические начинки и 
 размер(их можно менять по ходу исполнения программы- надо дописать соответствующие методы/функции ) */

class Pizza {
    constructor(size) {
        this.smallPizza = size.smallPizza;
        this.bigPizza = size.bigPizza;
    }


}







const myPizza = new Pizza(Pizza.SIZES.small); // маленькая пицца
myPizza.addTopping(Pizza.TOPPINGS.salad); // добавили салат
myPizza.isVegan = true; // пицца не имеет мяса


myPizza.removeTopping(PIZZA.TOPPINGS.salad); // удаляем топпинг
myPizza.addTopping(PIZZA.TOPPINGS.meat); // мясо
myPizza.isVegan; // false

module.exports = { Pizza };