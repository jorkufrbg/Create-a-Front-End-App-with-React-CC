//Getters are methods that get and return the internal properties of an object.
// Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return `System malfunction: cannot retrieve energy level`
        }
    }
};

console.log(robot.energyLevel);