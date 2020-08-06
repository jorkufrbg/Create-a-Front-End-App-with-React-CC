// When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

const bobsFollowers = ['friend 1', 'friend 2', 'friend 3', 'friend 4'];
const tinasFollowers = ['friend 3', 'friend 4', 'friend 5'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {

    for (let j = 0; j < tinasFollowers.length; j++) {

        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);

        }
    }
};

console.log(mutualFollowers);