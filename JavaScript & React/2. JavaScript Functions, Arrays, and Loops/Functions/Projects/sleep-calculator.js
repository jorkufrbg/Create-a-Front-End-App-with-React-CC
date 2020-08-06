const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
            break;
        case 'Tuesday':
            return 6;
            break;
        case 'Wednesday':
            return 4;
            break;
        case 'Thursday':
            return 8;
            break;
        case 'Friday':
            return 3;
            break;
        case 'Saturday':
            return 10;
            break;
        case 'Sunday':
            return 10;
            break;
        default:
            return 'invalid parameter';
    }
};

const getActualSleepHours = () => {

    return getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday');
};
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('user got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('user got more sleep than needed.');
    } else {
        console.log(' the user should get some rest.');
    }

};

calculateSleepDebt();