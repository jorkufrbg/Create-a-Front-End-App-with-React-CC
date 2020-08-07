/* Create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee. Below, we have listed the properties and methods you will find in the Doctor and Nurse classes.
Create a parent class named HospitalEmployee. Add a constructor with name as an argument. */
class HospitalEmployee {

    //Inside of the constructor(), set the instance’s _name to name and _remainingVacationDays to 20.
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    //Under the constructor, create getters for your _name and _remainingVacationDays properties.Inside the getter, return the property’s value
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    /*Under the getters, add a method called takeVacationDays.
  This method should accept one argument, called daysOff.
  Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays. */
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    //Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.
    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
}

//Under HospitalEmployee, create an empty class named Nurse that extends HospitalEmployee.
class Nurse extends HospitalEmployee {

    //Inside the Nurse class, create a constructor() that accepts two arguments. Use the list of properties above to name these arguments.
    constructor(name, certifications) {

        //In the Nurse constructor, call the parent’s constructor method and pass the appropriate value(s).
        super(name);

        //Inside of the Nurse constructor, and under super, set _certifications.
        this._certifications = certifications;
    }

    //Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance’s _certifications.
    get certifications() {
        return this._certifications;
    }

    //Add a method called addCertification under the certifications getter. The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.
    addCertification(newCertification) {
        this.certifications.push(newCertification);
    }
}

//* Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property: name: 'Olynyk' | certifications: ['Trauma', 'Pediatrics'] */
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

//Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.
nurseOlynyk.takeVacationDays(5);

//Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.
console.log(nurseOlynyk.remainingVacationDays);

//At the bottom call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.
nurseOlynyk.addCertification('Genetics');

//Log the value saved to the certifications property of nurseOlynyk.
console.log(nurseOlynyk.certifications);
console.log(HospitalEmployee.generatePassword);

