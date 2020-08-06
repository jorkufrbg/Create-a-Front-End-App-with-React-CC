// constant containing the weather today in Kalvin
const kelvin = 0;
console.log(kelvin);

//here we calculate current celsius by substrcting 273 from the value of kelvin
let celsius = kelvin - 273;
console.log(celsius);

//here we calculate current farenheit by doing some math
let farenheit = (Math.floor(celsius * (9 / 5) + 32));
console.log(farenheit);

let newton = (Math.floor(celsius * (33 / 100)));

console.log(`The temperature is ${newton} degrees Fahrenheit.`);