let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 15;

if (age >= 18 && registeredEarly) {
    raceNumber += 1000
}


if (age >= 18 && registeredEarly) {
    console.log(`${raceNumber} will race at 9:30`);
} else if (age >= 18 && registeredEarly === false) {
    console.log(`${raceNumber} will race at 11:00am`);
} else if (age < 18) {
    console.log(`${raceNumber} will race at 12:30am`);
}
console.log(raceNumber);