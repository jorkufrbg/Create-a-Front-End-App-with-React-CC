//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

//Create an empty class named Surgeon.
class Surgeon {

    //Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department. Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    //Under the constructor(), create a getter called name that returns the value saved to _name.
    get name() {
        return this._name;
    }

    //Under the name getter, create a getter called department that returns the value saved to _department.
    get department() {
        return this._department;
    }

    //Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    //Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff. Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

//Create an instance of the Surgeon class — set the name to 'Curry' and department to 'Cardiovascular'.Save the instance to a constant variable called surgeonCurry.
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

//Create an instance of the Surgeon class — set the name to 'Durant' and department to 'Orthopedics'.Save the instance to a constant variable called surgeonDurant.
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//At the bottom of main.js, use console.log() to print the value saved to thename property of the surgeonCurry object.
console.log(surgeonCurry.name);

//Call .takeVacationDays() on surgeonCurry, with an input of 3
surgeonCurry.takeVacationDays(3);

//After the call to .takeVacationDays(), use console.log() to print the value saved to the remainingVacationDays property of the surgeonCurry instance.
console.log(surgeonCurry.remainingVacationDays);