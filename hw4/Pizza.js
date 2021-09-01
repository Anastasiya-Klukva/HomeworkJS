/* Напищите класс Пицца, которая предлагается 2х размеров.
-маленькая- 50 рублей, 20 калорий, большая- 100 рублей, 40 калорий.
Также пицца может иметь начинки:-сыр(10рублей, 10 калорий),-салями(15 рублей, 20 калорий),
-зелень(10 рублей,5 калорий),-мясо(20 рублей, 15 калорий.
 Если пицца не имеет какого-либо мяса(либо салями)- она будет вегетерианской.
 Посчитайте стоимость и калорийность пиццы.Bonus!Пицца может поддерживать динамические начинки и 
 размер(их можно менять по ходу исполнения программы- надо дописать соответствующие методы/функции ) */


class Pizza {
    constructor(pizzaSize, pizzaPriсe, pizzaCalories) {
        this.pizzaSize = pizzaSize;
        this.pizzaPriсe = pizzaPriсe;
        this.pizzaCalories = pizzaCalories;
    }
    bake() {
        console.log(
            `Baking a ${this.pizzaSize} for ${this.pizzaPriсe} rubles, which has ${this.pizzaCalories} calories.`
        );
    }
}

class PizzaToppings extends Pizza {
    constructor(pizzaSize, pizzaPriсe, pizzaCalories, toppings, toppingsCalories, toppingsPrice) {
        super(pizzaSize, pizzaPriсe, pizzaCalories);
        this.toppings = toppings;
        this.toppingsCalories = toppingsCalories;
        this.toppingsPrice = toppingsPrice;

        this.sumPrice = function() {
            return toppingsPrice + pizzaPriсe;
        }
        this.sumCalories = function() {
            return toppingsCalories + pizzaCalories;
        }
    }
    bakePizzaWithToppings() {
        console.log(`
        Baking a ${this.pizzaSize} pizza for ${this.pizzaPriсe} rubles, which has ${this.pizzaCalories} calories,
        and add some ${this.toppings}, which has ${this.toppingsCalories} calories for ${this.toppingsPrice} rubles.
        `);

        if (this.toppings === 'cheese with basil') {
            return console.log('Vegeterian pizza');
        } else {
            return console.log('Pizza for predators');
        }
    }
}

const myPizza = new PizzaToppings('small', 50, 20, 'cheese with basil', 10 + 10, 10 + 5);
myPizza.bakePizzaWithToppings();
console.log("The total price for pizza is " + myPizza.sumPrice() + " rubbles.");
console.log("The total sum of pizza calories is " + myPizza.sumCalories() + " .");


module.exports = { Pizza };
module.exports = { PizzaToppings };