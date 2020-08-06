// An instance is an object that contains the property names and methods of a class, but with unique property values

//Create an empty class named Surgeon.
class Surgeon {

    //Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department.
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

//Create an instance of the Surgeon class — set the name to 'Curry' and department to 'Cardiovascular'.Save the instance to a constant variable called surgeonCurry.
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

//Create an instance of the Surgeon class — set the name to 'Durant' and department to 'Orthopedics'.Save the instance to a constant variable called surgeonDurant.
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');