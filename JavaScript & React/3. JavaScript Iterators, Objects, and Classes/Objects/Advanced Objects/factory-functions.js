// A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(tinCan);