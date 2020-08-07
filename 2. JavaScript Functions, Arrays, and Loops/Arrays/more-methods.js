// There are many more array methods than just .push() and .pop(). You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
groceryList.unshift('popcorn');

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);