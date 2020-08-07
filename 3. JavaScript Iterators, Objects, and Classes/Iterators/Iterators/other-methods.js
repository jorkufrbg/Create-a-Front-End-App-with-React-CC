// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => { return word.length > 5 });

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => { return word.length > 5 }));
