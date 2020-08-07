//Write a comment that explains this line of code.
const myName = 'Georgi'.toLowerCase();
const myAge = 21;
let earlyYears = 2;

//Write a comment that explains this line of code.
earlyYears *= 10.5;
console.log(earlyYears);

//Write a comment that explains this line of code.
let laterYears = myAge - 2;


//Write a comment that explains this line of code.
laterYears *= 4;
console.log(laterYears);

//Write a comment that explains this line of code.
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//Write a comment that explains this line of code.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);