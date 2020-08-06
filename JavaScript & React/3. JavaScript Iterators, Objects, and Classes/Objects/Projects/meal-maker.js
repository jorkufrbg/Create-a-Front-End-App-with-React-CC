// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn) {
            this._appetizers = appetizersIn;
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsIn) {
            this._mains = mainsIn;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts = dessertsIn;
        },
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    ///===============================================================

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
};

//Appetizers
menu.addDishToCourse('appetizers', 'salad', 4.10);
menu.addDishToCourse('appetizers', 'wings', 5.55);
menu.addDishToCourse('appetizers', 'fries', 6.32);

//Mains
menu.addDishToCourse('mains', 'Burgers', 10.30);
menu.addDishToCourse('mains', 'Fish', 16.20);
menu.addDishToCourse('mains', 'ribbs', 26.60);

//Desserts
menu.addDishToCourse('desserts', 'Pancakes', 1.00);
menu.addDishToCourse('desserts', 'Muffins', 2.00);
menu.addDishToCourse('desserts', 'Beer', 3.00);

const meal = menu.generateRandomMeal();
console.log(meal);
