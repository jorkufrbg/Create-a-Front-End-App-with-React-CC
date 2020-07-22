//Create an empty class called Media
class Media {

    //Inside the Media class, create an empty constructor() method that takes one parameter.
    constructor(title) {

        //Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_).
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //Create getters for the title, isCheckedOut, and ratings properties. Each getter should return the value saved to the matching property.
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings
    }

    //Create a setter for the isCheckedOut property
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    //Under your getters, create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property. If the value is true, then change it to false. If the value is false, then change it to true.
    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isCheckedOut;
    }

    /*Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array.
  Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result.*/
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingsSum / this.ratings.length;
    }

    //add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
    addRating(value) {
        this.ratings.push(value);
    }
}
/*
Next, we’’ll build a Book class that extends Media. If you feel comfortable building the Book class on your own, give it a shot. If not, use the steps below to help you along the way.

Whether you want to follow the steps or not, use the list of properties, getters, and methods as a reference.

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Create an empty Book class that extends Media.*/
class Book extends Media {

    //Inside the Book class, create a constructor that accepts three arguments. These arguments are used to set properties that do not have default values.
    constructor(author, title, pages) {

        //Call super on the first line of the Books‘s constructor method. Pass it any arguments that the parent constructor uses.
        super(title);
        //Use the remaining arguments to set the author and pages properties in Book.
        this._author = author;
        this._pages = pages;
    }

    //Add two new getters to the Book class. Each getter should return the value saved to its matching property.
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

/*
Let’s see if you can create an entire Movie class using only the property, getter, and method specifications below:

Movie
properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
getters: all properties have a getter
methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Take a look at the Hint to see step-by-step instructions.*/
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

//Create a Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();

//Log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//.Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

//Create a Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();
//Log the value saved to the isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);
//Call .addRating() three times on speed with inputs of 1, 1, and 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//Call .getAverageRating() on speed. Log the result to the console.
console.log(speed.getAverageRating());