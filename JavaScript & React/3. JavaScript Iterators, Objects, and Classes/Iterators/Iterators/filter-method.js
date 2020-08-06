// Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const smallNumbers = randomNumbers.filter(number => {
    return number < 250;
});

console.log(smallNumbers);

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});

console.log(longFavoriteWords);