/* Напищите класс Пицца, которая предлагается 2х размеров.
-маленькая- 50 рублей, 20 калорий, большая- 100 рублей, 40 калорий.
Также пицца может иметь начинки:-сыр(10рублей, 10 калорий),-салями(15 рублей, 20 калорий),
-зелень(10 рублей,5 калорий),-мясо(20 рублей, 15 калорий).
 Если пицца не имеет какого-либо мяса(либо салями)- она будет вегетерианской.
 Посчитайте стоимость и калорийность пиццы.
 Bonus!Пицца может поддерживать динамические начинки и 
 размер(их можно менять по ходу исполнения программы- надо дописать соответствующие методы/функции ) 
const myPizza = new Pizza(Pizza.SIZES.small); // маленькая пицца
myPizza.addTopping(Pizza.TOPPINGS.salad) // добавили салат
myPizza.isVagan // true – пицца не имеет мяса
myPizza.removeTopping(PIZZA.TOPPINGS.salad)// удаляем топинг
myPizza.addTopping(PIZZA.TOPPINGS.meat) // мясо
myPizza.isVegan // false */

class Pizza {
    static SIZES = {
        small: { price: 50, calories: 20 },
        big: { price: 100, calories: 40 }
    };
    static TOPPINGS = {
        oregano: { name: 'oregano', price: 10, calories: 5 },
        cheese: { name: 'cheese', price: 10, calories: 10 },
        meat: { name: 'meat', price: 20, calories: 15, meat: true },
        salami: { name: 'salami', price: 15, calories: 20, salami: true }
    };
    constructor(size, toppings) {
        this.size = size;
        this.toppings = [];
    }
    addToppings(toppings) {
        return this.toppings.push(toppings);
    }
    removeTopping(toppings) {
        return this.toppings.pop(toppings);
    }
    get isVegan() {
        return !this.toppings.some((toppings) => toppings.meat);
    }
}
console.log(myPizza = new Pizza(Pizza.SIZES.small));
console.log(myPizza.addToppings(Pizza.TOPPINGS.oregano));
console.log(myPizza.isVegan);
console.log(myPizza.removeTopping(Pizza.TOPPINGS.salami));
console.log(myPizza.addToppings(Pizza.TOPPINGS.cheese));

module.exports = { Pizza }