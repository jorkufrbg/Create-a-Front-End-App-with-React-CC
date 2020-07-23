//1.Start by making a parent class for Primary, Middle, and High classes. Create an empty class named School
class School {

    //Inside the School class, create an empty constructor() that accepts three parameters. The names of these parameters should match the properties listed in the narrative above.
    constructor(name, level, numberOfStudents) {

        //Inside the constructor(), set the School properties. Prepend all of the properties with an underscore (_).
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    //Create getters for the name, level, and numberOfStudents properties. Each getter should return the value saved to the property.
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    /*Create a setter for numberOfStudents. The method should first check if the input (newnumberOfStudents) is a number.
  If it is a number, then set the numberOfStudents property. If not, log, 'Invalid input: numberOfStudents must be set to a Number.' */
    set numberOfStudents(value) {
        if (value.isNan) {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        } else {
            this._numberOfStudents = value;
        }
    }

    /*Under your getters, create a method named quickFacts that logs the following string to the console:
    SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
    In place of SCHOOL NAME, substitute an instance’s name value. In place of NUMBER OF STUDENTS, substitute an instance’s numberOfStudents value. In place of LEVEL, substitute an instance’s level value. */
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    /*
    Under .quickFacts(), create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.
    Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return the substitute teacher at that randomly generated index.*/
    static pickSubstituteTeacher(substituteTeachers) {
        const randInt = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randInt]
    }
}

/*Next, we’’ll build a PrimarySchool class that extends School. If you feel comfortable building the PrimarySchool class on your own, give it a shot. If not, use the steps below to help you along the way.
Whether you want to follow the steps or not, it’s important to note, the PrimarySchool class only has one additional property, pickupPolicy.
Create an empty PrimarySchool class that extends School. */
class PrimarySchool extends School {
    //Inside the PrimarySchool class, create a constructor() that accepts three arguments.
    constructor(name, numberOfStudents, pickupPolicy) {

        //Call super on the first line of the PrimarySchool‘s constructor(). Pass it any arguments that the parent constructor() uses.Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.
        super(name, 'primary', numberOfStudents);
        //Use the remaining argument to set the pickupPolicy property
        this._pickupPolicy = pickupPolicy;
    }

    //Since our PrimarySchool class inherits Schools‘s properties and getters, we only need to create one new getter in the PrimarySchool class. Add this getter to the PrimarySchool class. Each getter should return the value saved to that property.
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

/* 
In this task, you will create a HighSchool class that extends the School class. In addition to the properties, getters, and methods in School, the HighSchool includes the following:

Properties: sportsTeams (array of strings)
Getters: A getter for the sportsTeams array. The getter should log all of the sports to the console.*/
class HighSchool extends School {

    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }

}

/*Create a PrimarySchool instance with the following properties:

Name: 'Lorraine Hansbury'
Number of Students: 514
Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
Save the instance to a constant variable named lorraineHansbury. */
const lorraineHansburry = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansburry.quickFacts();

//The principal of Lorraine Hansbury needs a substitute teacher for the day.Call .pickSubstituteTeacher() on School, and pass the following array as an argument:
const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

/*Create a HighSchool instance with the following properties:

Name: 'Al E. Smith'
Number of Students: 415
Sports Teams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
Save the instance to a constant variable named alSmith.*/
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);