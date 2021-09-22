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


class PizzaPapa {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }
    getPrice() {
        let price = this.size === 'small' ? 50 : 100;
        if (this.toppings.length > 0) {
            this.toppings.forEach(toppings => {
                switch (toppings) {
                    case 'cheese':
                        price += 10;
                        break;
                    case 'salami':
                        price += 15;
                        break;
                    case 'basilic':
                        price += 10;
                        break;
                    case 'meat':
                        price += 20;
                        break;
                    default:
                        return;
                }
            });
        }
        return 'The total price of "PapaBo" pizza is ' + price + ' rubles.';
    }
    getCallories() {
        let calories = this.size === 'small' ? 20 : 40;
        if (this.toppings.length > 0) {
            this.toppings.forEach(toppings => {
                switch (toppings) {
                    case 'cheese':
                        calories += 10;
                        break;
                    case 'salami':
                        calories += 20;
                        break;
                    case 'basilic':
                        calories += 5;
                        break;
                    case 'meat':
                        calories += 15;
                        break;
                    default:
                        return;
                }
            });
        }
        if ('cheese' || 'basilic') {
            return 'The total calories of your Vegeterian pizza is ' + calories + ' ccal.';
        } else {
            return 'The total calories of your pizza is ' + calories + ' ccal.'
        }
    }
    addToppings() {
        let assortimentOfToppings = [
            'cheese',
            'salami',
            'basilic',
            'meat'
        ]
        return "We added all our toppings to your  " + this.size + " PapaJoe pizza : " + assortimentOfToppings;
    }
}

console.log(papaBo = new PizzaPapa('small', ['cheese', 'basilic']));

console.log(papaJoe = new PizzaPapa('small'));
console.log(papaBo.getPrice());
console.log(papaBo.getCallories());

console.log(papaJoe.addToppings());

module.exports = { PizzaPapa };