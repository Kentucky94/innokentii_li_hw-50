class Product{
    constructor(title, calories){
        this.title = title;
        this.calories = calories;
    }
}

class Dish{
    constructor(title){
        this.title = title;
        this.products = [];
    }
    addProduct(product, weight){
        this.products.push([product.title, weight, product.calories]);
    }
}

class CaloriesCalculator{
    constructor(){
        this.totalCalories = 0;
        this.infos = [];
    }

    addDish(dish){
        let total = 0;

        const products = dish.products;
        for(const product of products){
            const productWeight = product[1];
            const productCalories = product[2];
            const productTotal = productCalories * productWeight / 100;
            this.totalCalories += productTotal;

            total += productTotal;
        }

        let dishInfo = dish.title + ' 1 порция, ' + total;

        for(const product of products){
            const productTitle = product[0];
            const productWeight = product[1];
            const productCalories = product[2];

            dishInfo += '\n' + productTitle + ', ' + productWeight + ' гр., ' + productCalories + ' ккал.';
        }

        this.infos.push(dishInfo);
    }

    getTotalCalories(){
        return this.totalCalories;
    }

    getAllDishesInfo(){
        for(const info of this.infos){
            console.log(info);
        }
    }
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const gyudon = new Dish('Гюдон');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(gyudon);

const calories = calculator.getTotalCalories();
console.log(calories); // должно вывести 373.25

const totals = calculator.getAllDishesInfo();
console.log(totals);