// JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// THIS:

const squareNum = (num) => {
    return num * num;
};

//Becomes this:
const squareNum = num => num * num;

// More:
const plantNeedsWater = day => day === 'Wednesday' ? true : false;