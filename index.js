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
        this.dishes = [];
        this.infos = [];
    }

    addDish(dish){
        this.dishes.push([dish.title, dish.products]);
    }

    getTotalCalories(){
        for (const dish of this.dishes){
            for(const product of dish[1]){
                const productWeight = product[1];
                const productCalories = product[2];
                this.totalCalories += (productWeight * productCalories / 100);
            }
        }
        return this.totalCalories;
    }

    getAllDishesInfo(){
        for (const dish of this.dishes){
            const dishTitle = dish[0];
            let dishCalories = 0;

            for(const product of dish[1]){
                const productWeight = product[1];
                const productCalories = product[2];
                dishCalories += (productWeight * productCalories / 100);
            }

            let dishInfo = dishTitle + ' 1 порция, ' + dishCalories + ' ккал.';

            for(const product of dish[1]){
                const productTitle = product[0];
                const productWeight = product[1];
                const productCalories = product[2];

                dishInfo += '\n' + productTitle + ', ' + productWeight + ' гр., ' + productCalories + ' ккал.';
            }

            dishInfo += '\n';

            this.infos.push(dishInfo);
        }

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

const ragou = new Dish('Рагу');
ragou.addProduct(meat, 100);
ragou.addProduct(rice, 150);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(ragou);

const calories = calculator.getTotalCalories();
console.log(calories); // должно вывести 373.25

const totals = calculator.getAllDishesInfo();
console.log(totals);